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
			<li><a href="/competition/tasks" on:click={closeDrawer}>Tasks</a></li>
			<li><a href="/competition/results" on:click={closeDrawer}>Results</a></li>
			<li></li>
			<li><a href="/pdf/Regulations.pdf" target="_blank" on:click={closeDrawer} class="gap-8">Rules <span class="badge badge-info badge-sm">PDF</span></a></li>
			<li><a href="/pdf/Syllabus.pdf" target="_blank" on:click={closeDrawer} class="gap-8">Syllabus <span class="badge badge-info badge-sm">PDF</span></a></li>
		</ul>
	</details>
</li>
<li><a href="/schedule" on:click={closeDrawer}>Schedule</a></li>
<li><a href="/friend-pages" on:click={closeDrawer}>Friend pages</a></li>
<li><a class="lg:hidden" href="/participate" on:click={closeDrawer}>Participate</a></li>
<li><a href="/archive" on:click={closeDrawer}>Archive</a></li>
<li><a href="/gallery" on:click={closeDrawer}>Gallery</a></li>
<li><a href="/contact" on:click={closeDrawer}>Contact</a></li>
<li><a class="hidden lg:flex border border-base-content" href="/participate" on:click={closeDrawer}>Participate</a></li>

