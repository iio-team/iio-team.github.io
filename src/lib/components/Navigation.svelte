<script>
	import NavList from './NavList.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	let drawerOpened = false;
</script>

<!-- Navbar -->
<div class="w-full navbar sticky top-0 z-40 bg-base-300 px-2 lg:px-6 py-3">
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
		<ul class="menu menu-horizontal gap-2">
			<NavList />
		</ul>
	</div>

	<div class="grow lg:grow-0 justify-end lg:justify-start gap-2">
		<a href="/participate" class="btn btn-outline ">Participate</a>
		<ThemeSwitch />
	</div>
</div>

<!-- Drawer -->
<div class="drawer">
	<input id="menu-drawer" bind:checked={drawerOpened} type="checkbox" class="drawer-toggle" />
	<div class="drawer-side z-50 grid lg:hidden">
		<label for="menu-drawer" class="drawer-overlay" />
		<ul class="menu menu-lg p-4 w-80 h-full bg-base-300">
			<!-- Sidebar content here -->
			<NavList bind:drawerOpened />
		</ul>
	</div>
</div>
