<script>
	import { Card, Header } from '$lib/index.js';

	export let data;
</script>

<header>
	<Header
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
</header>

<main>
	<h1>Reserveer een werkplek</h1>
	<form action="/reservering-werkplek" method="POST">
		<label for="textInput">Text Input:</label><br />
		<input type="text" id="textInput" name="obaId" /><br />

		<label for="start">Start date:</label>

		<input
			type="date"
			id="start"
			name="tijd"
			value="2018-07-22"
			min="2018-01-01"
			max="2018-12-31"
		/>

		<label for="dropdown1">Dropdown 1:</label><br />
		<select id="dropdown1" name="verdieping">
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
		</select><br />

		<label for="dropdown2">Dropdown 2:</label><br />
		<select id="dropdown2" name="werkplek">
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
		</select><br />

		<input type="submit" value="Submit" />
	</form>
</main>

<style>
	main {
		min-height: 41rem;
	}
</style>
