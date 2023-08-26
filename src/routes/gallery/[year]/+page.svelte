<script>
	// @ts-nocheck
	export let data;

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Carousel from './Carousel.svelte';
	import { base } from '$app/paths';

	let carousel;
</script>

<svelte:head>
	<title>{data.year} Photos</title>
</svelte:head>

<Hero>{data.year} Photos</Hero>

<Content>
	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.images as image}
			<button
				on:click={carousel.open(image)}
				class="card card-compact w-full lg:w-72 xl:w-96 shadow-lg overflow-hidden cursor-pointer border border-base-300"
			>
				<picture class="w-full h-60 bg-base-200">
					<source
						class="min-h-full object-cover"
						type="image/webp"
						srcset="{base}/images/gallery/{data.year}/webp/{image.webp}"
					/>
					<img
						src="{base}/images/gallery/{data.year}/{image.file}"
						alt={image.name}
						class="min-h-full object-cover"
					/>
				</picture>
			</button>
		{/each}

		<Carousel data={data} bind:this={carousel}/>
	</div>
</Content>
