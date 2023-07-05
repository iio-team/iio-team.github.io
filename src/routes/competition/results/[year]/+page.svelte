<script>
// @ts-nocheck

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	export let data;
</script>

<svelte:head>
	<title>Results</title>
</svelte:head>

<Hero>IIOT International Final 2023 Results</Hero>

<Content>
	<div class="overflow-auto w-full rounded-2xl">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-2xl bg-base-200 shadow-lg">
			<thead>
				<tr>
					{#each data.headers as th}
						<th class="whitespace-break-spaces">{th}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each data.rows as row}
					<tr>
						<th>{row.Rank}</th>
						<td>
							{#if row.Award != ''}
							<div class="tooltip h-7 cursor-help" data-tip="{row.Award}">
								<img class="w-7 h-7" src="/images/medals/{row.Award}.png" alt={row.Award} />
							</div>
							{/if}
						</td>
						<td class="left">{row.Team}</td>
						<td class="left">{row.Country}</td>

						{#each data.tasks as task}
							<td>{row[`${task}`]}</td>
						{/each}
						
						<td>{row.Total}</td>
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
	tbody th {
		text-align: right;
	}
	thead th {
		border-top-width: 0;
	}
	tbody tr:last-child th,
	tbody tr:last-child td {
		border-bottom: 0;
	}
	tbody tr th,
	thead tr th:first-child {
		border-left: 0;
	}
	tbody tr td:last-child,
	thead tr th:last-child {
		border-right: 0;
	}
</style>
