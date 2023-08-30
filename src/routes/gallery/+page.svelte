<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';
	import Picture from './Picture.svelte';

	export let data;
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<Hero>Gallery</Hero>

<Content>
	<div class="grid justify-items-center w-full md:w-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
		{#each data.galleries as gallery}
			<a
				href="{base}/gallery/{gallery.year}"
				class="group card card-compact w-full max-w-[24rem] md:w-[22rem] 2xl:w-[24rem] h-fit bg-base-300 shadow-md overflow-hidden"
			>
				<Picture year={gallery.year} image={gallery.image} />
				<div
					class="card-body bg-base-300 w-full h-12 2xl:h-14 transition-all group-hover:-translate-y-3 justify-center"
				>
					<h2 class="card-title text-xl text-base-content font-bold divider !my-0">
						{gallery.title}
					</h2>
				</div>
			</a>
		{/each}
	</div>
</Content>
