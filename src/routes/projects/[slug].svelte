<script context="module">
	import { client } from '$lib/graphql-client';
	import { projectQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(projectQuery, variables);

		return {
			props: {
				project
			}
		};
	};
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>Caroline SENES | Projets - {project.name}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img class="rounded-lg" src={project.image[0].url} alt={project.title} />
</div>

<h1 class="mb-5">{project.name}</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if project.tags}
			{#each project.tags as tag}
				<span class="badge badge-primary mr-2">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="prose flex">
	<a class="mr-5 link link-secondary" href={project.demo}>Demo</a>
	<a class="link link-secondary" href={project.sourceCode}>Code source</a>
</div>

<article class="my-8 prose prose-xl">
	{@html marked(project.description)}
	<h2>Le projet</h2>
		{@html marked(project.brief)}
	<h2>Mon rôle</h2>
		{@html marked(project.role)}
	<h2>En détails</h2>
		{@html marked(project.details)}
</article>

<div>
	<a class="link" href="/projects">Retour au Portfolio</a>
</div>
