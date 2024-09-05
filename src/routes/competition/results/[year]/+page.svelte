<script>
// @ts-nocheck

	import ResultsTable from './ResultsTable.svelte';

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';
	import ResultCard from './ResultCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.year} Results</title>
</svelte:head>

<Hero>IIOT International Final {data.year} Results</Hero>

<Content>
	<div class="gap-6 w-full flex-col flex md:hidden">
		{#each data.main_rows as row, i}
			<ResultCard hasTasks={data.hasTasks} year={data.year}  {row} headers={data.headers} rank={i+1} />
		{/each}

		{#if data.guest_rows}
			<h2 class="text-3xl font-bold mt-4 text-center">Guest Teams</h2>
			{#each data.guest_rows as row, i}
				<ResultCard hasTasks={data.hasTasks} year={data.year}  {row} headers={data.headers} rank={i+1} />
			{/each}
		{/if}
		
	</div>

	<ResultsTable rows={data.main_rows} hasTasks={data.hasTasks} year={data.year} headers={data.headers} />
	
	{#if data.guest_rows}
		<h2 class="hidden md:block text-3xl font-bold mt-4">Guest Teams</h2>
		<ResultsTable rows={data.guest_rows} hasTasks={data.hasTasks} year={data.year} headers={data.headers} />
	{/if}
</Content>

