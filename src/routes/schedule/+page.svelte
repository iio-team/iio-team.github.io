<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Date from './Date.svelte';
	import Description from '$lib/components/page/Description.svelte';
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<Hero>Schedule</Hero>

<Content>
	<Description>
		<p>The International final of IIOT 2024 will be held as a hybrid (onsite and online) contest from May 10th to 13th in Damascus, Syria. Detailed information and the schedule of those days can be found on the <a class="btn-link link-secondary" href="https://www.iiot2024.sy">website</a> of the final.</p>
		<p>Below is the schedule for the Italian, Romanian and Hungarian qualifiers. Each regular member can
		have its <span class="font-bold">own schedule</span> for their national competition.</p>
	</Description>
	<div class="max-w-xl w-full flex flex-col text-center gap-4">
		<Date>
			<h2 slot="title">1st qualifying round</h2>
			<p slot="date">13 November 2023</p>
		</Date>
		<Date>
			<h2 slot="title">2nd qualifying round</h2>
			<p slot="date">12 December 2023</p>
		</Date>
		<Date>
			<h2 slot="title">3rd qualifying round</h2>
			<p slot="date">17 January 2024</p>
		</Date>
		<Date>
			<h2 slot="title">4th qualifying round</h2>
			<p slot="date">8 February 2024</p>
		</Date>
		<Date>
			<h2 slot="title">National finals</h2>
			<p slot="date">March, 2024</p>
		</Date>
		<Date>
			<h2 slot="title">International finals</h2>
			<p slot="date">10-13 May, 2024</p>
		</Date>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
