<script>
	// @ts-nocheck
	export let data;

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	let currentImageName = data.imageNames[0];
	function openModal(imageName) {
		currentImageName = imageName;
		document.getElementById('imageModal').showModal();
	}
</script>

<svelte:head>
	<title>{data.year} Photos</title>
</svelte:head>

<Hero>{data.year} Photos</Hero>

<Content>
	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.imageNames as imageName}
			<button
				on:click={openModal(imageName)}
				class="sm:btn-active card card-compact w-full lg:w-72 xl:w-96 shadow-lg overflow-hidden cursor-pointer border border-base-300"
			>
				<figure class="w-full h-60 bg-base-200">
					<img
						src="/images/gallery/{data.year}/{imageName}"
						alt={imageName}
						class="min-h-full object-cover"
					/>
				</figure>
			</button>
		{/each}

		<dialog id="imageModal" class="modal p-4 bg-black bg-opacity-60 backdrop-blur-md">
			<form
				method="dialog"
				class="modal-box p-0 w-full h-fit md:w-fit md:h-full max-w-4xl max-h-[90%] bg-base-300"
			>
				<img
					class="w-full h-auto md:w-auto md:h-full"
					src="/images/gallery/{data.year}/{currentImageName}"
					alt={currentImageName}
					loading="lazy"
				/>
			</form>
			<form method="dialog" class="modal-backdrop">
				<button />
			</form>
		</dialog>
	</div>
</Content>
