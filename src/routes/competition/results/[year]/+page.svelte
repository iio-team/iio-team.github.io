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
			<ResultCard hasTasks={data.hasTasks} year={data.year}  {row} headers={data.headers} rank={i+1} />
		{/each}
	</div>

	<div class="overflow-x-auto w-full rounded-box hidden md:block">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-box bg-base-200">
			<thead>
				{#each data.headers as th}
					<th class="whitespace-break-spaces text-sm">
						{#if data.hasTasks && !['Rank', 'Award', 'Team', 'Country', 'School', 'Total'].includes(th)}
							<a
								href="{base}/competition/tasks/{data.year}#{th}"
								class="whitespace-break-spaces link link-hover h-min"
							>
								{th}
							</a>
						{:else}
							{th}
						{/if}
					</th>
				{/each}
			</thead>
			<tbody>
				{#each data.rows as row}
					<tr>
						{#each data.headers as header}
							<td class={['Team', 'Country', 'School'].includes(header) ? 'left' : ''}>
								{#if header == 'Award' && row.Award && row.Award != ''}
									<div class="tooltip h-7 cursor-help" data-tip={row.Award}>
										<img
											class="w-7 h-7"
											src="{base}/images/medals/{row.Award}.png"
											alt={row.Award}
										/>
									</div>
								{:else if !['Rank', 'Award', 'Team', 'Country', 'School', 'Total'].includes(header)}
									<span
										class="badge
											{row[`${header}`] == 100
											? 'badge-success'
											: row[`${header}`] == 0
											? 'badge-error'
											: 'badge-primary'}"
									>
										{row[`${header}`]}
									</span>
								{:else if header == 'Total'}
									<span class="badge badge-neutral font-bold">
										{row[`${header}`]}
									</span>
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
	tbody:last-child td {
		border-bottom: 0;
	}
	tbody tr td:first-child,
	thead th:first-child {
		border-left: 0;
	}
	tbody tr td:last-child,
	thead th:last-child {
		border-right: 0;
	}
</style>
