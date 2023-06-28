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

	<footer class="footer footer-center h-fit p-8 gap-6 bg-base-300">
		<img class="max-w-xs opacity-60" src="/images/IIOT.png" alt="IIOT logo" />
		<p class="text-base-content">Copyright © 2023 - All right reserved</p>
	</footer>
</div>
