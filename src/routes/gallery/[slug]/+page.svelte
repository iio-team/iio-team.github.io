<script>
	// @ts-nocheck
	export let data;

	import Hero from '$lib/components/page/Hero.svelte';
	import RoundedContent from '$lib/components/page/RoundedContent.svelte';

	let currentImage = {};
	function openModal(image) {
		currentImage = image;
		document.getElementById('imageModal').showModal();
	}
</script>

<svelte:head>
	<title>Some subgallery</title>
</svelte:head>

<Hero>Subgallery</Hero>

<RoundedContent>
	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.images as image}
			<button
				on:click={openModal(image)}
				class="sm:btn-active card card-compact w-full lg:w-72 xl:w-96 shadow-2xl overflow-hidden cursor-pointer border border-base-300"
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

		<dialog id="imageModal" class="modal px-4 bg-black bg-opacity-60 backdrop-blur-md">
			<form
				method="dialog"
				class="modal-box p-0 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-base-300"
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
</RoundedContent>
