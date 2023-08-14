<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';

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
				class="card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-lg border border-base-300"
			>
				<figure
					class="flex-col min-w-fit justify-center items-center gap-4 p-8 pb-0 md:pb-8 md:pr-0"
				>
					<img
						class="w-36 rounded-lg"
						src="{base}/images/flags/{country.name}.svg"
						alt="flag of {country.name}"
					/>
					<h1 class="card-title h-fit justify-center text-2xl">{country.name}</h1>
				</figure>
				<div class="card-body w-full md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0">
					{#if country.school}
						<a
							class="group relative h-auto py-2 box-border btn btn-neutral text-lg w-full normal-case flex-col"
							href={country.school.url}
							>
							<span id="{country.name}" class="group-hover:bg-[#2e97c4] badge badge-sm xs:badge-md absolute -top-px -translate-y-full rounded-b-none rounded-t-lg badge-info  transition-none h-auto">
								Leader School / Organization
							</span>
							{country.school.name}
						</a>
					{/if}
					{#if country.iiot}
						<a
							class="h-auto py-2 btn btn-outline text-lg w-full normal-case"
							href={country.iiot}
							>Competition website
						</a>
					{/if}
					<div class="divider m-2">Contacts</div>
					<div class="w-full flex flex-wrap justify-betwee">
						<p class="grow-0 mr-2">National referent:</p>
						<a href="mailto:" class="btn-link link-secondary font-semibold">national-referent@gmail.com</a>
					</div>
					<div class="w-full flex flex-wrap justify-betwee">
						<p class="grow-0 mr-2">Scientific coordinator:</p>
						<a href="mailto:" class="btn-link link-secondary font-semibold">scientific-coordinator@gmail.com</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Content>
