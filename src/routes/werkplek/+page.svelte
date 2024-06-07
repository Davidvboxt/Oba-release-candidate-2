<script>
	import { Card, Header, ImgBijlmer, ImgOosterdok, ImgOsdorp, ImgPostjesweg, ImgRoelof, ImgWaterlandplein } from '$lib/index.js';
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
	<h1>Overzicht van alle vestigingen</h1>
	<section class="overzichtspagina-section overzicht">
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Bijlmer</h2>
				<p>Bijlmerplein 393,
					1102DK Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgBijlmer} alt="boek" />
				</div>
			</div>
		</article>
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Oosterdok</h2>
				<p>Oosterdokskade 143,
					1011DL Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgOosterdok} alt="boek" />
				</div>
			</div>
		</article>
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Osdorp</h2>
				<p>Osdorpplein 16,
					1068EL Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgOsdorp} alt="boek" />
				</div>
			</div>
		</article>
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Postjesweg</h2>
				<p>Postjesweg 340,
					1061AX Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgPostjesweg} alt="boek" />
				</div>
			</div>
		</article>
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Roelof</h2>
				<p>Roelof Hartplein 430,
					1071TT Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgRoelof} alt="boek" />
				</div>
			</div>
		</article>
		<article>
			<div class="text">
				<small>Vestiging</small>
				<h2>Waterland</h2>
				<p>Waterlandplein 302,
					1024NB Amsterdam</p>
				<a href="/reservering-werkplek">Reserveer werkplek </a>
			</div>
			<div class="image">
				<div>
					<img src={ImgWaterlandplein} alt="boek" />
				</div>
			</div>
		</article>
	</section>
</main>

<style>
	h1 {
		padding: 2rem;
	}
	
	.overzichtspagina-section {
		margin: 100px 0 100px 0;
		padding: 0 50px 0 50px;
	}

	.overzicht {
		display: flex;
		gap: 3em;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		margin: 50px 0 100px 0;

	}

	article {
		width: 37em;
		color: white;
		display: flex;
		background: var(--primary-accent-color);
		box-shadow: 0 0 15px rbgd(0, 0, 0, 0.7);
		border-radius: 8px;
	}

	article p {
		font-size: 0.9em;
		line-height: 23px;
		color: white;
	}

	article h2 {
		margin: 0;
		color: white;
	}

	article small {
		color: white;
	}

	.text {
		padding: 1.5em;
		width: 45%;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-direction: column;
		color: white;
	}

	article a {
		color: white;
		text-decoration: none;
		padding-bottom: 3px;
		border-bottom: 2px dashed;
	}

	article .image {
		width: 78%;
		height: 15em;
		position: relative;
		overflow: hidden;
		border-radius: 8px;
	}

	article img {
		width: 140%;
	}

	article .image::before {
		content: '';
		position: absolute;
		left: -6.1em;
		top: 50%;
		transform: translateY(-50%) rotate(20deg);
		background: var(--primary-accent-color);
		width: 40%;
		height: 140%;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
	}

	@media screen and (max-width: 750px) {
		article {
			display: block;
			width: 20em;
		}
		article .image,
		.text {
			width: 100%;
		}
		article img {
			width: 160%;
		}
		article .image::before {
			width: 120%;
			height: 40%;
			top: -5em;
			left: 50%;
			transform: translateX(-50%) rotate(10deg);
		}
	}
</style>
