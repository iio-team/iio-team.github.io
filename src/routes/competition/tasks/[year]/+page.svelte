<script>
	// @ts-nocheck

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';

	export let data;
</script>

<svelte:head>
	<title>{data.year} Tasks</title>
</svelte:head>

<Hero>IIOT International Final {data.year} Tasks</Hero>

<Content>
	<div class="grid w-fit grid-cols-1 md:grid-cols-2 gap-6">
		{#each data.tasks as task}
			<div class="card bg-base-200 shadow-md border border-base-300">
				<div class="card-body gap-4 p-8">
					<h2 class="card-title text-xl">{task.name} ({task.id})</h2>
					<div class="card-actions items-stretch gap-4">
						<a
							class="text-lg normal-case h-auto px-4 py-2 btn btn-primary grow w-fit"
							href="{base}/tasks/2023/{task.id}.pdf"
							target="_blank"
						>
							<img class="w-6" src="{base}/images/pdf.png" alt="pdf" />
							Statement
						</a>
						<a
							class="text-lg normal-case h-auto px-4 py-2 btn btn-neutral grow w-fit"
							href="{data.zipMap[`${task.id}`]}"
							download
						>
							<img class="w-6" src="{base}/images/zip.png" alt="zip" />
							Solutions and test data
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Content>
