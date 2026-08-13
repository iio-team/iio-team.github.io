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
		<p>The International Final of IIOT 2027 will take place in Varna, Bulgaria, from 28th May to 1st June 2027.</p>
		<p>Below is the schedule for the Italian, Romanian and Hungarian qualifiers. Each regular member can
		have its <span class="font-bold">own schedule</span> for their national competition.</p>
	</Description>
	<div class="max-w-xl w-full flex flex-col text-center gap-4">
		<Date>
			<h2 slot="title">1st qualifying round</h2>
			<p slot="date">November 16, 2026</p>
		</Date>
		<Date>
			<h2 slot="title">2nd qualifying round</h2>
			<p slot="date">December 15, 2026</p>
		</Date>
		<Date>
			<h2 slot="title">3rd qualifying round</h2>
			<p slot="date">January 13, 2027</p>
		</Date>
		<Date>
			<h2 slot="title">4th qualifying round</h2>
			<p slot="date">February 11, 2027</p>
		</Date>
		<Date>
			<h2 slot="title">National finals</h2>
			<p slot="date">March, 2027</p>
		</Date>
		<Date>
			<h2 slot="title">International finals</h2>
			<p slot="date">May 28 - June 1, 2027</p>
		</Date>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
