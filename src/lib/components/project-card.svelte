<script>
	export let url = '';
	export let name = '';
	export let slug = '';
	export let description = '';
	export let tags = [];
</script>

<article class="relative group card shadow-2xl col-span-2">
	<img src={url} alt={name} class="object-cover h-full" />
	<a href={`/projects/${slug}`}>
		<div
			class="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content"
		>
			<h2 class="lg:text-xl">{name}</h2>
			<p class="text-sm">{description.slice(0, 80)}...</p>
			<div class="flex flex-wrap mt-3">
				{#each tags as tag}
					<span class="badge badge-outline mr-2">{tag}</span>
				{/each}
			</div>

		</div>
	</a>
</article>
