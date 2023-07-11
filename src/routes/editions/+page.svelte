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
		<AccordionItem year="2023" country="Egypt" tasks results>
			<p slot="description">
				The International Final Competition 2023 was held in Port Said (Egypt), on 26-29 of May.
			</p>
		</AccordionItem>
		<AccordionItem year="2022" country="Italy">
			<p slot="description">
				The International Final Competition 2022 was held in Bologna (Italy), on 18-21 of May.
			</p>
		</AccordionItem>
		<AccordionItem year="2021">
			<p slot="description">
				Because of COVID-19 (Coronavirus) pandemic the 2021 Edition was held online.
			</p>
		</AccordionItem>
		<AccordionItem year="2019" country="Russia">
			<p slot="description">
				The International Final Competition 2019 has been held in Moscow (Russia), on 20-24 of May.
			</p>
		</AccordionItem>
		<AccordionItem year="2018" country="Romania">
			<p slot="description">
				The International Final Competition 2018 was held in Piatra Neamt (Romania) on Friday the
				25th of May.
			</p>
		</AccordionItem>
		<AccordionItem year="2017" country="Italy">
			<p slot="description">
				The International Final Competition 2017 was held in Bologna (Italy) on Friday the 19th of
				May.
			</p>
		</AccordionItem>
	</div>
</Content>
