<script context="module">
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries';
	import { client } from '$lib/graphql-client';
	import ProjectCard from '$lib/components/project-card.svelte';

	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				projects,
				authors
			}
		};
	};
</script>

<script>
	export let projects;
	export let authors;
	const {
		name,
		intro,
		tags,
		picture: { url }
	} = authors[0];
</script>

<svelte:head>
	<title>{name} | Portfolio</title>
</svelte:head>

<section class="hero bg-base-200 mb-40 rounded-lg p-5">
	<div class="flex-col hero-content lg:flex-row-reverse">
		<div class="avatar">
			<div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img src={url} alt={name} />
			</div>
		</div>
		<div>
			<h1 class="text-5xl font-bold">Bienvenu sur mon portfolio</h1>
			<p class="py-9 text-xl">{intro}</p>
			<div class="flex flex-wrap gap-3">
				{#if tags}
					{#each tags as tag}
						<span class="badge badge-primary mr-2">{tag}</span
						>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>

<section class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</section>
