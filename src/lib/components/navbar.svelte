<script>
	import ThemeSelect from "./theme-select.svelte";
</script>

<nav class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
	<div class="flex-1 px-2 mx-2">
		<a class="text-lg font-bold navbar-name" href="/">
			<span class="grey-color" aria-hidden="true"> &lt; </span>
			Caroline SENES 
			<span class="grey-color" aria-hidden="true">/&gt;</span></a>
	</div>

	<div class="dropdown dropdown-left lg:hidden">
		<div tabindex="0" class="m-1 btn">MENU</div>
		<ul
			tabindex="0"
			class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
		>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Projets </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts"> Blog </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
		</ul>
	</div>

	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-center">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Projets </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts">Blog</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about">A Propos</a>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>
</nav>
