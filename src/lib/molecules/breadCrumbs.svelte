<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let pathParts = [];
	let previousPages = [];
	let hasMorePages = false;

	onMount(() => {
		previousPages = JSON.parse(sessionStorage.getItem('previousPages')) || [];
		let currentPage = $page.url.pathname.slice(1);
		if (previousPages[previousPages.length - 1] !== currentPage) {
			previousPages.push(currentPage);
		}
		if (previousPages.length >= 3) {
			hasMorePages = true;
			if (previousPages.length > 3) {
				previousPages.shift();
			}
		} else {
			hasMorePages = false;
		}
		sessionStorage.setItem('previousPages', JSON.stringify(previousPages));
		pathParts = previousPages;
	});

	function isCurrentPage(index) {
		return index === pathParts.length - 1;
	}
</script>

<nav data-sveltekit-reload>
	<ul>
		{#each pathParts as part, index (index)}
			<li>
				{#if hasMorePages && index === 0}
					<span>...</span>
				{/if}
				<a
					class="breadcrumbs {isCurrentPage(index) ? 'current' : ''}"
					href={part === 'home' ? '/' : '/' + part}>{part}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		font-family: 'Poppins', sans-serif;
		width: fit-content;

		margin-left: 3rem;
	}

	ul {
		display: flex;
	}

	li {
		list-style-type: none;
		padding: 0.3rem;
	}

	li:not(:first-child)::before {
		content: ' > ';
		font-size: 1.5rem;
	}

	.breadcrumbs {
		color: #0051a8;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.current {
		font-weight: bold;
		color: #222222;
	}
</style>
