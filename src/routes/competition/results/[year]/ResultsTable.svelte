<script>
// @ts-nocheck

	import { base } from '$app/paths';

	export let headers;
	export let hasTasks;
	export let year;
	export let rows;

	const maxL = 20;
	function trim(school) {
		if (school.length <= maxL) {
			return school;
		} 
		return school.substr(0, maxL) + '...';
	}
</script>

<div class="overflow-x-auto w-full rounded-box hidden md:block">
	<table class="table w-fit mx-auto table-sm lg:table-md rounded-box bg-base-200">
		<thead>
			{#each headers as th}
				<th class="whitespace-break-spaces text-xs">
					{#if ['Rank', 'Award', 'Team', 'Country', 'School', 'Total'].includes(th)}
						{th}
					{:else if hasTasks}
						<a
							href="{base}/competition/tasks/{year}#{th}"
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
			{#each rows as row}
				<tr>
					{#each headers as header}
						<td class={['Team', 'Country', 'School'].includes(header) ? 'left' : ''}>
							{#if header == 'Award' && row.Award && row.Award != ''}
								<div class="tooltip h-7 cursor-help" data-tip={row.Award}>
									<img class="w-7 h-7" src="{base}/images/medals/{row.Award}.png" alt={row.Award} />
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
							{:else if header == 'School'}
								<div class="tooltip cursor-help" data-tip={row.School}>
									{trim(row[`${header}`])}
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

<style>
	th, td {
		padding-left: .5rem !important;
		padding-right: .5rem !important;
	}
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
