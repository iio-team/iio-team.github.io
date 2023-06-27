<script>
	// @ts-nocheck

	export let data;
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<div class="hero h-72 bg-base-100 bg-fixed bg-center bg-cover" style="background-image: url('https://picsum.photos/900/300')">
	<div class="hero-overlay"/>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Gallery</h1>
		</div>
	</div>
</div>

<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
	<!-- TODO: create paths with slugs for all the sub-galleries, like: /gallery/eventID -->
	{#each data.galleries as gallery}
		<a
			href="/gallery/{gallery.id}"
			class="card card-compact w-full lg:w-72 xl:w-96 bg-base-300 shadow-xl overflow-hidden"
		>
			<figure class="w-full h-60 bg-base-200">
				<img
					src="https://picsum.photos/1366/768?random={gallery.id}"
					class="min-h-full object-cover"
					alt=""
				/>
			</figure>
			<div class="card-body bg-base-300 w-full h-14 transition-all">
				<h2 class="card-title text-base-content">{gallery.name}</h2>
			</div>
		</a>
	{/each}
</div>

<style>
	.card:hover .card-body {
		transform: translateY(-1.5rem);
	}
</style>
