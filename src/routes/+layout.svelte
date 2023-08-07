<script>
	import '../app.css';

	import Navigation from '$lib/components/Navigation.svelte';

	import { base } from '$app/paths';

	let year = new Date().getFullYear();
</script>

<div class="min-h-screen w-full flex flex-col items-center">
	<Navigation />

	<main class="w-full grow flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer class="footer gap-6 footer-center p-10 bg-base-300 text-base-content">
		<div class="join gap-0">
			<a href="{base}/images/logo-pack.zip" download class="join-item btn normal-case btn-outline border-neutral">Logo pack</a>
			
			<a class="join-item btn btn-outline border-neutral normal-case" href="mailto:iio.team@iio.team">iio.team@iio.team</a>
			
			<a href="https://www.facebook.com/iio.team/" class="join-item btn btn-outline border-[#3b5998] bg-[#3b5998] hover:bg-[#273b65] hover:border-[#273b65]">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
			</a>
		</div>
		<div>
			<p class="opacity-90">Copyright © {year} - IIOT</p>
		</div>
	</footer>
</div>
