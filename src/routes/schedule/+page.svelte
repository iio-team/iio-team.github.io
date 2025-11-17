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
		<p>The International Final of IIOT 2026 will take place in Piatra Neamț, Romania, from 23rd to 28th May 2026.</p>
		<p>Below is the schedule for the Italian, Romanian and Hungarian qualifiers. Each regular member can
		have its <span class="font-bold">own schedule</span> for their national competition.</p>
	</Description>
	<div class="max-w-xl w-full flex flex-col text-center gap-4">
		<Date>
			<h2 slot="title">1st qualifying round</h2>
			<p slot="date">November 10, 2025</p>
		</Date>
		<Date>
			<h2 slot="title">2nd qualifying round</h2>
			<p slot="date">December 9, 2025</p>
		</Date>
		<Date>
			<h2 slot="title">3rd qualifying round</h2>
			<p slot="date">January 14, 2026</p>
		</Date>
		<Date>
			<h2 slot="title">4th qualifying round</h2>
			<p slot="date">February 12, 2026</p>
		</Date>
		<Date>
			<h2 slot="title">National finals</h2>
			<p slot="date">March, 2026</p>
		</Date>
		<Date>
			<h2 slot="title">International finals</h2>
			<p slot="date">May 23-28, 2026</p>
		</Date>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
