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
		<a
			href="{base}/"
			class="btn h-full px-0 rounded-none btn-ghost bg-transparent hover:bg-transparent"
		>
			<svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 52"
				><g fill="#427576"
					><path d="M.734 49.269L49.266.731l2 2L2.734 51.269z" /><rect
						x="2"
						y="2"
						width="50"
						height="50"
						rx="2.5"
					/></g
				><rect width="50" height="50" rx="2.5" fill="#6dc1c3" /><path
					d="M18.9 38.9h1.4c1.3 0 2.1-.3 2.4-1 .3-.6.4-3.7.4-9.3v-7.3l-.3-9.5c-.2-.6-.9-.9-2.1-.9H19V9.5l7.1.2 5.3-.2v1.4h-1.7c-1 0-1.7.1-1.9.4-.3.2-.4.9-.5 1.8l-.1 8.2v7.4l.4 9.2c.2.6 1 .8 2.4.8h1.4v1.4l-5.8-.2-6.6.2v-1.4l-.1.2z"
					fill="#fff"
				/><g fill="#427576"
					><path d="M58.734 49.269L107.266.731l2 2-48.533 48.538z" /><rect
						x="60"
						y="2"
						width="50"
						height="50"
						rx="2.5"
					/></g
				><rect x="58" width="50" height="50" rx="2.5" fill="#6dc1c3" /><path
					d="M76.8 38.9h1.4c1.3 0 2.1-.3 2.4-1 .3-.6.4-3.7.4-9.3v-7.3l-.3-9.5c-.2-.6-.9-.9-2.1-.9h-1.7V9.5l7.1.2 5.3-.2v1.4h-1.7c-1 0-1.7.1-1.9.4-.3.2-.4.9-.5 1.8l-.1 8.2v7.4l.4 9.2c.2.6 1 .8 2.4.8h1.4v1.4l-5.8-.2-6.6.2v-1.4l-.1.2h0z"
					fill="#fff"
				/><g fill="#427576"
					><path d="M116.734 49.269L165.266.731l2 2-48.533 48.538z" /><rect
						x="118"
						y="2"
						width="50"
						height="50"
						rx="2.5"
					/></g
				><rect x="116" width="50" height="50" rx="2.5" fill="#6dc1c3" /><path
					d="M124.7 25c0-4.7 1.5-8.5 4.6-11.4s7.1-4.3 12.1-4.3 8.8 1.3 11.7 4c2.8 2.7 4.2 6.2 4.2 10.6s-1.6 8.8-4.9 12-7.4 4.8-12.4 4.8-5.8-.6-8-1.9c-2.3-1.3-4-3.1-5.3-5.5s-2-5.2-2-8.3h0zm4.4-1.8c0 3.2.6 6.1 1.7 8.5s2.6 4.2 4.5 5.4 4 1.8 6.4 1.8 4.2-.5 5.8-1.5c1.7-1 3-2.5 3.9-4.6 1-2 1.4-4.5 1.4-7.4s-.5-5.6-1.6-7.8-2.5-3.8-4.3-4.9-4-1.6-6.5-1.6-4.3.5-5.9 1.4c-1.7 1-3 2.4-3.9 4.2-.9 1.9-1.4 4-1.4 6.4l-.1.1h0z"
					fill="#fff"
				/><g fill="#36376d"
					><path d="M174.734 49.269L223.266.731l2 2-48.533 48.538z" /><rect
						x="176"
						y="2"
						width="50"
						height="50"
						rx="2.5"
					/></g
				><rect x="174" width="50" height="50" rx="2.5" fill="#595bb4" /><path
					d="M201.3 11.7c-.2 2.1-.2 4.4-.2 6.8v12.2l.3 7.5c.2.5 1 .7 2.4.7h1.6v1.4l-6.4-.2-6.4.2v-1.4h1.8c.9 0 1.6-.1 1.8-.4.3-.3.5-.7.5-1.5l.2-6.5V18.2l-.2-6.7h-2.2l-5.8.2c-.4.2-.6.8-.7 1.9l-.3 2.9h-1.4v-2.6l-.2-4.4 13.6.2 11.9-.2c-.3 2.4-.4 4.8-.5 7h-1.4l-.2-2.8c0-1-.2-1.6-.4-1.7-.2-.2-.5-.3-1.1-.3l-5.4-.2h-1.7l.4.2h0z"
					fill="#fff"
				/></svg
			>
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
