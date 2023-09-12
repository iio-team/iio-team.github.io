<script context="module">
	import tasks_file from '$lib/json-data/tasks.json';
	import results_file from '$lib/json-data/results.json';

	import { galleries } from '$lib/stores';
	import { writable } from 'svelte/store';

	let count = 0;
	const activeId = writable(-1);
</script>

<script>
	// @ts-nocheck
	import { base } from '$app/paths';

	export let year;
	export let flag = null;

	let tasks = tasks_file[`${year}`];
	let results = results_file[`${year}`];
	let gallery = $galleries.includes(year);

	const selfId = count++;
	$: active = selfId == $activeId;

	function change(e) {
		if (e.currentTarget.checked) {
			$activeId = selfId;
		}
	}
</script>

<div
	class:collapse-arrow={tasks || results || gallery}
	class="collapse w-full join-item bg-base-200 border border-base-300"
>
	<input bind:checked={active} on:change={(e) => change(e)} type="checkbox" name="accordion" />
	<div class="collapse-title text-xl font-medium flex gap-6 items-center h-fit">
		{year}
		{#if flag}
			<img src="{base}/images/flags/{flag}.svg" alt="{flag} flag" class="h-6 rounded-sm" />
		{/if}
		<div class="contents text-lg">
			<slot name="title" />
		</div>
	</div>
	<div class="collapse-content flex flex-col gap-4">
		<div class="contents text-lg">
			<slot name="description" />
		</div>
		{#if tasks || results || gallery}
			<div class="flex flex-wrap gap-4">
				{#if tasks}
					<a
						class="grow px-8 btn btn-secondary text-lg rounded-btn"
						href="{base}/competition/tasks/{year}">Tasks</a
					>
				{/if}
				{#if results}
					<a
						class="grow px-8 btn btn-primary text-lg rounded-btn"
						href="{base}/competition/results/{year}">Results</a
					>
				{/if}
				{#if gallery}
					<a class="grow px-8 btn btn-neutral text-lg rounded-btn" href="{base}/gallery/{year}"
						>Photos</a
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
