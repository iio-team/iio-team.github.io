<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import TaskCard from './TaskCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.year} Tasks</title>
</svelte:head>

<Hero>IIOT International Final {data.year} Tasks</Hero>

<Content>
	<div class="w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8">
		<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
			{#each data.contest_tasks as task}
				<TaskCard {task} />
			{/each}
		</div>

		{#if data.practice_tasks}
			<h2 class="divider text-2xl font-bold mt-10 xs:px-4">Practice tasks</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
				{#each data.practice_tasks as task}
					<TaskCard {task} />
				{/each}
			</div>
		{/if}
	</div>
</Content>
