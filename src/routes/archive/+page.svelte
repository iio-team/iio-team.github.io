<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';

	export let data;

	function closeOthers(id) {
		document.getElementsByName('archiveRadio').forEach((r) => {
			if (r.id != id) {
				r.checked = false;
			}
		});
	}
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<Hero>Archive of IIOT tasks and results</Hero>

<Content>
	<div
		class="join join-vertical w-full max-w-2xl shadow-lg rounded-2xl"
		id="accordion"
	>
		{#each data.years as year}
			<div class="join-item collapse collapse-plus bg-base-200 border border-base-300">
				<input
					type="checkbox"
					on:change={(e) => closeOthers(`radio${year}`)}
					name="archiveRadio"
					id="radio{year}"
				/>
				<div class="collapse-title text-xl font-semibold">
					{year}
				</div>
				<div class="collapse-content">
					<div class="flex gap-4 flex-col sm:flex-row">
						{#if data.competitions[`${year}`].tasks}
							<a class="grow btn btn-outline text-lg rounded-lg" href="{base}/competition/tasks/2023"
								>Tasks</a
							>
						{/if}
						{#if data.competitions[`${year}`].results}
							<a class="grow btn btn-outline text-lg rounded-lg" href="{base}/competition/results/2023"
								>Results</a
							>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Content>
