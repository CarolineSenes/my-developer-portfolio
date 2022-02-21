<script context="module">
	import { client } from '$lib/graphql-client';
	import { postQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;
	const { title, date, tags, content } = post;
</script>

<svelte:head>
	<title>Caroline SENES | Blog - {title}</title>
</svelte:head>

<div class="prose prose-xl">
	<h1>{title}</h1>
</div>

<p class="text-secondary text-xs tracking-widest font-semibold">
	{new Date(date).toLocaleDateString('fr-FR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})}
</p>


<div class="mb-5 flex justify-between">
	<div>
		{#if tags}
			<div class="mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<article class="prose prose-lg my-8">
    {@html marked(content)}
</article>

<div>
	<a class="link" href="/blogs">Retour au portfolio</a>
</div>
