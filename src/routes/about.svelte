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
		bio,
		picture: { url }
	} = authors[0];
</script>

<svelte:head>
	<title>{name} | A Propos</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">A Propos</h1>

<section class="hero bg-base-200 mb-40 rounded-lg">
	<div class="flex-col hero-content lg:flex-row-reverse">
		<div class="avatar">
			<div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img src={url} alt={name} />
			</div>
		</div>
		<div>
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="py-6 text-xl">{intro}</p>
		</div>
	</div>
</section>

<article>
	{@html marked(bio)}
</article>
