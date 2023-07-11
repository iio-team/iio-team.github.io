<script>
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Syllabus</title>
</svelte:head>

<Content>
	<div
		class="max-w-3xl w-full px-2 sm:px-12 sm:py-12 sm:mt-12 flex flex-col gap-4 relative rounded-xl sm:shadow-lg sm:bg-base-200 box-border sm:border border-base-300"
	>
		<a
			href="{base}/pdf/Syllabus.pdf"
			download
			class="btn btn-info sm:rounded-b-none w-full sm:w-fit sm:absolute sm:top-0 sm:-mt-12 mb-4"
		>
			<img class="w-6 h-6" src="{base}/images/pdf.png" alt="pdf"/>
			Download PDF
		</a>
		<div class="flex flex-col text-center">
			<h2 class="text-3xl mb-2">Syllabus</h2>
			<h3 class="text-xl">International Informatics Olympiad in Teams</h3>
		</div>

		<div class="divider">Version 2 - May 19th, 2019</div>

		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-medium">Level 1.</h3>
			<ul class="list-disc pl-4 text-lg leading-relaxed">
				<li>
					Primitive data types (e.g. <span>int</span>, <span>char</span>, <span>double</span>,
					<span>bool</span>)
				</li>
				<li>
					One-dimensional arrays (e.g. <span>int[]</span>, <span>char[]</span>,
					<span>double[]</span>, <span>bool[]</span>)
				</li>
				<li>Branching (<span>if</span>/<span>else</span> statement)</li>
				<li>Bounded loops (simple for statement)</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-medium">Level 2.</h3>
			<ul class="list-disc pl-4 text-lg leading-relaxed">
				<li>Multi-dimensional arrays (e.g. <span>int[][]</span>)</li>
				<li>Queue and stack data structures</li>
				<li>Unbounded loops (<span>while</span> statement)</li>
				<li>Functions and exhaustive recursion (e.g. listing permutations)</li>
				<li>Binary search</li>
				<li>Quadratic sorting algorithms (e.g. bubble sort)</li>
				<li>Strings and quadratic substring search</li>
				<li>Euclidean algorithm for the greatest common divisor</li>
				<li>Basic concepts of geometry and arithmetic</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-medium">Level 3.</h3>
			<ul class="list-disc pl-4 text-lg leading-relaxed">
				<li>Standard containers (e.g. <span>vector</span>, <span>set</span>, <span>map</span>)</li>
				<li>Divide et impera</li>
				<li>Dynamic programming on one- or multi-dimensional arrays</li>
				<li>Graph traversals (BFS, DFS)</li>
				<li>Efficient sorting algorithms (<span>sort</span> or <span>qsort</span>)</li>
				<li>Approximate optimization through heuristics techniques</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-medium">Level 4.</h3>
			<ul class="list-disc pl-4 text-lg leading-relaxed">
				<li>Disjoint-set data structure (union-find)</li>
				<li>Data structures for range queries</li>
				<li>Least common ancestor in trees</li>
				<li>Graph algorithms: shortest path, spanning tree</li>
				<li>Dynamic programming on acyclic graphs</li>
				<li>Backtracking (branch and bound algorithms)</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-medium">Level 5.</h3>
			<ul class="list-disc pl-4 text-lg leading-relaxed">
				<li>All other topics not mentioned in previous levels</li>
			</ul>
		</div>
	</div>
</Content>

<style>
	ul li span {
		color: hsl(var(--er));
		font-family: monospace;
	}

	li::marker {
		font-size: 16px;
	}
</style>
