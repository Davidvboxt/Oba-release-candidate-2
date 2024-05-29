<script>
	import {
		Toggle,
		ArrowRight,
		ArrowLeft,
		Home,
		Uitleningen,
		Reserveringen,
		Betalingen,
		Familie,
		Login,
		Cross,
		SearchTwo,
		SearchOne,
		Leeslijst
	} from '$lib/index.js';
	import { onMount } from 'svelte';
	import { Card } from '$lib/index.js';

	export let cardData;

	let value = '';
	let error = '';
	let showDialog = false;

	function openDialog() {
		showDialog = true;
	}

	function closeDialog() {
		showDialog = false;
		error = '';
	}
	// console.log(cardData)

	onMount(() => {
		// zoekveld submit
		const searchInput = document.querySelector('#searchQueryInput');
		searchInput.addEventListener('input', submitted);

		//
		const searchField = document.querySelector('#search-field');
		searchField?.addEventListener('click', classToggle);

		function classToggle() {
			searchField.classList.toggle('opened');
		}

		// PE Zet iets uit wanner Javascript niet werkt
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');

		return () => {
			// Cleanup event listener when component is unmounted
			searchInput.removeEventListener('input', submitted);
		};
	});

	function submitted(event) {
		event.preventDefault();

		const searchValue = event.target.value.toLowerCase();
		const filteredCards = Object.values(cardData).filter((card) =>
			card.frabl.key1.toLowerCase().includes(searchValue)
		);

		if (filteredCards.length === 0) {
			error = 'Geen resultaten gevonden';
		} else {
			cardData = filteredCards;
			error = '';
		}
		if (searchValue.trim() === '') {
			closeDialog();
		}
	}
</script>

<input type="checkbox" id="check" />
<label for="check">
	<span class="opened"></span>
	<span class="openend-button"></span>
	<span class="search-field-mobile"></span>
	<span class="" id="btn">
		<ArrowRight />
	</span>
	<span class="" id="cancel"><ArrowLeft /></span>
</label>
<nav id="sidebar" class="sidebar">
	<header>
		<div class="profile-img">
			<img
				src="https://i2.wp.com/curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-610x819.jpg"
				alt="Profiel foto"
			/>
		</div>
		<div class="profile-text">
			<span class="profile-name"> Mark Vos </span>
			<span class="profile-role"> Admin </span>
		</div>
	</header>
	<div class="menu-bar">
		<div class="top-content">
			<ul>
				<li>
					<a href="/">
						<Home />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/leeslijst">
						<Leeslijst />
						<span>Leeslijst</span>
					</a>
				</li>
				<li>
					<a href="/uitleningen">
						<Uitleningen />
						<span>Uitleningen</span>
					</a>
				</li>
				<li>
					<a href="/reserveringen">
						<Reserveringen />
						<span>Reserveringen</span>
					</a>
				</li>
				<li>
					<a href="/betalingen">
						<Betalingen />
						<span>Betalingen</span>
					</a>
				</li>
				<li>
					<a href="/familie-overzicht">
						<Familie />
						<span>Familie</span>
					</a>
				</li>
				<li>
					<a href="/werkplek">
						<Familie />
						<span>Werkplek</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="bottom-content">
			<ul>
				<li>
					<a href="/login">
						<Login />
						<span>Log uit</span>
					</a>
				</li>
				<li>
					<Toggle />
				</li>
			</ul>
		</div>
	</div>
</nav>

<section id="search-field ">
	<div id="search-box">
		<input type="checkbox" id="search" />
		<label for="search">
			<span class="search-hamburg-closed" id="search-closed" on:click={closeDialog}>
				<Cross /></span
			>
			<span class="search-hamburg-open" id="search-open">
				<SearchOne />
			</span>
		</label>

		<div on:click={openDialog} id="search-bar" class="search-bar">
			<form action="" on:submit={submitted} class="searchBar">
				<input
					id="searchQueryInput"
					class="search-input"
					type="text"
					name="search"
					bind:value
					autocomplete="off"
					placeholder="Waar ben je naar opzoek?"
				/>
				<a
					class="search-submit"
					id="searchQuerySubmit"
					type="submit"
					name="searchQuerySubmit"
					href={value}
				>
					<SearchTwo />
				</a>
			</form>
		</div>
	</div>
	{#if showDialog}
		<div class="model" id="model">
			<p class="title-hero">Je zoekt: <span>{value}</span></p>
			<!-- <article>
				<button class="close-button" on:click={closeDialog}>X</button>
			</article> -->
			{#if error}
				<h2>{error}</h2>
			{:else}
				<ul>
					{#each Object.values(cardData) as card}
						<a href={card.detailLink}>
							<li class="card-data">
								<img
									src={card.coverimages[0]}
									alt="foto van {card.frabl.key1}"
									loading="lazy"
									width="50"
									height="50"
								/>
								<p class="booktitle">{card.frabl.key1}</p>
							</li>
						</a>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</section>

<style>
	#search-box {
		position: relative;
		margin-left: 100px;
		transition: all 0.5s ease;
		position: fixed;
		z-index: 99;
	}

	#check:checked ~ section #model {
		margin-left: 225px;
	}

	/* HAMBURG SEARCH-BAR*/
	label #search-closed,
	label #search-open {
		position: absolute;
		cursor: pointer;
		color: white;

		font-size: 29px;
		background-color: var(--primary-transparent-color-2);
		height: 50px;
		width: 50px;
		text-align: center;
		line-height: 45px;
		transition: all 0.5s ease;
		display: grid;
		align-items: center;
		justify-content: center;
		z-index: 99;
	}
	label #search-closed {
		border-radius: 0 0 0 5px;
	}
	label #search-open {
		border-radius: 0 0 5px 5px;
	}
	#search {
		display: none;
	}
	#search-bar {
		transition: all 0.8s ease;
	}

	label #search-closed {
		opacity: 0;
		visibility: hidden;
	}
	#search:checked ~ label #search-open {
		opacity: 0;
		visibility: hidden;
	}
	#search:checked ~ label #search-closed {
		opacity: 1;
		visibility: visible;
		height: 50px;
		width: 50px;
	}
	#search:checked ~ #search-bar {
		width: 21.25rem;
	}
	#search:checked ~ div .search-submit {
		width: 3.5rem;
		height: 2.8rem;
	}
	#search:checked ~ div .search-input {
		padding: 0 3.5rem 0 1.5rem;
	}
	/* END HAMBURG */

	/* SEARCHBAR */
	.search-bar {
		position: absolute;
		width: 0;
		margin-left: 50px;
		z-index: 80;
	}

	form {
		width: 100%;
	}

	.searchBar {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.search-input,
	.search-input-mobile {
		width: 100%;
		height: 50px;
		background: white;
		outline: none;
		border: none;
		border-radius: 0 0 5px 0;
		font-size: 1rem;
		transition: all 1s ease;
	}

	.search-input-mobile {
		padding-left: 18px;
		margin-left: 50px;
	}

	.search-submit {
		width: 0;
		height: 0;
		margin-left: -3.5rem;
		background: none;
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.5s ease;
	}

	.search-submit-mobile {
		width: 35px;
		height: 35px;
		margin-left: -7.5rem;
		background: none;
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.5s ease;
	}

	.search-submit:hover {
		cursor: pointer;
	}

	#check:checked ~ section #search-box {
		margin-left: 325px;
	}

	#search-field {
		position: relative;
		transition: all 0.5s ease;
	}

	.model {
		backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
		-webkit-backdrop-filter: blur(10px); /* Safari support */
		/* Fallback for browsers that do not support backdrop-filter */
		position: fixed;
		left: 6.2rem;
		top: 2.7rem;
		width: 600px;
		height: 28.95rem;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0 0.875rem 1.75rem,
			rgba(0, 0, 0, 0.22) 0px 0.625rem 0.625rem;
		border-radius: 0.625rem;
		padding: 1rem;
		overflow-y: auto;
		z-index: 999;
		margin-top: 1.1rem;
		opacity: 97%;
		background: var(--primary-accent-color);
		transition: all 0.5s ease;
	}

	.model li,
	.mobile-model li {
		list-style: none;
		/* border-bottom: 1px solid rgb(172, 171, 171); */
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		transition: all 0.3s ease;
	}

	.model li img,
	.mobile-model li img {
		min-width: 50px;
	}

	.model ul,
	.mobile-model ul {
		padding: 1.5rem;
	}

	.model p,
	span,
	.mobile-model p,
	span {
		color: var(--primary-light-color);
	}

	.model h2,
	.mobile-model h2 {
		color: var(--primary-light-color);
		padding: 1.5rem;
		text-align: center;
	}

	.model a,
	.mobile-model a {
		text-decoration: none;
		color: var(--primary-light-color);
	}

	.model h2,
	.mobile-model h2 {
		color: var(--primary-light-color);
		padding: 1.5rem;
		text-align: center;
	}

	.title-hero {
		font:
			700 20px 'Oswald',
			sans-serif;
	}

	/* .close-button {
		position: absolute;
		right: 0%;
		margin-top: -43rem;
		padding: 0.5rem 1rem;
		border-radius: var(--primary-table-border-radius);
		background-color: var(--primary-light-color);
		color: var(--primary-dark-color);
		font-weight: bold;
		cursor: pointer;
	} */

	.card-data:hover {
		background-color: var(--primary-light-color);
		padding: 0.5rem;
	}

	.card-data:hover p {
		color: rgb(61, 61, 61);
	}

	.booktitle::first-letter {
		text-transform: capitalize;
	}

	.mobile-model {
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		position: fixed;
		left: 0;
		top: 32px;
		width: 100%;
		height: 100%;
		box-shadow: none;
		border-radius: 0.625rem;
		padding: 1rem;
		overflow-y: auto;
		z-index: 999;
		/* margin-top: 1.1rem; */
		opacity: 97%;
		background: none;
		transition: all 0.5s ease;
		margin-left: 0 !important;
		margin-top: 18px;
	}

	/* END SEARCHBAR */

	/* NAVIGATION MENU */
	.menu-bar {
		display: flex;
		height: calc(100% - 60px);
		flex-direction: column;
		justify-content: space-between;
		font: 'Oswald', sans-serif;
	}
	.sidebar {
		position: fixed;
		width: 250px;
		left: -250px;
		height: 100%;
		background: var(--primary-transparent-color-2);
		transition: all 0.5s ease;
		z-index: 99;
	}

	/* Header */
	header {
		display: flex;
		align-items: center;
		position: relative;
	}
	header .profile-img {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 40px;
	}
	header .profile-img img {
		width: 2.7rem;
		height: 2.7rem;
		margin-right: 15px;
		border-radius: 70%;
	}
	header .profile-text {
		display: flex;
		flex-direction: column;
		color: white;
	}
	header .profile-text .profile-name {
		margin-top: 2px;
		font-size: 18px;
		font-weight: 600;
	}
	header .profile-text .profile-role {
		font-size: 16px;
		margin-top: -2px;
		display: block;
	}
	/* header::after {
		content: '';
		position: absolute;
		width: 185px;
		bottom: 0;
		left: 31px;
		background-color: white;
		height: 0.5px;
	} */
	/* End Header */

	.bottom-content {
		border-top: 1px solid white;
	}
	.sidebar a {
		display: flex;
		height: 65px;
		width: 100%;
		color: white;
		font-weight: 500;
		line-height: 65px;
		padding-left: 20px;
		box-sizing: border-box;
		border-left: 5px solid transparent;
		font-family: 'Oswald', sans-serif;
		transition: all 0.5s ease;
		text-decoration: none;
		align-items: center;
	}
	.menu-bar svg {
		margin-right: 10px;
	}
	a:focus,
	a:hover {
		border-left: 5px solid white;
	}
	.sidebar a i {
		font-size: 23px;
		margin-right: 16px;
	}
	.menu-bar a span {
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	#check {
		display: none;
	}
	label #btn,
	label #cancel {
		position: fixed;
		cursor: pointer;
		color: white;
		border-radius: 0 0 5px 5px;
		margin-left: 25px;
		font-size: 29px;
		background-color: var(--primary-transparent-color-2);
		height: 50px;
		width: 50px;
		text-align: center;
		line-height: 45px;
		transition: all 0.5s ease;
		display: grid;
		align-items: center;
		justify-content: center;
		z-index: 99;
	}
	label #cancel {
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ .sidebar {
		left: 0;
	}
	#check:checked ~ label #btn {
		margin-left: 250px;
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ label #cancel {
		margin-left: 250px;
		opacity: 1;
		visibility: visible;
		border-radius: 0 0 5px 0;
	}

	/* EIND NAVIGATION MENU */

	/* tablet breakpoint */
	@media (max-width: 960px) {
		.opened {
			background-color: var(--primary-accent-color);
			width: 100vw;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			margin-left: 0;
			display: none;
		}

		#search-box {
			position: relative;
			margin-left: 100px;
			transition: all 0.5s ease;
			position: fixed;
			width: 100%;
		}
	}

	@media (min-width: 960px) {
	}
</style>
