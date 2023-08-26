<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	export let year;
	export let image;

	let visible = false;

	let img;
	onMount(() => (visible = img.complete));
</script>

<picture class="relative w-full h-60 bg-base-200 overflow-hidden">
	{#if !visible}
		<span
			class="loading loading-lg loading-spinner text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
	{/if}

	<source
		type="image/webp"
		srcset="{base}/images/gallery/{year}/webp/{image.webp},"
	/>
	<img
		bind:this={img}
		on:load={() => (visible = true)}
		class="min-h-full object-cover transition-opacity {visible ? '' : 'opacity-0'}"
		src="{base}/images/gallery/{year}/{image.file}"
		alt={image.name}
		loading="lazy"
	/>
</picture>
