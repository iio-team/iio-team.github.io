<script>
	// @ts-nocheck

	import { base } from '$app/paths';

	export let country;

    let img;
    function error() {
        img.src =`${base}/images/flags/.svg`;
    }
</script>

<img
    bind:this={img}
	on:error={error}
	class="w-20 md:w-32 rounded-md md:rounded-lg"
	src="{base}/images/flags/{country.name}.svg?{Math.random()}"
	alt="flag"
/>
