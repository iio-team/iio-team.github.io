<script>
	// @ts-nocheck

	export let data;
</script>

<svelte:head>
	<title>Some subgallery</title>
</svelte:head>

<div class="flex flex-col justify-start items-center bg-base-100">
	<div class="hero h-80 bg-accent" style="background-image: url('https://picsum.photos/900/300')">
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Subgallery</h1>
			</div>
		</div>
	</div>

	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
		{#each data.images as image}
			<button
				onclick="{image.name}.showModal()"
				class="card card-compact w-full lg:w-72 xl:w-96 bg-base-300 shadow-2xl overflow-hidden cursor-pointer"
			>
				<figure class="w-full h-60 bg-base-300">
					<img src="https://picsum.photos/1366/768?random={image.id}" alt={image.name} class="h-full"/>
				</figure>
			</button>

			<dialog id={image.name} class="modal bg-black bg-opacity-60 backdrop-blur-sm">
				<form method="dialog" class="modal-box p-0 w-11/12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-base-300">
					<img
						class="w-full"
						src="https://picsum.photos/1366/768?random={image.id}"
						alt={image.name}
					/>
				</form>
				<form method="dialog" class="modal-backdrop">
					<button />
				</form>
			</dialog>
		{/each}
	</div>
</div>