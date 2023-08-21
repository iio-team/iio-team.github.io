<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Calendar from './Calendar.svelte';
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<Hero>Schedule</Hero>

<Content>
	<div class="card max-w-xl w-full bg-base-200 shadow-xl">
		<div class="card-body text-center">
			<h2 class="text-xl divider">1st qualifying round</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">13 November 2023</p>
			</div>
			<h2 class="text-xl divider">2nd qualifying round</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">12 December 2023</p>
			</div>
			<h2 class="text-xl divider">3rd qualifying round</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">17 January 2024</p>
			</div>
			<h2 class="text-xl divider">4th qualifying round</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">8 February 2024</p>
			</div>
			<h2 class="text-xl divider">National finals</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">March, 2024</p>
			</div>
			<h2 class="text-xl divider">International finals</h2>
			<div class="flex justify-center gap-4">
				<Calendar />
				<p class="text-lg grow-0">May, 2024</p>
			</div>
		</div>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
