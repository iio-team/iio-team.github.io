<script>
	import { onMount } from 'svelte';
	import NavList from './NavList.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	let drawerOpened = false;

	function closeDrawer() {
		drawerOpened = false;
		handleDrawerToggle();
	}

	function handleDrawerToggle() {
		if (drawerOpened) {
			if (typeof window != 'undefined' && window.document) {
				document.body.style.overflow = 'hidden';
				document.body.style.overscrollBehavior = 'none';
				document.documentElement.style.overscrollBehavior = 'none';
			}
		} else {
			if (typeof window != 'undefined' && window.document) {
				document.body.style.overflow = 'unset';
				document.body.style.overscrollBehavior = 'unset';
				document.documentElement.style.overscrollBehavior = 'unset';
			}
		}
	}
</script>

<!-- Navbar -->
<div class="w-full navbar sticky top-0 z-40 bg-base-300 px-2 md:px-4 py-3">
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
	<div class="grow">
		<a href="/" class="btn btn-ghost font-bold text-3xl"
			><p><span class="text-accent">IIO</span><span class="text-primary">T</span></p></a
		>
	</div>

	<div class="flex-none hidden lg:block">
		<ul class="menu xl:menu-lg menu-horizontal gap-2">
			<NavList />
		</ul>
	</div>

	<div class="grow lg:grow-0 justify-end lg:justify-start">
		<ThemeSwitch />
	</div>
</div>

<!-- Drawer -->
<div class="drawer overflow-hidden h-full">
	<input
		id="menu-drawer"
		bind:checked={drawerOpened}
		on:change={handleDrawerToggle}
		type="checkbox"
		class="drawer-toggle"
	/>

	<div class="drawer-side z-50 lg:hidden fixed">
		<label for="menu-drawer" class="drawer-overlay fixed overflow-hidden" />
		<ul class="menu menu-lg p-4 w-4/5 min-h-full gap-2 bg-base-300">
			<!-- Sidebar content here -->
			<NavList on:closeDrawer={closeDrawer} />
		</ul>
	</div>
</div>
