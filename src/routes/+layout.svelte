<script>
	import '../app.css';

	import Navigation from '$lib/components/Navigation.svelte';

	let year = new Date().getFullYear();
</script>

<div class="flex min-h-screen flex-col">
	<Navigation />

	<main class="w-full grow flex flex-col items-center bg-neutral">
		<slot />
	</main>

	<footer class="footer footer-center h-16 md:h-24 lg:h-32 bg-base-300">
		<p class="text-base-content">Copyright © 2023 - All right reserved</p>
	</footer>
</div>
