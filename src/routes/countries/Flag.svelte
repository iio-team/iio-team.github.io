<script>
	// @ts-nocheck

	import { base } from '$app/paths';

	export let country;
</script>

<img
	class="w-20 md:w-32 rounded-md md:rounded-lg"
	src="{base}/images/flags/{country.name}.svg"
	alt="flag"
/>
