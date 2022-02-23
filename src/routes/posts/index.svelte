<script context="module">
	import { client } from '$lib/graphql-client';
	import { postsQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async () => {
		const { posts } = await client.request(postsQuery);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Caroline SENES | Blog</title>
</svelte:head>

<h1 class="mb-20 text-center">Articles de Blog</h1>

{#each posts as { title, slug, content, date }}
	<article class="card shadow-2xl mb-10 border border-indigo-500/50">
		<a href={`/posts/${slug}`}>
			<div class="card-body p-5 hover:text-accent">
				<h2 class="font-black text-3xl">{title}</h2>
				<p class="mb-2 text-accent uppercase text-sm font-semibold">
					{new Date(date).toLocaleDateString('fr-FR', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>

				<p>{@html marked(content).slice(0, 150)}...</p>
			</div>
		</a>
	</article>
{/each}
