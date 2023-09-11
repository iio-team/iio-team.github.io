<script>
	// @ts-nocheck

	export let score;
</script>

<span
	class="indicator-item indicator-top indicator-center badge
            {score == 100 ? 'badge-success' : score == 0 ? 'badge-error' : 'badge-primary'}"
>
	{score}
</span>
