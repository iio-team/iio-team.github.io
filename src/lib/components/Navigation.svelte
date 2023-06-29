<script>
	import NavList from './NavList.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

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
<div class="w-full navbar lg:sticky top-0 z-40 bg-base-300 px-2 md:px-4 py-3">
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

	<div class="no-flex hidden lg:block">
		<ul class="menu xl:menu-lg menu-horizontal gap-2">
			<NavList />
		</ul>
	</div>

	<ul class="menu menu-lg lg:menu-md xl:menu-lg pl-0">
		<li>
			<a class="hidden xs:flex border border-base-content" href="/participate">Participate</a>
		</li>
	</ul>
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
	<div class="w-4/5 h-full fixed overflow-y-scroll bg-base-300">
		<ul class="menu menu-lg p-4 gap-2">
			<!-- Sidebar content here -->
			<NavList on:closeDrawer={closeDrawer} />
		</ul>
	</div>
</div>
