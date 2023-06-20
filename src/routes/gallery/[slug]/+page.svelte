<script>
	// @ts-nocheck

	export let data;
</script>

<div class="flex flex-col justify-start items-center">
	<div class="hero h-80 bg-accent" style="background-image: url('https://picsum.photos/900/300')">
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Subgallery</h1>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
		{#each data.images as image}
			<button
				onclick="{image.name}.showModal()"
				class="card card-compact w-full lg:w-72 xl:w-96 bg-neutral shadow-xl overflow-hidden cursor-pointer"
			>
				<figure>
					<img src="https://picsum.photos/1366/768?random={image.id}" alt={image.name} class="w-full object-cover transition-transform"/>
				</figure>
				<div class="card-body bg-neutral w-full h-14 p-0 justify-center items-center transition-all">
					<h2 class="justify-center card-title text-neutral-content">{image.name}</h2>
				</div>
			</button>

			<dialog id={image.name} class="modal bg-black bg-opacity-60 backdrop-blur-sm">
				<form method="dialog" class="modal-box p-0 w-11/12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
					<img
						class="w-full objcet-cover"
						src="https://picsum.photos/1366/768?random={image.id}"
						alt={image.name}
					/>
					<div class="hidden lg:flex modal-action m-4 justify-end">
						<button class="btn">Close</button>
					</div> 
				</form>
				<form method="dialog" class="modal-backdrop">
					<button />
				</form>
			</dialog>
		{/each}
	</div>
</div>

<style>
	.card:hover figure img {
		transform: scale(1.1);
	}
</style>
