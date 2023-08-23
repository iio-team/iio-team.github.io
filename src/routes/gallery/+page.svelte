<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';

	export let data;
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<Hero>Gallery</Hero>

<Content>
	<div class="grid w-full lg:w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
		{#each data.galleries as gallery}
			<a
				href="{base}/gallery/{gallery.year}"
				class="group card card-compact w-full lg:w-72 xl:w-96 bg-base-300 shadow-md overflow-hidden border border-base-300"
			>
				<figure class="w-full h-56 bg-base-200">
					<img
						src="{base}/{gallery.coverUrl}"
						class="min-h-full object-cover"
						alt=""
						loading="lazy"
					/>
				</figure>
				<div class="card-body bg-base-300 w-full h-14 transition-all group-hover:-translate-y-2 justify-center">
					<h2 class="card-title text-xl text-base-content divider my-0">{gallery.title}</h2>
				</div>
			</a>
		{/each}
	</div>
</Content>