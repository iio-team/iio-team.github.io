<script>
	import { base } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
	import Content from '$lib/components/page/Content.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="w-full flex justify-center bg-base-200 border-b-[1.5px] border-base-300 shadow-sm z-10 py-6 lg:py-12 px-6">
	<div class="max-w-3xl w-full">
		<Logo />
	</div>
</div>

<Content>
	<div class="w-full max-w-4xl text-lg flex flex-col px-2">
		<h2 class="text-2xl sm:divider">About IIOT</h2>
		<div class="flex flex-col gap-2 text-justify">
			<p>
				The IIOT is a young project which aims to be just like the
				<a href="https://ioinformatics.org/" class="btn-link link-secondary">International Olympiad in Informatics</a>,
				but the problems are meant to be solved in a team.
			</p>
			<p>
				The participants are teams of 4 high school students who represent a school (like in
				<a href="https://icpc.global/" class="btn-link link-secondary">ICPC</a>).
			</p>
		</div>
		<h2 class="text-2xl sm:divider">Why in teams?</h2>
		<ul class="flex flex-col gap-2">
			<li>Teamwork is a requirement in the <span class="font-bold">labor market</span>.</li>
			<li>Encourages mutual <span class="font-bold">support and learning</span>.</li>
			<li>
				Promotes <span class="font-bold">creativity</span> which comes from the comparison of different
				ideas.
			</li>
			<li>
				Students will be more willing to participate in similar competitions
				<span class="font-bold">(IOI, ICPC)</span>.
			</li>
		</ul>
		<h2 class="text-2xl sm:divider">How is the competition structured?</h2>
		<ul class="flex flex-col gap-2 ">
			<li>4 <span class="font-bold">online</span> contests (suggested)</li>
			<li>1 <span class="font-bold">onsite</span> national final contest</li>
			<li>1 <span class="font-bold">onsite</span> international contest</li>
			<li><span class="font-bold">English</span> problem statements for everybody</li>
			<li>
				<span class="font-bold">2 PCs</span> per team to solve <span class="font-bold" /> in
				<span class="font-bold">3 hours</span> (4 at the international contest)
			</li>
		</ul>
		<h2 class="text-2xl sm:divider">How does it work?</h2>
		<ul class="flex flex-col gap-2 text-justify ">
			<li>
				A <span class="font-bold">leader school or organization</span> for each country coordinates the
				competition: please contact us to become one!
			</li>
			<li><span class="font-bold">No costs</span> are required to join the project.</li>
			<li>
				The international scientific committee provides <span class="font-bold">tasks</span> and
				<span class="font-bold">technical support</span>.
			</li>
		</ul>

		<div class="sm:divider sm:mt-16">
			<a
			href="{base}/participate"
			class="btn btn-block sm:btn-wide btn-lg btn-primary mt-10 sm:mt-0 self-center"
		>
			Participate!
		</a>
		</div>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
	h2:first-of-type {
		padding-top: 0 !important;
	}
</style>
