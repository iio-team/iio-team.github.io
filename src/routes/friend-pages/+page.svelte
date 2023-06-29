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
	<div class="flex flex-col items-center w-full md:max-w-3xl gap-8">
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
						<div class="join join-vertical w-full">
							<p id="{country.name}" class="join-item badge leading-relaxed text-lg text-center w-full sm:w-fit h-auto box-border normal-case badge-outline">
								Leader School / Organization
							</p>
							<a 
								class="rounded-tl-none rounded-tr-none sm:rounded-tr-lg h-auto py-2 box-border btn btn-outline no-animation border-2 btn-primary text-lg w-full normal-case"
								href="{country.school.url}"
								target="_blank"
								>{country.school.name}
							</a>
						</div>
					{/if}
					{#if country.iiot}
						<a
							class="h-auto py-2 btn btn-outline border-2 btn-accent text-lg w-full"
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
