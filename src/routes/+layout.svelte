<script>
	import '../app.css';

	import Navigation from '$lib/components/Navigation.svelte';

	let year = new Date().getFullYear();
</script>

<div class="min-h-screen w-full flex flex-col items-center">
	<Navigation />

	<main class="w-full grow flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer class="footer footer-center p-10 bg-base-300 text-base-content gap-4">
		<p class="text-base-content">Copyright © {year} - All right reserved</p>
	</footer>
</div>
