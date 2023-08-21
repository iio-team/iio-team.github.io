<script>
	import NavList from './NavList.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	import { base } from '$app/paths';

	let drawerOpened = false;

	function closeDrawer() {
		drawerOpened = false;
		drawerToggle();
	}

	function drawerToggle() {
		if (drawerOpened) {
			document.body.style.position = 'fixed';
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.position = 'unset';
			document.body.style.overflow = 'unset';
		}
	}
</script>

<!-- Navbar -->
<div class="w-full navbar h-24 lg:sticky top-0 z-40 bg-base-300 px-2 md:px-4 py-3">
	<!-- Hamburger icon -->
	<div class="flex-none lg:hidden">
		<label for="menu-drawer" class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-7 h-7 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</label>
	</div>
	
	<!-- Logo -->
	<div class="grow px-4 lg:pr-0 justify-center lg:justify-start">
		<a href="{base}/" class="btn h-full px-0 rounded-none btn-ghost bg-transparent hover:bg-transparent">
			
			<picture>
				<source media="(min-width: 1024px)" srcset="{base}/images/logo/logo-simple.svg">
				<img src="{base}/images/logo/logo-letters.svg" alt="logo" class="h-10 lg:h-14">
			</picture>
		</a>
	</div>
	
	<div class="no-flex hidden lg:block">
		<ul class="menu xl:menu-lg menu-horizontal gap-2">
			<NavList />
		</ul>
	</div>
	
	<ThemeSwitch />
</div>

<!-- Drawer -->
<input
	id="menu-drawer"
	bind:checked={drawerOpened}
	on:change={drawerToggle}
	type="checkbox"
	class="drawer-toggle"
/>

<div class="drawer-side z-50 lg:hidden">
	<label for="menu-drawer" class="drawer-overlay" />
	<div class="min-w-[80%] h-full fixed overflow-y-scroll bg-base-300">
		<ul class="menu menu-lg p-4 gap-2">
			<!-- Sidebar content here -->
			<NavList on:closeDrawer={closeDrawer} />
		</ul>
	</div>
</div>
