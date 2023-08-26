<script>
	// @ts-nocheck
	import { base } from '$app/paths';

	export let data;

	let modal;
	let modalIndex;
	let modalImage;
	let firstOpened;

	let visible = false;

	export function open(image) {
		firstOpened = true;
		modalIndex = data.images.indexOf(image);
		modalImage = image;
		modal?.showModal();
	}

	let length = data.images.length;
	function next() {
		visible = false;
		modalIndex = (modalIndex + 1) % length;
		modalImage = data.images[modalIndex];
	}
	function previous() {
		visible = false;
		modalIndex = modalIndex - 1;
		if (modalIndex < 0) modalIndex += length;
		modalImage = data.images[modalIndex];
	}

	function handleArrows(e) {
		//left
		if (e.keyCode == 37) previous();
		//right
		else if (e.keyCode == 39) next();
	}
</script>

<dialog
	id="modal"
	bind:this={modal}
	on:keydown={handleArrows}
	class="modal p-2 bg-black bg-opacity-60 backdrop-blur-md"
>
	<form
		method="dialog"
		class="modal-box p-0 overflow-hidden w-full h-fit md:w-fit md:h-full max-w-full max-h-[90%] bg-base-300 relative"
	>
		<button
			class="z-50 btn border-none opacity-60 hover:opacity-100 transition-opacity w-9 h-9 min-h-0 btn-square rounded-2xl rounded-tl-none rounded-br-none absolute right-0 top-0 origin-top-right md:right-2 md:top-2 md:origin-center md:rounded-full"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 fill-base-content" viewBox="0 0 384 512">
				<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
				/>
			</svg>
		</button>

		{#if firstOpened}
			<picture>
				<img
					on:load={() => (visible = true)}
					class="w-full h-auto md:w-auto md:h-full object-cover transition-opacity {visible
						? ''
						: 'opacity-0'}"
					src="{base}/images/gallery/{data.year}/{modalImage.name}"
					alt={modalImage.name}
					loading="lazy"
				/>
			</picture>
		{/if}

		<div
			class="absolute z-50 md:btn-group left-0 right-0 flex justify-between md:justify-center top-1/2 -translate-y-1/2 md:top-auto md:bottom-2 md:translate-y-0"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				role="button"
				tabindex="0"
				on:click={previous}
				class="btn border-none opacity-60 hover:opacity-100 transition-opacity btn-square w-9 h-9 min-h-0 rounded-l-none origin-left md:origin-right text-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 fill-base-content" viewBox="0 0 256 512">
					<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
					/>
				</svg>
			</div>
			<div
				class="w-9 h-9 hidden md:flex bg-base-200 opacity-60 justify-center items-center font-bold"
			>
				{modalIndex + 1}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				role="button"
				tabindex="0"
				on:click={next}
				class="btn border-none opacity-60 hover:opacity-100 transition-opacity btn-square w-9 h-9 min-h-0 rounded-r-none origin-right md:origin-left text-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 fill-base-content" viewBox="0 0 256 512">
					<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
					/>
				</svg>
			</div>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button />
	</form>
</dialog>
