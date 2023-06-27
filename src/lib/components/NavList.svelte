<script>
	import { clickOutside } from '$lib/scripts/clickOutside';

	export let drawerOpened = false;
	let dropdownOpened = false;
	function closeDropdown() {
		dropdownOpened = false;
	}
	function closeDrawer() {
		drawerOpened = false;
		dropdownOpened = false;
	}
</script>

<li><a href="/" on:click={closeDrawer}>Home</a></li>
<li>
	<details bind:open={dropdownOpened} use:clickOutside on:outsideclick={closeDropdown}>
		<summary>Competition</summary>
		<ul class="p-2">
			<li><a href="/competition/rules" on:click={closeDrawer}>Rules</a></li>
			<li><a href="/competition/tasks" on:click={closeDrawer}>Tasks</a></li>
			<li><a href="/competition/results" on:click={closeDrawer}>Results</a></li>
			<li><a href="#" on:click={closeDrawer}>Syllabus</a></li>
		</ul>
	</details>
</li>
<li><a href="/schedule" on:click={closeDrawer}>Schedule</a></li>
<li><a href="/friend-pages" on:click={closeDrawer}>Friend pages</a></li>
<li><a href="/gallery" on:click={closeDrawer}>Gallery</a></li>
<li><a href="/contact" on:click={closeDrawer}>Contact</a></li>
