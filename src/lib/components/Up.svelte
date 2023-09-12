<script>
	import { onMount } from 'svelte';

	// @ts-nocheck

	let hidden = true;
	function manageHiddenState() {
		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
			hidden = false;
		} else hidden = true;
	}

	onMount(() => {
		manageHiddenState();
		window.onscroll = () => {
			manageHiddenState();
		};
	});

	function scrollTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<button
	on:click={scrollTop}
	class:hidden
	class="z-50 fixed top-4 right-0 ml-auto btn btn-neutral btn-sm btn-square rounded-r-none lg:!hidden"
>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 fill-neutral-content" viewBox="0 0 448 512"
		><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
			d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
		/></svg
	>
</button>
