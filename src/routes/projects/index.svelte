<script context="module">
	import { client } from '$lib/graphql-client';
	import ProjectCard from '$lib/components/project-card.svelte';
	import { projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(projectsQuery);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>Caroline SENES | Projets</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">Mes projets récents</h1>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }, index}
		<ProjectCard {name} {description} url={image[0].url} {index} {slug} />
	{/each}
</div>
