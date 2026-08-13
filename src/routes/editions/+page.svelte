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
		<!-- optional: To display a website link, use the `website="url"` property -->
		<AccordionItem year="2026" flag="Romania" website="https://iiot2026.cni.nt.edu.ro/">
			<p slot="title">
				Piatra Neamt, Romania
			</p>
		</AccordionItem>
		 <AccordionItem year="2025" flag="Hungary" website="https://iiot2025.hu/">
			<p slot="title">
				Budapest, Hungary
			</p>
		</AccordionItem>
		<AccordionItem year="2024" flag="Syria">
			<p slot="title">
				Damascus, Syria
			</p>
		</AccordionItem>
		<AccordionItem
			year="2023"
			flag="Egypt"
			website="https://sites.google.com/aldini.istruzioneer.it/iiot/previous-editions/2023-edition"
		>
			<p slot="title">
				Port Said, Egypt
			</p>
		</AccordionItem>
		<AccordionItem
			year="2022"
			flag="Italy"
			website="https://sites.google.com/aldini.istruzioneer.it/iiot/previous-editions/2022-edition"
		>
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
