<script>
	// @ts-nocheck
	export let data;

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';

	let modalImage = data.images[0];
	function openModal(image) {
		modalImage = image;
		document.getElementById('imageModal').showModal();
	}
</script>

<svelte:head>
	<title>{data.year} Photos</title>
</svelte:head>

<Hero>{data.year} Photos</Hero>

<Content>
	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.images as image}
			<button
				on:click={openModal(image)}
				class="card card-compact w-full lg:w-72 xl:w-96 shadow-lg overflow-hidden cursor-pointer border border-base-300"
			>
				<figure class="w-full h-60 bg-base-200">
					<img
						src="{base}/{image.url}"
						alt={image.name}
						class="min-h-full object-cover"
					/>
				</figure>
			</button>
		{/each}

		<dialog id="imageModal" class="modal p-4 bg-black bg-opacity-60 backdrop-blur-md">
			<form
				method="dialog"
				class="modal-box p-0 w-full h-fit md:w-fit md:h-full max-w-full max-h-[90%] bg-base-300 relative"
			>
				<button class="btn btn-square glass btn-sm h-10 w-10 bg-[#e24c4b] hover:bg-[#af3a3a] border-none rounded-2xl rounded-tl-none rounded-br-none absolute top-0 right-0 origin-top-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 stroke-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="3"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<img
					class="w-full h-auto md:w-auto md:h-full"
					src="{base}/{modalImage.url}"
					alt="{modalImage.name}"
					loading="lazy"
				/>
			</form>
			<form method="dialog" class="modal-backdrop">
				<button />
			</form>
		</dialog>
	</div>
</Content>
