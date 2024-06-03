<script>
	import { Card, Header, ImgPlattegrond, BoekAnimatie } from '$lib/index.js';
	import { enhance } from '$app/forms';

	export let form;
	export let data;

	let loading = false;

	// Custom enhancement function
	function handleForm() {
		loading = true;

		return async ({ result, update }) => {
			// fake 400ms delay voor user feedback
			await setTimeout(() => {
				update();

				loading = false;
			}, 400);
		};
	}
</script>

<header>
	<Header
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
</header>

<main>
	<div class="intro">
		<div class="intro-title">
			<h1>Oosterdok</h1>
			<button class="btn-popover" popovertarget="my-popover"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="25px"
					height="25px"
					viewBox="-0.5 0 25 25"
					fill="none"
				>
					<path
						d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z"
						fill="#000000"
					/>
				</svg></button
			>
			<div popover id="my-popover">
				<p>Faciliteiten</p>
				<ul>
					<li>Cursus-/vergaderruimte</li>
					<li>Zaalverhuur</li>
					<li>Maakplaats</li>
					<li>Internettoegang</li>
					<li>Horecagelegenheid (café, eetcafé, leescafé, restaurant)</li>
					<li>(individuele) werk-/studieplekken</li>
					<li>Winkel</li>
					<li>Expositieruimte</li>
					<li>WiFi</li>
					<li>Printfaciliteiten</li>
					<li>Filmzaal</li>
					<li>(oefen)computers/-laptops</li>
				</ul>
				<p>Toegankelijkheid</p>
				<ul>
					<li>Lift of traplift verdieping</li>
					<li>Aangepast sanitair</li>
					<li>Rolstoeltoegankelijk</li>
					<li>Rolstoeldoorgankelijk</li>
					<li>Parkeervoorziening gehandicapten</li>
				</ul>
			</div>
		</div>
		<p>
			Reserveer een werkplek in de OBA. Vul hieronder je OBA pasnummer in, de verdieping waar je
			wilt werken, de werkplek en de datum en tijd dat je wilt komen werken.
		</p>
	</div>
	<ul class="info">
		<li><strong>Adress:</strong> Oosterdokskade 143, 1011DL Amsterdam</li>
		<li><strong>Telefoon:</strong> +31 (0)205230900</li>
		<li><strong>E-mail:</strong> klantenservice@oba.nl</li>
		<li><strong>Openingstijden</strong></li>
		<li>ma/vr 10:00 - 17:00</li>
		<li>za/zo 10:00 - 17:00</li>
	</ul>
	<img height="600" width="440" src={ImgPlattegrond} alt="oosterdok" />
	<div class="card">
		<h2>Reserveer <span>je werkplek</span></h2>

		<form action="/reservering-werkplek" method="POST" use:enhance={handleForm}>
			<label for="obaID">Je Oba ID</label>
			<input type="text" id="obaID" name="obaId" placeholder="Wat is je Oba ID?" required />
			<label for="date">Datum</label>
			<input
				type="date"
				id="date"
				name="date"
				value=""
				min="2024-06-03"
				max="2025-06-31"
				required
			/>
			<label for="verdieping">Verdieping</label>
			<select id="verdieping" name="verdieping" required>
				<option value="" selected disabled hidden>Welke verdieping?</option>
				<option value="option1">Verdieping 1</option>
				<option value="option2">Verdieping 2</option>
				<option value="option2">Verdieping 3</option>
				<option value="option2">Verdieping 4</option>
				<option value="option2">Verdieping 5</option>
				<option value="option2">Verdieping 6</option>
			</select><br />

			<label for="werkplek">Werkplek</label>
			<select id="werkplek" name="werkplek" value="" required>
				<option value="" selected disabled hidden>Welke werkplek?</option>
				<option value="option1">Werkplek 1 (Rood)</option>
				<option value="option2">Werkplek 2 (Blauw)</option>
				<option value="option2">Werkplek 3 (Geel)</option>
			</select><br />

			<button type="submit">
				{#if loading}
					<!-- Aninamtie voor custom enhancement -->
					<BoekAnimatie />
				{/if}

				{#if !loading}
					Reserveer
				{/if}
			</button>

			<!-- Melding voor user feedback -->
			{#if form?.success}
				<p class:active={form?.success}>Bedankt voor het delen van jouw ervaring!</p>
			{/if}
		</form>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		margin: 0px auto;
		width: 100%;
		font-family:
			'Segoe UI Variable Text',
			'Segoe UI',
			'Segoe UI Web (West European)',
			'Segoe UI',
			-apple-system,
			BlinkMacSystemFont,
			Roboto,
			'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		padding: 0 15px 5rem 15px;
	}

	.intro {
		grid-column: span 1;
		width: 28rem;
		height: 100%;
		position: relative;
	}

	.intro-title {
		display: flex;
	}

	.btn-popover {
		background-color: transparent;
		border: none;
		cursor: pointer;
		margin-left: 8px;
	}

	[popover] {
		inset: auto;
		right: 15px;
		top: 15px;
		/* margin: 0; */
		border-radius: 8px;
		padding: 1.75rem;
		width: 290px;
		height: 350px;
	}

	[popover] ul {
		padding-left: 15px;
	}

	[popover] p {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 2px;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		list-style-type: none;
		padding: 1.75rem;
		background-color: white;
		border-radius: 8px;
		grid-column-start: 2;
		width: 27.5rem;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
	}

	.info li:nth-child(4) {
		margin-top: 10px;
	}

	img {
		border-radius: 8px;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
	}

	/* FORM */
	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 440px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
		padding: 1.25rem 1.75rem 1.75rem 1.75rem;
		height: 37.5rem;
	}

	form p {
		background-color: lightgreen;
		padding: 5px;
		font-size: 12px;
		text-align: center;
		margin-top: 8px;
		border-radius: 3px;
	}

	input,
	select {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin-bottom: 1.5rem;
	}

	button[type='submit'] {
		cursor: pointer;
		background-color: var(--primary-accent-color);
		color: white;
		width: 100%;
		border: none;
		/* padding: 13px; */
		font-size: 0.95rem;
		height: 50px;
		border-radius: 4px;
		margin-top: 5px;
	}

	input:valid {
		border: 1px solid green;
	}
	select:valid {
		border: 1px solid green;
	}

	h1 {
		color: var(--primary-accent-color);
	}

	h2 {
		margin-bottom: 15px;
	}

	h2 span {
		font-size: 15px;
		font-weight: 500;
	}

	@media (min-width: 990px) {
		main {
			display: grid;
			gap: 2em 2em;
			justify-content: center;
		}

		h1 {
			grid-column: span 1;
		}
	}
	@media (max-width: 550px) {
		.info,
		.card,
		img,
		.intro {
			width: 100%;
		}
	}
</style>
