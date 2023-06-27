<script>
	// @ts-nocheck

	export let data;
</script>

<svelte:head>
	<title>Friend pages</title>
</svelte:head>

<div class="hero h-52 md:h-64 lg:h-72 bg-neutral">
	<div class="hero-overlay bg-opacity-10" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl text-neutral-content font-bold">Friend pages</h1>
		</div>
	</div>
</div>

<div class="hero w-full bg-neutral">
	<div class="hero-content min-w-full p-8 pb-0 bg-base-100 rounded-t-3xl">
		<div class="flex flex-col gap-2 max-w-4xl">
			<p class="px-4 text-xl">
				Here's the list of the participating countries and their contact details, such as the
				website of their Leader School, their IIOT qualifying competition and their email.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col items-center w-full md:max-w-3xl py-12 px-8 gap-8">
	{#each data.countries as country}
		<div class="card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-xl border border-neutral">
			<figure class="flex-col min-w-fit justify-center items-center gap-4 p-8 pb-0 md:pb-8 md:pr-0">
				<img
					class="w-28 rounded-lg "
					src="/images/flags/{country.name}.svg"
					alt="flag of {country.name}"
				/>
				<h1 class="card-title h-fit justify-center text-3xl">{country.name}</h1>
			</figure>
			<div class="card-body w-full items-center md:items-start gap-4 p-8 pt-0 md:pt-8 md:pl-0">
				{#if country.school}
					<div class="join join-vertical w-full">
						<div class="join-item badge text-lg box-border p-4 badge-outline">Leader School</div>
						<a
							class="rounded-tl-none h-auto py-2 box-border btn btn-outline border-2 btn-primary text-xl w-full normal-case"
							href={country.school.url}>{country.school.name}</a
						>
					</div>
				{/if}
				{#if country.iiot}
					<a
						class="h-auto py-2 btn btn-outline border-2 btn-accent text-xl w-full"
						href={country.iiot}>IIOT website</a
					>
				{/if}
			</div>
		</div>
	{/each}
</div>
