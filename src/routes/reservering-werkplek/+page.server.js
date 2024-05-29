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

// Haal de data op uit Hygraph
export async function load() {
    let query = gql`
    query MyQuery {
        werkplekReserverings {
          obaId
          id
          tijd
          verdieping
          werkplek
        }
      }
    `;
    const data = await hygraph.request(query);
    return data;
  }