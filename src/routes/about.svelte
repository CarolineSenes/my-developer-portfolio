<script context="module">
	import { client } from '$lib/graphql-client';
	import { authorsQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async () => {
		const { authors } = await client.request(authorsQuery);

		return {
			props: {
				authors
			}
		};
	};
</script>

<script>
	export let authors;
	const {
		name,
		intro,
		tags,
		bio,
		picture: { url },
		location
	} = authors[0];
</script>

<svelte:head>
	<title>{name} | A Propos</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">A Propos</h1>

<section class="hero bg-base-200 mb-20 rounded-lg p-5">
	<div class="flex-col hero-content">
		<div class="avatar">
			<div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img src={url} alt={name} />
			</div>
		</div>
		<div class="items-center text-center">
			<h2 class="text-5xl font-bold mb-4">{name}</h2>
			<h3 class="text-3xl font-bold">Développeuse Front-end</h3>
			<p class="py-9 text-xl">📍 {location}</p>
			<div class="flex flex-wrap gap-3 justify-center">
				{#if tags}
					{#each tags as tag}
						<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span
						>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>

<article class="prose prose-lg">
	{@html marked(bio)}
</article>
