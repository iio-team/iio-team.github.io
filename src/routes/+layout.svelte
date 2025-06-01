<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	import Navigation from '$lib/components/Navigation.svelte';

	import { base } from '$app/paths';
	import Up from '$lib/components/Up.svelte';

	let year = new Date().getFullYear();
</script>

<div class="min-h-screen w-full flex flex-col items-center">
	<Navigation />
	<Up />

	<main class="w-full grow flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer class="footer gap-4 footer-center p-10 bg-base-300 text-base-content">
		<div class="flex flex-wrap justify-center gap-2">
			<div class="join gap-[0.5px]">
				<a
					href="{base}/images/logo-pack.zip"
					download
					class="join-item btn btn-sm xs:btn-md normal-case btn-outline border-neutral"
				>
					Logo pack
				</a>

				<a
					class="join-item btn btn-sm xs:btn-md normal-case btn-outline border-neutral"
					href="mailto:iio.team@iio.team">iio.team@iio.team</a
				>
			</div>
			<div class="join gap-[0.5px]">
				<a
					href="https://www.facebook.com/profile.php?id=61576543637763"
					class="join-item btn btn-sm xs:btn-md btn-outline border-neutral"
				>
					<i class="fa-brands fa-facebook text-lg xs:text-xl" />
				</a>

				<a
					href="https://www.instagram.com/iiot_official/"
					class="join-item btn btn-sm xs:btn-md btn-outline border-neutral"
				>
					<i class="fa-brands fa-instagram text-lg xs:text-xl" />
				</a>
			</div>
		</div>
		<div>
			<p class="opacity-90">Copyright © {year} - IIOT</p>
		</div>
	</footer>
</div>
