<script>
    import Calendar from "./Calendar.svelte";
</script>

<div class="card card-compact flex flex-col bg-base-200 shadow-md">
    <div class="card-body gap-2 sm:gap-0">
        <div class="text-xl font-bold sm:divider mt-0 sm:mt-2 h-auto">
            <slot name="title"></slot>
        </div>
        <div class="flex justify-center gap-3">
            <Calendar />
            <div class="text-lg grow-0">
                <slot name="date"></slot>
            </div>
        </div>
    </div>
</div>