<script>
	import { clickOutside } from '$lib/scripts/clickOutside';
	import { createEventDispatcher } from 'svelte';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const dispatch = createEventDispatcher();

	let dropdownOpened = false;
	function closeDropdown() {
		dropdownOpened = false;
	}

	function closeDrawer() {
		dropdownOpened = false;
		dispatch('closeDrawer');
	}
</script>

<li>
	<a href="{base}/" class:font-bold={$page.route.id === `${base}/`} on:click={closeDrawer}>Home</a>
</li>
<li>
	<details bind:open={dropdownOpened} use:clickOutside on:outsideclick={closeDropdown}>
		<summary class:font-bold={$page.route.id?.includes(`${base}/competition`)}>Competition</summary>
		<ul class="p-2">
			<li>
				<a
					href="{base}/competition/tasks/2023"
					class:font-bold={$page.route.id === `${base}/competition/tasks/[year]`}
					on:click={closeDrawer}>Tasks</a
				>
			</li>
			<li>
				<a
					href="{base}/competition/results/2024"
					class:font-bold={$page.route.id === `${base}/competition/results/[year]`}
					on:click={closeDrawer}>Results</a
				>
			</li>
			<li />
			<li>
				<a
					href="{base}/documents/Regulations.pdf"
					target="_blank"
					on:click={closeDrawer}
					class="gap-8 min-w-max"
				>
					Rules
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 fill-base-content ml-auto"
						viewBox="0 0 512 512"
					>
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="{base}/documents/Syllabus.pdf"
					target="_blank"
					on:click={closeDrawer}
					class="gap-8 min-w-max"
				>
					Syllabus
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 fill-base-content ml-auto"
						viewBox="0 0 512 512"
					>
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</details>
</li>
<li>
	<a
		href="{base}/schedule"
		class:font-bold={$page.route.id === `${base}/schedule`}
		on:click={closeDrawer}>Schedule</a
	>
</li>
<li>
	<a
		href="{base}/countries"
		class:font-bold={$page.route.id === `${base}/countries`}
		on:click={closeDrawer}>Countries</a
	>
</li>
<li>
	<a
		href="{base}/editions"
		class:font-bold={$page.route.id === `${base}/editions`}
		on:click={closeDrawer}>Past editions</a
	>
</li>
<li>
	<a
		href="{base}/gallery"
		class:font-bold={$page.route.id?.includes(`${base}/gallery`)}
		on:click={closeDrawer}>Gallery</a
	>
</li>
<li>
	<a
		href="{base}/participate"
		class:font-bold={$page.route.id === `${base}/participate`}
		on:click={closeDrawer}>Participate</a
	>
</li>

<style>
	summary::after {
		color: hsl(var(--bc)) !important;
	}
</style>
