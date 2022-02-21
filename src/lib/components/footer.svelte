<script>
	import GithubIcon from './github-icon.svelte';
	import TwitterIcon from './twitter-icon.svelte';
	import LinkedinIcon from './linkedin-icon.svelte';
	import MailIcon from './mail-icon.svelte';
</script>

<footer class="p-10 footer bg-primary text-primary-content">
	<div>
		<p>© {`${new Date().getFullYear()}`} - Créé avec Svelte, GraphCMS, Tailwind</p>
		<p>Mentions légales</p>
	</div>
	<div class="gap-4">
		<span class="footer-title">Plan</span>
		<a class="link link-hover" href="/projects">Portfolio</a>
		<a class="link link-hover" href="/posts">Blog</a>
		<a class="link link-hover" href="/about">A Propos</a>
	</div>
	<div class="flex flex-col gap-4">
		<span class="footer-title">Réseaux sociaux</span>
		<a href="https://twitter.com/senes_caroline" class="link link-hover flex items-center gap-4">
			<TwitterIcon />
			<p>Twitter</p>
		</a>
		<a href="https://github.com/CarolineSenes" class="link link-hover flex items-center gap-4">
			<GithubIcon />
			<p>GitHub</p>
		</a>
		<a href="https://www.linkedin.com/in/carolinesenes/" class="link link-hover flex items-center gap-4">
			<LinkedinIcon />
			<p>LinkedIn</p>
		</a>
	</div>
	<div>
		<span class="footer-title">Contact</span>
		<a href="mailto:senes.caroline@orange.fr" class="link link-hover flex items-center gap-4">
			<MailIcon />
			<p>E-Mail</p>
		</a>
	</div>
</footer>
