<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Date from './Date.svelte';

	throw new Error("505");
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<Hero>Schedule</Hero>

<Content>
	<div class="max-w-lg w-full flex flex-col px-2 text-center gap-4">
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
			<p slot="date">May, 2024</p>
		</Date>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
