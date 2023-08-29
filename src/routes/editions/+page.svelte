<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import AccordionItem from './AccordionItem.svelte';

	import { galleries } from '$lib/stores';

	export let data;
	$galleries = data.galleries;
</script>

<svelte:head>
	<title>Past editions</title>
</svelte:head>

<Hero>Past editions of IIOT</Hero>

<Content>
	<div class="join join-vertical w-full max-w-2xl shadow-md rounded-box">
		<!-- Use the `year` property -->
		<!-- optional: To display a flag, use the `flag="filename"` property (svg files inside images/flags) -->
		<AccordionItem year="2023" flag="Egypt">
			<p slot="title">
				Port Said, Egypt
			</p>
		</AccordionItem>
		<AccordionItem year="2022" flag="Italy">
			<p slot="title">
				Bologna, Italy
			</p>
		</AccordionItem>
		<AccordionItem year="2021">
			<p slot="title">
				Because of the COVID-19 pandemic the 2021 Edition was held online.
			</p>
		</AccordionItem>
		<AccordionItem year="2019" flag="Russia">
			<p slot="title">
				Moscow, Russia
			</p>
		</AccordionItem>
		<AccordionItem year="2018" flag="Romania">
			<p slot="title">
				Piatra Neamt, Romania
			</p>
		</AccordionItem>
		<AccordionItem year="2017" flag="Italy">
			<p slot="title">
				Bologna, Italy
			</p>
		</AccordionItem>
	</div>
</Content>
