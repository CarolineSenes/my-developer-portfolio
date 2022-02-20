<script>
	import GithubIcon from './github-icon.svelte';
	import TwitterIcon from './twitter-icon.svelte';
	import LinkedinIcon from './linkedin-icon.svelte';
	import MailIcon from './mail-icon.svelte'
</script>

<footer class="p-10 footer bg-primary text-primary-content footer-center">
	<div class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/projects">Portfolio</a>
		<a class="link link-hover" href="/posts">Blog</a>
		<a class="link link-hover" href="/about">A Propos</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://twitter.com/senes_caroline">
				<TwitterIcon />
			</a>
			<a href="https://github.com/CarolineSenes">
				<GithubIcon />
			</a>
			<a href="https://www.linkedin.com/in/carolinesenes/">
				<LinkedinIcon />
			</a>
			<a href="mailto:senes.caroline@orange.fr">
				<MailIcon />
			</a>
		</div>
	</div>
	<div>
		<p>© {`${new Date().getFullYear()}`} - Made with Svelte</p>
	</div>
</footer>
