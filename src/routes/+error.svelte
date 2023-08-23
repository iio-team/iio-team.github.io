<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Content from '$lib/components/page/Content.svelte';
	import { error } from '@sveltejs/kit';
	import { binding_callbacks } from 'svelte/internal';

	var today = new Date();
	var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
</script>

<div class="w-full grow max-w-xl flex flex-col gap-4 p-4 pt-12">
	<h2 class="card-title self-center text-7xl md:text-8xl font-bold">
		{$page.status}
	</h2>
	<div class="divider m-0" />
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-base-content" viewBox="0 0 512 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
				/></svg
			>
		</div>
		<div class="chat-header">
			<time class="text-sm opacity-75 ml-1">{time}</time>
		</div>
		<div class="chat-bubble chat-bubble-error">
			{#if $page.status == 404}
				This is not the page you are looking for.
			{:else if $page.status == 500}
				Internal server error. Try refreshing the page or go back.
			{:else}
				{$page.error.message}
			{/if}
		</div>
	</div>
	<div class="card-actions flex-wrap gap-4 grow items-center justify-center py-8">
		<button onclick="history.back()" class="btn btn-secondary rounded-full"> Go back </button>
		<a href="{base}/" class="btn btn-primary rounded-full"> Return home </a>
	</div>
</div>
