<script context="module">
	import tasks_file from '$lib/competition-data/tasks.json';
	import results_file from '$lib/competition-data/results.json';
</script>

<script>
	// @ts-nocheck
	import { base } from '$app/paths';

	export let year;
	export let flag = null;
	let tasks = tasks_file[`${year}`];
	let results = results_file[`${year}`];
</script>

<div class="join join-vertical w-full max-w-2xl shadow-lg rounded-2xl">
	<div class:collapse-arrow="{tasks || results}" class="collapse join-item bg-base-200 border border-base-300">
		<input type="radio" name="my-accordion-4" />
		<div class="collapse-title text-xl font-medium flex gap-6 items-center h-fit">
			{year}
			{#if flag}
				<img src="{base}/images/flags/{flag}.svg" alt="" class="h-6 rounded-sm" />
			{/if}
			<slot name="location"></slot>
		</div>
		<div class="collapse-content flex flex-col gap-4">
			<div class="contents text-lg">
				<slot name="description" />
			</div>
			{#if tasks || results}
				<div class="flex flex-col sm:flex-row gap-4">
					{#if tasks}
						<a class="grow btn btn-outline text-lg rounded-lg" href="{base}/competition/tasks/{year}"
							>Tasks</a
						>
					{/if}
					{#if results}
						<a
							class="grow btn btn-outline text-lg rounded-lg"
							href="{base}/competition/results/{year}">Results</a
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
