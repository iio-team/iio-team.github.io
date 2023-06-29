<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import RoundedContent from '$lib/components/page/RoundedContent.svelte';

	export let data;
</script>

<svelte:head>
	<title>Friend pages</title>
</svelte:head>

<Hero>Friend pages</Hero>
<RoundedContent>
	<p class="px-2 text-lg max-w-4xl">
		Here's the list of the participating countries and their websites.
	</p>
	<div class="flex flex-col items-center w-full max-w-2xl gap-8">
		{#each data.countries as country}
			<div
				class="card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-xl border border-neutral"
			>
				<figure
					class="flex-col min-w-fit justify-center items-center gap-2 md:gap-4 p-8 pb-0 md:pb-8 md:pr-0"
				>
					<img
						class="w-32 rounded-lg"
						src="/images/flags/{country.name}.svg"
						alt="flag of {country.name}"
					/>
					<h1 class="card-title h-fit justify-center text-2xl">{country.name}</h1>
				</figure>
				<div class="card-body w-full items-center md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0">
					{#if country.school}
						<a
							class="h-auto pt-3 pb-2 box-border btn btn-outline text-lg w-full normal-case"
							href={country.school.url}
							target="_blank"
							>
							<span id="{country.name}" class="badge max-w-fit badge-info transition-none h-auto">
								Leader School / Organization
							</span>
							{country.school.name}
						</a>
					{/if}
					{#if country.iiot}
						<a
							class="h-auto py-2 btn btn-outline text-lg w-full"
							href={country.iiot}
							target="_blank"
							>IIOT website
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</RoundedContent>
