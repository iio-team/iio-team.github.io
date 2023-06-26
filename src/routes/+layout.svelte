<script>
	import '../app.css';

	import NavigationDrawer from '$lib/components/NavigationDrawer.svelte';

	let year = new Date().getFullYear();
</script>

<NavigationDrawer>
	<main slot="main" class="grow min-w-full flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer slot="footer" class="footer footer-center h-28 p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © {year} - All right reserved by IIOT</p>
		</div>
	</footer>
</NavigationDrawer>



