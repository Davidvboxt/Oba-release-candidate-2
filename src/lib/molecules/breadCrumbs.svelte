<script>
	import { page } from '$app/stores';

	let pathParts = $page.url.pathname.split('/').filter(Boolean);

	function isCurrentPage(index) {
		return index === pathParts.length - 1;
	}
</script>

<nav data-sveltekit-reload>
	<ul>
		<li>
			<a class="breadcrumbs {pathParts.length === 0 ? 'current' : ''}" href="/">home</a>
		</li>
		{#each pathParts as part, index (index)}
			<li>
				<a
					class="breadcrumbs {isCurrentPage(index) ? 'current' : ''}"
					href={`/${pathParts.slice(0, index + 1).join('/')}`}>{part}</a
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
