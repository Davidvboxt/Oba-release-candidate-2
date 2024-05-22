<script>
	import {
		Card,
		Header,
		Addsvg,
		Pencilsvg,
		AvatarOne,
		AvatarTwo,
		AvatarThree,
		AvatarFour
	} from '$lib/index.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {});
</script>

<header>
	<Header
		cardData={data.apiBooks.results.concat(data.apiEBooks.results, data.apiAudioBooks.results)}
	/>
</header>

<main>
	<h1>Familie overzicht</h1>
	<div class="content">
		<Addsvg />
		<div>
			<p>Een gezinslid toevoegen</p>
			<p>Leden: 4</p>
		</div>
	</div>

	<article class="card-user">
		<header class="card-header">
			<h2>Mark</h2>
		</header>
		<details>
			<summary></summary>
			<form id="form-one">
				<div>
					<label for="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						value="mark.oba@gmail.com"
					/>

					<label for="adress">Adress</label>
					<input
						type="text"
						id="adress"
						name="adress"
						placeholder="Adress"
						value="Librastraat 23"
					/>

					<label for="postcode">Postcode</label>
					<input type="text" id="postcode" name="postcode" placeholder="Postcode" value="1422LP" />
				</div>

				<div class="form-content-right">
					<label for="telefoonnummer">Telefoon nummer</label>
					<input
						type="text"
						id="telefoonnummer"
						name="telefoonnummer"
						placeholder="Telefoon nummer"
						value="0615609827"
					/>

					<label for="abtype">Abbonoment type</label>
					<select id="abtype" name="abbonomenttype">
						<option value="type1">Type 1</option>
						<option value="type2">Type 2</option>
						<option value="type3">Type 3</option>
					</select>

					<label for="thkleur">Thema kleur</label>
					<select id="thkleur" name="themakleur">
						<option value="blauw">Blauw</option>
						<option value="rood">Rood</option>
						<option value="groen">Groen</option>
					</select>

					<input type="submit" value="Pas toe" />
				</div>
			</form>
		</details>
		<AvatarOne />
		<ul>
			<li>Aantal boeken gereserveerd: <strong>7</strong></li>
			<li>Aantal boeken geleend: <strong>4</strong></li>
			<li>Geplande activiteiten: <strong>0</strong></li>
		</ul>
		<p class="card-allert-first card-allert-grey">Boeken te laat: <strong>5</strong></p>
		<p class="card-allert-second card-allert-grey">Openstaande boeten: <strong>0</strong></p>
	</article>

	<article class="card-user">
		<header class="card-header">
			<h2>Lisa</h2>
		</header>
		<details>
			<summary></summary>
			<form id="form-one">
				<div>
					<label for="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						value="mark.oba@gmail.com"
					/>

					<label for="adress">Adress</label>
					<input
						type="text"
						id="adress"
						name="adress"
						placeholder="Adress"
						value="Librastraat 23"
					/>

					<label for="postcode">Postcode</label>
					<input type="text" id="postcode" name="postcode" placeholder="Postcode" value="1422LP" />
				</div>

				<div class="form-content-right">
					<label for="telefoonnummer">Telefoon nummer</label>
					<input
						type="text"
						id="telefoonnummer"
						name="telefoonnummer"
						placeholder="Telefoon nummer"
						value="0615609827"
					/>

					<label for="abtype">Abbonoment type</label>
					<select id="abtype" name="abbonomenttype">
						<option value="type1">Type 1</option>
						<option value="type2">Type 2</option>
						<option value="type3">Type 3</option>
					</select>

					<label for="thkleur">Thema kleur</label>
					<select id="thkleur" name="themakleur">
						<option value="blauw">Blauw</option>
						<option value="rood">Rood</option>
						<option value="groen">Groen</option>
					</select>

					<input type="submit" value="Pas toe" />
				</div>
			</form>
		</details>
		<AvatarTwo />
		<ul>
			<li>Aantal boeken gereserveerd: <strong>7</strong></li>
			<li>Aantal boeken geleend: <strong>3</strong></li>
			<li>Geplande activiteiten: <strong>1</strong></li>
		</ul>
		<p class="card-allert-first card-allert-grey">Boeken te laat: <strong>3</strong></p>
		<p class="card-allert-second card-allert-grey">Openstaande boeten: <strong>0</strong></p>
	</article>

	<article class="card-user">
		<header class="card-header">
			<h2>Benjamin</h2>
		</header>
		<details>
			<summary></summary>
			<form id="form-one">
				<div>
					<label for="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						value="mark.oba@gmail.com"
					/>

					<label for="adress">Adress</label>
					<input
						type="text"
						id="adress"
						name="adress"
						placeholder="Adress"
						value="Librastraat 23"
					/>

					<label for="postcode">Postcode</label>
					<input type="text" id="postcode" name="postcode" placeholder="Postcode" value="1422LP" />
				</div>

				<div class="form-content-right">
					<label for="telefoonnummer">Telefoon nummer</label>
					<input
						type="text"
						id="telefoonnummer"
						name="telefoonnummer"
						placeholder="Telefoon nummer"
						value="0615609827"
					/>

					<label for="abtype">Abbonoment type</label>
					<select id="abtype" name="abbonomenttype">
						<option value="type1">Type 1</option>
						<option value="type2">Type 2</option>
						<option value="type3">Type 3</option>
					</select>

					<label for="thkleur">Thema kleur</label>
					<select id="thkleur" name="themakleur">
						<option value="blauw">Blauw</option>
						<option value="rood">Rood</option>
						<option value="groen">Groen</option>
					</select>

					<input type="submit" value="Pas toe" />
				</div>
			</form>
		</details>
		<AvatarThree />
		<ul>
			<li>Aantal boeken gereserveerd: <strong>7</strong></li>
			<li>Aantal boeken geleend: <strong>0</strong></li>
			<li>Geplande activiteiten: <strong>0</strong></li>
		</ul>
		<p class="card-allert-first card-allert-grey">Boeken te laat: <strong>1</strong></p>
		<p class="card-allert-second card-allert-red">Openstaande boeten: <strong>2</strong></p>
	</article>

	<article class="card-user">
		<header class="card-header">
			<h2>Menno</h2>
		</header>
		<details>
			<summary></summary>
			<form id="form-one">
				<div>
					<label for="fname">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						value="mark.oba@gmail.com"
					/>

					<label for="adress">Adress</label>
					<input
						type="text"
						id="adress"
						name="adress"
						placeholder="Adress"
						value="Librastraat 23"
					/>

					<label for="postcode">Postcode</label>
					<input type="text" id="postcode" name="postcode" placeholder="Postcode" value="1422LP" />
				</div>

				<div class="form-content-right">
					<label for="telefoonnummer">Telefoon nummer</label>
					<input
						type="text"
						id="telefoonnummer"
						name="telefoonnummer"
						placeholder="Telefoon nummer"
						value="0615609827"
					/>

					<label for="abtype">Abbonoment type</label>
					<select id="abtype" name="abbonomenttype">
						<option value="type1">Type 1</option>
						<option value="type2">Type 2</option>
						<option value="type3">Type 3</option>
					</select>

					<label for="thkleur">Thema kleur</label>
					<select id="thkleur" name="themakleur">
						<option value="blauw">Blauw</option>
						<option value="rood">Rood</option>
						<option value="groen">Groen</option>
					</select>

					<input type="submit" value="Pas toe" />
				</div>
			</form>
		</details>
		<AvatarFour />
		<ul>
			<li>Aantal boeken gereserveerd: <strong>7</strong></li>
			<li>Aantal boeken geleend: <strong>3</strong></li>
			<li>Geplande activiteiten: <strong>1</strong></li>
		</ul>
		<p class="card-allert-first card-allert-grey">Boeken te laat: <strong>1</strong></p>
		<p class="card-allert-second card-allert-grey">Openstaande boeten: <strong>0</strong></p>
	</article>
</main>

<style>
	main {
		display: grid;
		gap: 2em 2em;
		justify-content: center;
		padding: 0px 20px 10px 20px;
		margin: 0px auto;
		width: 100%;
		min-height: 41rem;
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

	h2 {
		font-size: 1rem;
		font-weight: 400;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.card-user {
		position: relative;
		height: 100%;
		box-sizing: border-box;
		flex-grow: 1;
		background-color: rgb(255, 255, 255);
		min-width: 378px;
		max-width: 397px;
		border-radius: 8px;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
		overflow: hidden;
		transition-duration: 100ms;
		cursor: auto;
	}

	.card-header {
		display: flex;
		flex-flow: row;
		width: auto;
		height: 44px;
		padding: 12px 16px;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgb(232, 232, 232);
	}

	.card-allert-first {
		margin: auto;
		width: 216px;
		margin-top: 26px;
		margin-bottom: 15px;
		padding: 10px;
		font-size: 14px;
		font-weight: 400;
		text-decoration: none;
		line-height: 1.4;
		border-radius: 8px;
	}

	.card-allert-red {
		background-color: #c60c29 !important;
		color: white;
	}

	.card-allert-second {
		margin: auto;
		width: 216px;
		margin-bottom: 26px;
		padding: 10px;
		font-size: 14px;
		font-weight: 400;
		text-decoration: none;
		line-height: 1.4;
		border-radius: 8px;
	}

	.card-allert-grey {
		background-color: #e8e8e8;
		color: rgb(50, 49, 48);
	}

	ul {
		list-style-type: none;
		margin-top: 26px;
		display: grid;
		align-items: end;
		justify-content: center;
	}

	ul li {
		font-size: 14px;
		font-weight: 400;
		color: rgb(50, 49, 48);
		text-decoration: none;
		line-height: 1.4;
	}

	/* FORMULIER */
	details > summary {
		list-style-type: 'Bewerk';
		cursor: pointer;
		position: absolute;
		top: 10px;
		right: 15px;
	}

	details[open] > summary {
		list-style-type: 'Sluit';
	}

	form {
		position: absolute;
		overflow: hidden;
		border-left: 1px solid rgb(232, 232, 232);
		background-color: #f2f2f2;
		display: flex;
		width: 100%;
		height: 91%;
		left: 0;
		top: 44px;
		padding: 14px;
	}

	.form-content-right {
		margin-left: 11px;
		position: relative;
	}

	input[type='text'],
	select {
		width: 100%;
		padding: 12px 10px;
		margin: 8px 0 10px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='submit'] {
		position: absolute;
		bottom: 0px;
		right: 0;
		width: 40%;
		background-color: var(--primary-accent-color);
		color: white;
		padding: 11px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		display: grid;
		justify-content: center;
	}

	@media (min-width: 855px) {
		main {
			max-width: 976px;
			grid-template-columns: 370px;
		}

		h1 {
			grid-column: span 1;
		}

		.content {
			grid-column-start: 2;
		}
	}

	@media (min-width: 1230px) {
		main {
			grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
			max-width: 1184px;
		}

		.content {
			grid-column-start: 3;
		}
	}
</style>
