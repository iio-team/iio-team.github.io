<script>
	// @ts-nocheck
	export let data;

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Carousel from './Carousel.svelte';
	import Picture from '../Picture.svelte';

	let carousel;
</script>

<svelte:head>
	<title>{data.year} Photos</title>
</svelte:head>

<Hero>{data.year} Photos</Hero>

<Content>
	<div class="grid justify-items-center w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
		{#each data.images as image}
			<button
				on:click={carousel.open(image)}
				class="card card-compact w-full max-w-[22rem] lg:max-w-none lg:w-[22rem] shadow-lg overflow-hidden cursor-pointer border border-base-300"
			>
				<Picture year={data.year} image={image} />
			</button>
		{/each}

		<Carousel {data} bind:this={carousel} />
	</div>
</Content>
