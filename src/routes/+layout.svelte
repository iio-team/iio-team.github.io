<script>
	import '../app.css';

	import Navigation from '$lib/components/Navigation.svelte';

	import { base } from '$app/paths';

	let year = new Date().getFullYear();
</script>

<div class="min-h-screen w-full flex flex-col items-center">
	<Navigation />

	<main class="w-full grow flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer class="footer gap-6 footer-center p-10 bg-base-300 text-base-content">
		<div class="flex gap-3 flex-wrap justify-center">
			<a href="{base}/images/logo-pack.zip" download class="link link-hover text-base-content">Logo pack</a>
			•
			<a class="link link-hover" href="mailto:iio.team@iio.team">iio.team@iio.team</a>
			•
			<a href="https://www.facebook.com/iio.team/" class="text-base-content">
				<img src="{base}/images/facebook.png" alt="facebook" class="w-6">
			</a>
		</div>
		<div>
			<p class="opacity-80">Copyright © {year} - IIOT</p>
		</div>
	</footer>
</div>
