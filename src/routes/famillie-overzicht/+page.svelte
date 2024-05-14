<script>
	import { Card, Header, Addsvg, Pencilsvg, AvatarOne, AvatarTwo, AvatarThree, AvatarFour } from '$lib/index.js';
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
	<div class="sub-header">
		<div class="title">
			<h1>Famillie overzicht</h1>
		</div>
		<div class="content">
			<div class="content-adding">
				<Addsvg />
			</div>
			<div class="content-info">
				<span>Een gezinslid toevoegen</span>
				<span>Leden: 4</span>
			</div>
		</div>
	</div>
	<div class="users-overview">
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Mark</span>
				</div>
				<div class="card-settings">
					<Pencilsvg />
				</div>
			</div>
			<div class="card-img">
				<AvatarOne />
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>7</span></li>
					<li>Aantal boeken geleend: <span>3</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert-first card-allert-grey">Boeken te laat: <span>5</span></p>
				<p class="card-allert-second card-allert-grey">Openstaande boeten: <span>0</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Lisa</span>
				</div>
				<div class="card-settings">
					<Pencilsvg />
				</div>
			</div>
			<div class="card-img">
				<AvatarTwo />
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>1</span></li>
					<li>Aantal boeken geleend: <span>2</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert-first card-allert-grey">Boeken te laat: <span>1</span></p>
				<p class="card-allert-second card-allert-grey">Openstaande boeten: <span>0</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Menno</span>
				</div>
				<div class="card-settings">
					<Pencilsvg />
				</div>
			</div>
			<div class="card-img">
				<AvatarThree />
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>3</span></li>
					<li>Aantal boeken geleend: <span>0</span></li>
					<li>Geplande activiteiten: <span>2</span></li>
				</ul>
				<p class="card-allert-first card-allert-grey">Boeken te laat: <span>1</span></p>
				<p class="card-allert-second card-allert-red">Openstaande boeten: <span>2</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Benjamin</span>
				</div>
				<div class="card-settings">
					<Pencilsvg />
				</div>
			</div>
			<div class="card-img">
				<AvatarFour />
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>0</span></li>
					<li>Aantal boeken geleend: <span>2</span></li>
					<li>Geplande activiteiten: <span>5</span></li>
				</ul>
				<p class="card-allert-first card-allert-grey">Boeken te laat: <span>3</span></p>
				<p class="card-allert-second card-allert-grey">Openstaande boeten: <span>0</span></p>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		padding: 0px 20px 10px 20px;
		margin: 0px auto;
		max-width: 1184px;
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

	.sub-header {
		display: flex;
		flex-flow: wrap;
		margin: 0px;
		overflow: visible;
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		height: 100%;
	}

	.title {
		display: flex;
		flex-flow: row;
		width: 50%;
		height: auto;
		box-sizing: border-box;
		padding: 18px 0px 8px;
	}

	.content {
		display: flex;
		flex-flow: wrap;
		margin: 0px;
		overflow: visible;
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		justify-content: flex-end;
		height: 100%;
		padding-top: 29px;
		padding-bottom: 19px;
		width: 50%;
	}

	.content .content-adding {
		display: flex;
		flex-flow: row;
		width: 32px;
		height: auto;
		box-sizing: border-box;
		float: left;
		margin-left: 5px;
		margin-right: 13px;
	}

	.content .content-info {
		display: flex;
		flex-flow: column;
		width: auto;
		height: auto;
		box-sizing: border-box;
		max-width: 100%;
		margin-right: 13px;
	}

	.content .content-info span {
		font-size: 12px;
		font-weight: 400;
		color: rgb(50, 49, 48);
	}

	.users-overview {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		width: auto;
		height: auto;
		box-sizing: border-box;
		flex-grow: 1;
		min-width: 244px;
		max-width: 1200px;
		margin-top: 16px;
	}

	.card-user {
		height: 100%;
		box-sizing: border-box;
		flex-grow: 1;
		background-color: rgb(255, 255, 255);
		min-width: 244px;
		max-width: 284px;
		border-radius: 8px;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
		overflow: hidden;
		transition-duration: 100ms;
		cursor: auto;
	}


	.card-img {
		margin: 26px auto 0 auto;
		text-align: center;
	}

	.card-img svg {
		padding: 6px 0px 0px;
		height: 160px;
		width: 160px;
	}

	.card-header {
		display: flex;
		flex-flow: row;
		width: auto;
		height: 44px;
		padding: 12px 0px 12px 16px;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgb(232, 232, 232);
	}

	.card-settings {
		display: flex;
		height: 100%;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	.card-settings button {
	}

	.card-info {
		display: flex;
		flex-flow: column;
		width: auto;
		height: auto;
		box-sizing: border-box;
	}

	.card-info .card-allert-first {
		margin: 26px 32px 15px 32px;
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
		margin: 0 32px 26px 32px;
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

	.card-info ul {
		list-style-type: none;
		margin: 26px auto auto auto;
	}

	.card-info ul li {
		font-size: 14px;
		font-weight: 400;
		color: rgb(50, 49, 48);
		text-decoration: none;
		line-height: 1.4;
	}

	.card-info span {
		font-weight: 600;
	}
</style>
