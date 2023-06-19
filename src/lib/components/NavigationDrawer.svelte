<script>
	import NavList from './NavList.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	let drawerOpened = false;
</script>

<div class="drawer">
	<input id="menu-drawer" bind:checked={drawerOpened} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content w-full min-h-screen flex flex-col items-center">
		<!-- Navbar -->
		<div class="w-full navbar sticky top-0 z-40 bg-base-300 px-5 py-3">
			<div class="flex-none lg:hidden">
				<label for="menu-drawer" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>

			<div class="grow">
				<a href="/" class="btn btn-ghost font-bold text-2xl">IIOT</a>
			</div>

			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal gap-2">
					<!-- Navbar menu content here -->
					<NavList />
				</ul>
			</div>

			<div class="grow lg:grow-0 justify-end lg:justify-start gap-5">
				<a href="/participate" class="btn btn-ghost btn-outline ">Participate</a>
				<ThemeSwitch />
			</div>

		</div>
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side z-50 grid lg:hidden">
		<label for="menu-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<NavList bind:drawerOpened />
		</ul>
	</div>
</div>
