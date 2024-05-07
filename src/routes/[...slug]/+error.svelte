<script>
	import { BreadCrumbs } from '$lib/index.js';
</script>

<body>
	<nav>
		<BreadCrumbs />
	</nav>

	<main data-sveltekit-reload>
		<h1>Oeps, deze pagina bestaat niet</h1>
		<section>
			<p>
				Ga terug naar de <a href="/">homepage</a> of gebruik de zoekfunctie.
			</p>

			<p>
				Je kunt natuurlijk ook altijd <a href="/">contact</a> met ons opnemen.
			</p>
		</section>
		<a class="backButton" href="javascript:window.history.back()">Terug naar de vorige pagina</a>
	</main>
</body>

<style>
	h1,
	p,
	a {
		font-family: 'Poppins', sans-serif;
	}

	p {
		max-width: 60ch;
		margin: 0;
	}

	body {
		background-color: #f2f5ff;
	}

	main {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 90vh;
	}

	.backButton {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		color: #fff;
		background-color: #0064c8;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-decoration: none;
	}

	.backButton:hover {
		background-color: #0051a8;
	}

	a {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: 1rem;
		text-decoration: underline;
	}
</style>
