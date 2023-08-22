<script>
// @ts-nocheck

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Participate</title>
</svelte:head>

<Hero>Participate</Hero>

<Content>
	<div class="w-full max-w-3xl px-2 text-lg flex flex-col">
		<div class="chat chat-start">
			<p class="chat-bubble chat-bubble-primary">
				Joining the IIOT is really simple.
			</p>
		</div>

		<h2 class="text-2xl sm:divider">Regular member country</h2>
		<p class="text-justify">
			As a <span class="font-bold">regular member</span> country you can send teams without costs
			and vote in discussions by promising to host a future edition. A
			<span class="font-bold">leader school or organization</span> for each country coordinates the
			competition. If you want to be a leader school in your country, just fill and send the
			<a href="{base}/documents/Regular Member Application.docx" class="btn-link link-secondary"
				>Regular member application</a
			>
			and the
			<a href="{base}/documents/Letter of Intent.docx" class="btn-link link-secondary"
				>Letter of intent</a
			>
			to the following email address:
			<a href="mailto:iio.team@iio.team" class="btn-link link-secondary">iio.team@iio.team</a>
		</p>

		<h2 class="text-2xl sm:divider">Guest country</h2>
		<p class="text-justify">
			As a guest country you can send teams to the international final, paying for their
			accommodation costs, but can’t discuss regulation changes. If you want to participate with
			guest teams, please contact us via the following email address: <a
				href="mailto:iio.team@iio.team"
				class="btn-link link-secondary">iio.team@iio.team</a
			>
		</p>

		<h2 class="text-2xl sm:divider">If you are a team of students</h2>
		<p>
			Please see the website and contact information for your country
			<a href="{base}/countries" class="btn-link link-secondary">here</a>.
		</p>

		<h2 class="text-2xl sm:divider">If you want to take part unofficially</h2>
		<p>
			You can compete in the open contests mirroring each round, hosted in this website:
			<a href="https://mirror.squadre.olinfo.it/" class="btn-link link-secondary"
				>https://mirror.squadre.olinfo.it/</a
			>
		</p>

		<p class="mt-8">
			For more information, see the
			<a href="{base}/documents/Regulations.pdf" target="_blank" class="btn-link link-secondary">
				regulations</a
			>.
		</p>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
</style>
