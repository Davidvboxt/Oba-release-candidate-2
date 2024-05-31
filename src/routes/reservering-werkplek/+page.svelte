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
		<li>Adress: Oosterdokskade 143, 1011DL Amsterdam</li>
		<li>Openingstijden: 10:00 - 17:00</li>
		<li>Telefoon: +31 (0)205230900</li>
		<li>E-mail: klantenservice@oba.nl</li>
	</ul>
	<img height="600" width="450" src={ImgPlattegrond} alt="oosterdok" />
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
				<option value="option1">Werkplek 1</option>
				<option value="option2">Werkplek 2</option>
				<option value="option2">Werkplek 3</option>
			</select><br />

			<input type="submit" value="Reserveer" />
		</form>
	</div>
</main>

<style>
	main {
		display: grid;
		gap: 2em 2em;
		justify-content: center;
		margin: 0px auto;
		width: 100%;
		min-height: 61rem;
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
	}

	.intro {
		grid-column: span 1;
		width: 28rem;
		height: 100%;
	}

	ul {
		list-style-type: none;
		padding: 1.75rem;
		background-color: white;
		border-radius: 8px;
		grid-column-start: 2;
		box-shadow: rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
	}

	img {
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
	}

	/* FORM */
	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 425px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
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
</style>
