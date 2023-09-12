<script>
	// @ts-nocheck

	import { base } from '$app/paths';
	import Score from './Score.svelte';

	export let year;
	export let row;
	export let headers;
	export let rank = null;
	export let hasTasks;

	let flag;
	function error() {
		flag.src = `${base}/images/flags/.svg`;
	}

	let open;
</script>

<div class="card w-full bg-base-200 shadow-md border border-base-300">
	<div class="card-body p-6 gap-4">
		<h2 class="card-title flex items-start justify-between gap-4">
			<span class="font-bold text-2xl">
				#{row.Rank ? row.Rank : rank}
			</span>
			<span class="text-center grow text-xl">{row.Team}</span>
			<img
				bind:this={flag}
				on:error={error}
				class="h-8 rounded-md"
				src="{base}/images/flags/{row.Country}.svg?{Math.random()}"
				alt={row.Country}
			/>
		</h2>
		<div class="flex flex-wrap gap-2">
			{#if row.Country}
				<p class="text-lg w-full">
					Country:
					<span class="font-semibold">{row.Country}</span>
				</p>
			{/if}
			{#if row.School}
				<p class="text-lg w-full">
					School:
					<span class="font-semibold normal-case">{row.School}</span>.
				</p>
			{/if}
			{#if row.Total}
				<p class="text-lg flex items-center gap-2">
					Total points:
					<span class="badge badge-neutral h-fit w-fit transition-none text-lg font-bold">
						{row.Total}
					</span>
				</p>
			{/if}
			{#if row.Award}
				<p class="text-lg grow-0 flex items-center gap-1">
					Award:
					<img src="{base}/images/medals/{row.Award}.png" alt={row.Award} class="h-9" />
				</p>
			{/if}
		</div>
		<div class="collapse collapse-arrow bg-base-300">
			<input type="checkbox" bind:checked={open} />
			<div class="collapse-title font-medium h-fit text-lg">Points for each task:</div>
			<div class="collapse-content {open ? 'mt-2' : ''} flex flex-wrap gap-x-4 gap-y-6">
				{#each headers as header}
					{#if !['Rank', 'Award', 'Team', 'Country', 'School', 'Total'].includes(header)}
						{#if hasTasks}
							<a
								class="btn hover:bg-base-100 indicator grow normal-case"
								href="{base}/competition/tasks/{year}#{header}"
							>
								<Score score={row[`${header}`]} />
								{header}
							</a>
						{:else}
							<div class="h-12 px-4 flex justify-center items-center bg-base-200 rounded-btn indicator grow normal-case">
								<Score score={row[`${header}`]} />
								{header}
							</div>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
