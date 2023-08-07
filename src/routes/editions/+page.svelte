<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import AccordionItem from './AccordionItem.svelte';
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<Hero>Past editions of IIOT, tasks and results</Hero>

<Content>
	<div class="join join-vertical w-full max-w-2xl shadow-lg rounded-2xl">
		<!-- Use the `year` property -->
		<!-- To display a flag, use the flag="filename" (files inside images/flags) property -->
		<AccordionItem year="2023" flag="Egypt">
			<p slot="location">
				Port Said, Egypt
			</p>
		</AccordionItem>
		<AccordionItem year="2022" flag="Italy">
			<p slot="location">
				Bologna, Italy
			</p>
		</AccordionItem>
		<AccordionItem year="2021">
			<p slot="location">
				Because of the COVID-19 pandemic the 2021 Edition was held online.
			</p>
		</AccordionItem>
		<AccordionItem year="2019" flag="Russia">
			<p slot="location">
				Moscow, Russia
			</p>
		</AccordionItem>
		<AccordionItem year="2018" flag="Romania">
			<p slot="location">
				Piatra Neamt, Romania
			</p>
		</AccordionItem>
		<AccordionItem year="2017" flag="Italy">
			<p slot="location">
				Bologna, Italy
			</p>
		</AccordionItem>
	</div>
</Content>
