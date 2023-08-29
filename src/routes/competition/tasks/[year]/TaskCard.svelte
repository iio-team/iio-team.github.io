<script>
	// @ts-nocheck
	import { base } from '$app/paths';

	export let task;
</script>

<div class="card card-c bg-base-200 shadow-md border border-base-300">
	<div class="card-body gap-4 p-8">
		<h2 class="card-title text-xl">{task.name} ({task.id})</h2>
		<div class="card-actions items-stretch gap-4 grid grid-cols-1 sm:grid-cols-2">
			<a
				class="text-lg normal-case h-auto px-4 py-2 btn btn-neutral col-span-1 sm:col-span-2"
				href={task.statement}
				target="_blank"
			>
				<img class="w-6" src="{base}/images/pdf.png" alt="pdf" />
				Statement
			</a>
			<a
				class="text-lg normal-case h-auto px-4 py-2 btn btn-primary col-span-1"
				href={task.solutions}
				target="_blank"
			>
				Solutions
			</a>
			<a
				class="text-lg normal-case h-auto px-4 py-2 btn btn-secondary col-span-1"
				href={task.testcases}
				target="_blank"
			>
				Test cases
			</a>
		</div>
	</div>
</div>
