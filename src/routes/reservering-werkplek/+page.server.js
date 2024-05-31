import { PUBLIC_API_KEY } from '$env/static/public';
import { fail } from "@sveltejs/kit";
import { request as graphqlRequest } from "graphql-request";
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const prerender = false;

// Data naar Hygraph sturen
export const actions = {
    default: async ({ request, url }) => {

        const formData = await request.formData();

        let obaId = formData.get("obaId");
        let tijd = formData.get("tijd");
        let verdieping = formData.get("verdieping");
        let werkplek = formData.get("werkplek");
        console.log(tijd)
        // Maak nieuwe content aan voor Hygraph
        const mutation = `
        mutation {
            createWerkplekReservering(data: { obaId: "${obaId}", tijd: "${tijd}", verdieping: "${verdieping}", werkplek: "${werkplek}" }) {
                obaId
                tijd
                verdieping
                werkplek
            }
        }
        `;

        // Hygraph url
        const endpoint =
            "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfcmwhh50b3j01t9gzgndaea/master";

        // Hygraph autorisatie
        const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_KEY;
        const headers = {
            Authorization: `Bearer ${HYGRAPH_TOKEN}`,
        };

        // Voer de mutatie uit
        const postData = await graphqlRequest(
            endpoint,
            mutation,
            undefined,
            headers
        );
        return { success: true, postData };
    },
};

export async function load() {
	// De openbare sleutel voor de OBA API
	const publicKey = PUBLIC_API_KEY;
	// Opmerking: De zoekterm is momenteel uitgeschakeld (uitgecommentarieerd).
	// const searchTerm = 'kikker';

	// GraphQL-query voor het ophalen van uitleengeschiedenis
	const query = gql`
		query MyQuery {
			homepages {
				homepageText
			}
			families {
				name
			}
			activiteitens {
				activiteitImage {
					url
				}
				activiteitLink
				activiteitNaam
				activiteitBeschrijving
			}
		}
	`;

	  // Hygraph-request voor het ophalen van data met behulp van GraphQL-query
	  const hygraphData = await hygraph.request(query);
    // URL-parameters voor het maken van zoekopdrachten naar boeken, e-books en luisterboeken
    const space = "%20";
    const bookItems = "boeken";
    const EbookItems = "e-books";
    const audioItems = "luisterboeken";
    const urlSearch = "search/";
    const urlBase = "https://zoeken.oba.nl/api/v1/";
    const urlQuery = "?q=";
    const urlDefault = "special:all";
    const urlKey = `&facet=pubyear(2019)&authorization=${publicKey}`;
    const urlOutput = "&refine=true&output=json";
    const defaultUrlBooks = urlBase + urlSearch + urlQuery + urlDefault + space + bookItems + urlKey + urlOutput;
    const defaultUrleBooks = urlBase + urlSearch + urlQuery + urlDefault + space + EbookItems + urlKey + urlOutput;
    const defaultUrlAudioBooks = urlBase + urlSearch + urlQuery + urlDefault + space + audioItems + urlKey + urlOutput;
    // Fetch-requests voor het ophalen van boeken, e-books en luisterboeken 

	const responseBooks = await fetch(defaultUrlBooks);

	const responseEBooks = await fetch(defaultUrleBooks);

	const responseAudioBooks = await fetch(defaultUrlAudioBooks);

	// Het omzetten van de JSON-respons naar bruikbare objecten
	const apiBooks = await responseBooks.json();
	const apiAudioBooks = await responseAudioBooks.json();
	const apiEBooks = await responseEBooks.json();

	// Het retourneren van de verzamelde gegevens

	return {
		hygraphData,
		apiBooks,
		apiAudioBooks,
		apiEBooks
		// andere gegevens die je wilt doorgeven aan de component
	};
}
