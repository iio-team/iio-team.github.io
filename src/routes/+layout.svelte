<script>
	import '../app.css';

	import NavigationDrawer from '$lib/components/NavigationDrawer.svelte';

	let year = new Date().getFullYear();
</script>

<NavigationDrawer>
	<main slot="main" class="grow min-w-full flex flex-col items-center bg-neutral">
		<slot />
	</main>

	<footer slot="footer" class="footer footer-center h-fit p-8 gap-6 bg-base-300">
		<img class="w-96 opacity-75 " src="/images/IIOT.png" alt="IIOT logo" />
		<p class="text-base-content">Copyright © 2023 - All right reserved</p>
	</footer>
</NavigationDrawer>
