<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import RoundedContent from '$lib/components/page/RoundedContent.svelte';

	export let data;
</script>

<svelte:head>
	<title>Results</title>
</svelte:head>

<Hero>Results</Hero>

<RoundedContent>
	<div class="overflow-auto w-full rounded-lg">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-lg bg-base-200 shadow-lg">
			<thead>
				<tr>
					{#each data.headers as th}
						<th class="whitespace-pre">{th}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each data.rows as row}
					<tr>
						<th>{row.Rank}</th>
						<td>
							{#if row.Award != ''}
								<div class="tooltip h-7" data-tip="{row.Award}">
									<img class="w-7 h-7" src="/images/medals/{row.Award}.png" alt={row.Award} />
								</div>
							{/if}
						</td>
						<td class="left">{row.Team}</td>
						<td class="left"> 
							{row.Country}
						</td>
						<td>{row.abc}</td>
						<td>{row.binge}</td>
						<td>{row.cipher}</td>
						<td>{row.fence}</td>
						<td>{row.ktree}</td>
						<td>{row.matgame}</td>
						<td>{row['public transport']}</td>
						<td>{row.tetris}</td>
						<td>{row['tour de tree']}</td>
						<td>{row.Total}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</RoundedContent>

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
		border: 2px solid hsl(var(--b3));
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
