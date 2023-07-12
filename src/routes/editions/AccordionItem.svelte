<script>
	// @ts-nocheck

	import { base } from '$app/paths';

	export let year;
	export let country = null;
	export let tasks = null;
	export let results = null;
</script>

<div class="join join-vertical w-full max-w-2xl shadow-lg rounded-2xl">
	<div class="collapse collapse-arrow join-item bg-base-200 border border-base-300">
		<input type="radio" name="my-accordion-4" />
		<div class="collapse-title text-xl font-medium flex gap-6 items-center h-fit">
			{year}
			{#if country}
				<img src="{base}/images/flags/{country}.svg" alt="" class="h-6 rounded-sm" />
			{/if}
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
