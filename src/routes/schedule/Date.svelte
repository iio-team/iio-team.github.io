<script>
    import Calendar from "./Calendar.svelte";
</script>

<div class="flex flex-col gap-2">
    <div class="text-xl divider">
        <slot name="title"></slot>
    </div>
    <div class="flex justify-center gap-4">
        <Calendar />
        <div class="text-lg grow-0">
            <slot name="date"></slot>
        </div>
    </div>
</div>