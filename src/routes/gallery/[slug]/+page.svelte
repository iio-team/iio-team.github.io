<script>
	// @ts-nocheck
	export let data;

	let currentImage = {};
	function openModal(image) {
		currentImage = image;
		document.getElementById('imageModal').showModal();
	}
</script>

<svelte:head>
	<title>Some subgallery</title>
</svelte:head>

<div
	class="hero h-80 bg-base-100 bg-fixed bg-center bg-cover"
	style="background-image: url('https://picsum.photos/900/300')"
>
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
			on:click={openModal(image)}
			class="card card-compact w-full lg:w-72 xl:w-96 shadow-2xl overflow-hidden cursor-pointer"
		>
			<figure class="w-full h-60 bg-base-200">
				<img
					src="https://picsum.photos/1366/768?random={image.id}"
					alt={image.name}
					class="min-h-full object-cover"
				/>
			</figure>
		</button>
	{/each}

	<dialog id="imageModal" class="modal bg-black bg-opacity-60 backdrop-blur-md">
		<form
			method="dialog"
			class="modal-box p-0 w-11/12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-base-300"
		>
			<img
				class="w-full"
				src="https://picsum.photos/1366/768?random={currentImage.id}"
				alt={currentImage.name}
			/>
		</form>
		<form method="dialog" class="modal-backdrop">
			<button />
		</form>
	</dialog>
</div>
