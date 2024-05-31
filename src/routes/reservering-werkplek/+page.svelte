<script>
	import { Card, Header, ImgPlattegrond } from '$lib/index.js';

	export let data;
</script>

<header>
	<Header
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
</header>

<main>
	<div class="intro">
		<h1>Oosterdok</h1>
		<p>
			Reserveer een werkplek in de OBA. Vul hieronder je OBA pasnummer in, de verdieping waar je
			wilt werken, de werkplek en de datum en tijd dat je wilt komen werken.
		</p>
	</div>
	<ul>
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

		<form action="/reservering-werkplek" method="POST">
			<label for="textInput">Je Oba ID</label>
			<input type="text" id="textInput" name="obaId" required />

			<label for="start">Start date</label>

			<input
				type="date"
				id="start"
				name="tijd"
				value="2018-07-22"
				min="2018-01-01"
				max="2018-12-31"
				required
			/>

			<label for="dropdown1">Verdieping</label>
			<select id="dropdown1" name="verdieping" required>
				<option value="option1">Verdieping 1</option>
				<option value="option2">Verdieping 2</option>
				<option value="option2">Verdieping 3</option>
				<option value="option2">Verdieping 4</option>
				<option value="option2">Verdieping 5</option>
				<option value="option2">Verdieping 6</option>
			</select><br />

			<label for="dropdown2">Werkplek</label>
			<select id="dropdown2" name="werkplek" required>
				<option value="option1">Werkplek 1 (Rood)</option>
				<option value="option2">Werkplek 2 (Blauw)</option>
				<option value="option2">Werkplek 3 (Geel)</option>
			</select><br />

			<input type="submit" value="Reserveer" />
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
		padding: 0 15px 5rem 0;
	}

	.intro {
		grid-column: span 1;
		width: 28rem;
		height: 100%;
	}

	ul {
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

	li:nth-child(4) {
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
		padding: 1.75rem;
		height: 37.5rem;
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

	input[type='submit'] {
		cursor: pointer;
		background-color: var(--primary-accent-color);
		color: white;
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

		.content {
			grid-column-start: 2;
		}
	}
	@media (max-width: 550px) {
		ul,
		.card,
		img,
		.intro {
			width: 100%;
		}

		h1 {
			grid-column: span 1;
		}

		.content {
			grid-column-start: 2;
		}
	}
</style>
