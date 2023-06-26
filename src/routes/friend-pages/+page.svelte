<script>
	// @ts-nocheck

	export let data;
</script>

<svelte:head>
	<title>Friend pages</title>
</svelte:head>

<div class="hero h-80 bg-base-200 rounded-b-3xl">
	<div class="hero-overlay bg-opacity-10 rounded-b-3xl" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-4xl md:text-5xl font-bold">Friend pages</h1>
		</div>
	</div>
</div>

<div class="hero p-8 pb-0">
	<div class="hero-content text-left">
		<div class="flex flex-col gap-2 max-w-xl xl:max-w-5xl">
			<p class="text-lg xl:text-xl">
				Here is the list of the participating countries and their contact details. 
			</p>
			<p class="text-lg xl:text-xl">
				The contact options are: Leader School website, qualifying competition website, email address.
			</p>
		</div>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full sm:w-fit py-12 px-8 gap-8">
	{#each data.countries as country}
		<div class="card items-center w-full sm:w-80 bg-base-300 shadow-xl">
			<figure class="px-10 pt-10 w-full h-fit">
				<div class="w-full sm:h-40">
					<img
						src="/images/flags/{country.name}.svg"
						alt="Flag"
						class="rounded-xl w-full sm:h-full bg-center object-cover"
					/>
				</div>
			</figure>
			<div class="card-body gap-4 items-center text-center">
				<h2 class="card-title">{country.name}</h2>
				<div class="card-actions justify-center gap-4">
					{#if country.school}
						<a
							href={country.school}
							target="_blank"
							class="btn btn-outline border-2 btn-accent font-bold">School</a
						>
					{/if}
					{#if country.iiot}
						<a
							href={country.iiot}
							target="_blank"
							class="btn btn-outline border-2 btn-primary font-bold">IIOT page</a
						>
					{/if}
					{#if country.email}
						<a
							href="mailto:{country.email}"
							target="_blank"
							class="btn btn-outline border-2 font-bold">Email</a
						>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
