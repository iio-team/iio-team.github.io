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

<li><a href="{base}/" class:font-bold={$page.route.id === `${base}/`} on:click={closeDrawer}>Home</a></li>
<li>
	<details bind:open={dropdownOpened} use:clickOutside on:outsideclick={closeDropdown}>
		<summary class:font-bold={$page.route.id?.includes(`${base}/competition`)}>Competition</summary>
		<ul class="p-2">
			<li><a href="{base}/competition/tasks/2023" class:font-bold={$page.route.id === `${base}/competition/tasks/[year]`} on:click={closeDrawer}>Tasks</a></li>
			<li><a href="{base}/competition/results/2023" class:font-bold={$page.route.id === `${base}/competition/results/[year]`} on:click={closeDrawer}>Results</a></li>
			<li></li>
			<li><a href="{base}/pdf/Regulations.pdf" target="_blank" on:click={closeDrawer} class="gap-8 min-w-max">Rules <img class="w-6 ml-auto" src="{base}/images/pdf.png" alt="pdf"/></a></li>
			<li><a href="{base}/pdf/Syllabus.pdf" target="_blank" on:click={closeDrawer} class="gap-8 min-w-max">Syllabus <img class=" w-6 ml-auto" src="{base}/images/pdf.png" alt="pdf"/></a></li>
		</ul>
	</details>
</li>
<li><a href="{base}/schedule" class:font-bold={$page.route.id === `${base}/schedule`} on:click={closeDrawer}>Schedule</a></li>
<li><a href="{base}/countries" class:font-bold={$page.route.id === `${base}/countries`} on:click={closeDrawer}>Countries</a></li>
<li><a href="{base}/editions" class:font-bold={$page.route.id === `${base}/editions`} on:click={closeDrawer}>Editions</a></li>
<li><a href="{base}/gallery" class:font-bold={$page.route.id?.includes(`${base}/gallery`)} on:click={closeDrawer}>Gallery</a></li>
<li><a class="lg:border lg:border-base-content"  class:font-bold={$page.route.id === `${base}/participate`} href="{base}/participate" on:click={closeDrawer}>Participate</a></li>

<style>
	summary::after {
		color: hsl(var(--bc)) !important;
	}
</style>