<script>
	import '../app.css';

	import NavigationDrawer from '$lib/components/NavigationDrawer.svelte';

	let year = new Date().getFullYear();
</script>

<NavigationDrawer>
	<div class="grow flex items-center">
		<slot />
	</div>

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © {year} - All right reserved by IIOT</p>
		</div>
	</footer>
</NavigationDrawer>



