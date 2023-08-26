<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import Flag from './Flag.svelte';

	export let data;
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<Hero>Countries</Hero>
<Content>
	<p class="px-2 text-lg text-center max-w-4xl">
		Here's the list of the participating countries and their websites.
	</p>
	<div class="flex flex-col items-center w-full max-w-2xl gap-8">
		{#each data.countries as country}
			<div
				class="card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-md border border-base-300"
			>
				<figure
					class="md:flex-col-reverse min-w-fit justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"
				>
					<h1 class="card-title h-fit justify-center text-2xl">{country.name}</h1>
					<div
						class="divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"
					/>
					<div class="h-fit relative">
						<Flag country={country} />
					</div>
				</figure>
				<div class="card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0">
					{#if country.school}
						<a
							class="group relative h-auto py-2 box-border border-none btn btn-neutral text-lg w-full normal-case flex-col"
							href={country.school.url}
						>
							<span
								id={country.name}
								class="group-hover:bg-primary-focus border-none rounded-t-md rounded-b-none badge badge-primary badge-sm xs:badge-md absolute top-0 -translate-y-full h-auto"
							>
								Leader School / Organization
							</span>
							{country.school.name}
						</a>
					{/if}
					{#if country.iiot}
						<a class="h-auto py-2 btn btn-secondary text-lg w-full normal-case" href={country.iiot}
							>Competition website
						</a>
					{/if}

					<div class="divider m-0 mt-2 font-bold">National referent</div>
					<div class="w-full flex flex-wrap">
						<p class="text-lg text-center">
							{country.national_referent.name || 'Referent Name'},
							<a
								href="mailto:{country.national_referent.email || ''}"
								class="btn-link link-secondary font-semibold"
							>
								{country.national_referent.email || 'referent-email@gmail.com'}
							</a>
						</p>
					</div>

					<div class="divider m-0 font-bold">Scientific coordinator</div>
					<div class="w-full flex flex-wrap">
						<p class="text-lg text-center">
							{country.scientific_coordinator.name || 'Coordinator Name'},
							<a
								href="mailto:{country.scientific_coordinator.email || ''}"
								class="btn-link link-secondary font-semibold"
							>
								{country.scientific_coordinator.email || 'coordinator-email@gmail.com'}
							</a>
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Content>
