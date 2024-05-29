<script>
	import { ReservationCard, Header } from '$lib/index.js';
	export let data;
	
	console.log(data.hygraphData.werkplekReserverings)

	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<header>
	<Header
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
	<!-- menu  -->
</header>

<main>
	<h1>Reserveringen</h1>

	{#each data.hygraphData.werkplekReserverings as book}
		<p>{book.obaId}</p>
		<p>{book.tijd}</p>
		<p>{book.verdieping}</p>
		<p>{book.werkplek}</p>
	{/each}

	<details>
		<summary>Boeken</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>E-books</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>Luisterboeken</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>

	<details>
		<summary>Activiteiten</summary>
		<section>
			{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
				<ReservationCard
					bookDetailLink={book.detailLink}
					bookUrl={book.image.url}
					bookTitle={book.title}
					bookAuthor={book.author}
					bookStatus={book.beschikbaarheid}
				/>
			{/each}
		</section>
	</details>

	<section class="overview">
		{#each data.hygraphData.uitleengeschiedenis1.slice(0, 5) as book}
			<ReservationCard
				bookDetailLink={book.detailLink}
				bookUrl={book.image.url}
				bookTitle={book.title}
				bookAuthor={book.author}
				bookStatus={book.beschikbaarheid}
			/>
		{/each}
	</section>
</main>

<style>
	main {
		min-height: 100vh;
	}
	h1 {
		padding: 2rem;
	}

	.overview {
		padding-left: 4rem;
	}

	summary {
		font-size: 1.8rem;
		font-weight: 500;
	}

	summary::marker {
		color: var(--primary-accent-color);
	}

	details {
		padding-left: 2rem;
	}

	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
		justify-items: center;
	}

	/* tablet breakpoint */
	@media (min-width: 40em) {
		section {
			gap: 2rem;
			padding: 2rem;
		}
	}
</style>
