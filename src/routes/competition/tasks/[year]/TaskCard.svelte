<script>
	// @ts-nocheck
	import { base } from '$app/paths';

	export let task;
</script>

<div class="card card-c bg-base-200 shadow-md border border-base-300">
	<div class="card-body gap-4">
		<h2 class="card-title text-xl">{task.name} ({task.id})</h2>
		<div class="card-actions items-stretch gap-4 grid grid-cols-1 sm:grid-cols-2">
			<a
				class="text-lg normal-case h-auto px-4 py-2 btn btn-neutral col-span-1 sm:col-span-2"
				href={task.statement}
				target="_blank"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-neutral-content" viewBox="0 0 512 512">
					<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
					/>
				</svg>
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
