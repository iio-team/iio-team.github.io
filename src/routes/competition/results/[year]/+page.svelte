<script>
	// @ts-nocheck

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
		{#each data.rows as row, i}
			<ResultCard row={row} headers={data.headers} rank={i+1}/>
		{/each}
	</div>

	<div class="overflow-x-auto w-full xl:max-w-[80%] rounded-box hidden md:block">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-box bg-base-200">
			<thead>
				<tr>
					{#each data.headers as th}
						<th class="whitespace-break-spaces text-sm">{th}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each data.rows as row}
					<tr>
						{#each data.headers as header}
							<td
								class:left={['Team', 'Country', 'School'].includes(header)}
								class:font-bold={header == 'Total'}
							>
								{#if header == 'Award' && row.Award && row.Award != ''}
									<div class="tooltip h-7 cursor-help" data-tip={row.Award}>
										<img
											class="w-7 h-7"
											src="{base}/images/medals/{row.Award}.png"
											alt={row.Award}
										/>
									</div>
								{:else}
									{row[`${header}`]}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Content>

<style>
	tr {
		border: none;
	}
	td {
		text-align: center;
	}
	.left {
		text-align: left !important;
	}
	td,
	th {
		color: hsl(var(--bc));
		border: 1px solid hsl(var(--b3));
	}
	thead th {
		border-top-width: 0;
	}
	tbody tr td:first-child {
		font-weight: bold;
	}
	tbody tr:last-child th,
	tbody tr:last-child td {
		border-bottom: 0;
	}
	tbody tr td:first-child,
	thead tr th:first-child {
		border-left: 0;
	}
	tbody tr td:last-child,
	thead tr th:last-child {
		border-right: 0;
	}
</style>
