<script>
	import { Card, Header } from '$lib/index.js';
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
	<div class="users-overview">
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Mark</span>
				</div>
				<div class="card-settings">
					<button type="button"></button>
				</div>
			</div>
			<div class="card-img">
				<img
					src="https://assets.account.microsoft.com/family/compassassets/d9fda03a-5e17-4527-a47b-ead66c080e7e.svg?n=FamilyMemberAvatarBearYellowBg.svg"
					alt=""
				/>
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>7</span></li>
					<li>Aantal boeken geleend: <span>3</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert card-allert-grey">Boeken te laat terug gebracht: <span>0</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Mark</span>
				</div>
				<div class="card-settings">
					<button type="button"></button>
				</div>
			</div>
			<div class="card-img">
				<img
					src="https://assets.account.microsoft.com/family/compassassets/d9fda03a-5e17-4527-a47b-ead66c080e7e.svg?n=FamilyMemberAvatarBearYellowBg.svg"
					alt=""
				/>
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>7</span></li>
					<li>Aantal boeken geleend: <span>3</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert card-allert-grey">Boeken te laat terug gebracht: <span>0</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Mark</span>
				</div>
				<div class="card-settings">
					<button type="button"></button>
				</div>
			</div>
			<div class="card-img">
				<img
					src="https://assets.account.microsoft.com/family/compassassets/d9fda03a-5e17-4527-a47b-ead66c080e7e.svg?n=FamilyMemberAvatarBearYellowBg.svg"
					alt=""
				/>
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>7</span></li>
					<li>Aantal boeken geleend: <span>3</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert card-allert-red">Boeken te laat terug gebracht: <span>1</span></p>
			</div>
		</div>
		<div class="card-user">
			<div class="card-header">
				<div class="card-name">
					<span>Mark</span>
				</div>
				<div class="card-settings">
					<button type="button"></button>
				</div>
			</div>
			<div class="card-img">
				<img
					src="https://assets.account.microsoft.com/family/compassassets/d9fda03a-5e17-4527-a47b-ead66c080e7e.svg?n=FamilyMemberAvatarBearYellowBg.svg"
					alt=""
				/>
			</div>
			<div class="card-info">
				<ul>
					<li>Aantal boeken gereserveerd: <span>7</span></li>
					<li>Aantal boeken geleend: <span>3</span></li>
					<li>Geplande activiteiten: <span>0</span></li>
				</ul>
				<p class="card-allert card-allert-grey">Boeken te laat terug gebracht: <span>0</span></p>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		padding: 0px 0px 10px;
		margin: 0px auto;
		max-width: 1184px;
		width: 100%;
		min-height: 35rem;
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

	.users-overview {
		display: flex;
		flex-flow: row;
		width: auto;
		height: auto;
		box-sizing: border-box;
		flex-grow: 1;
		min-width: 244px;
		max-width: 1200px;
	}

	.card-user {
		display: flex;
		flex-flow: column;
		width: auto;
		height: 424px;
		box-sizing: border-box;
		flex-grow: 1;
		background-color: rgb(255, 255, 255);
		min-width: 244px;
		max-width: 288px;
		border-radius: 8px;
		box-shadow:
			rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
			rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;
		overflow: hidden;
		transition-duration: 100ms;
		cursor: auto;
	}

	.card-user {
		margin-left: 16px;
	}

	.card-img {
		margin: 26px auto 0 auto;
	}

	.card-img img {
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

	.card-info .card-allert {
		margin: 26px 15px 15px 15px;
		padding: 10px;
		font-size: 14px;
		font-weight: 400;
		text-decoration: none;
		line-height: 1.4;
		border-radius: 8px;
	}

	.card-allert-red {
		background-color: #c60c29 !important;
		color: white !important;
	}

	.card-allert-grey {
		background-color: #E8E8E8;
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
