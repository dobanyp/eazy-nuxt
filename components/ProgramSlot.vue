<template>
    <div class="program-slot">
        <div>
            <p>
                <span>{{ programSlot.time }}</span>
                <span>: </span>
                <span class="program-title">{{ programSlot.title }}</span>
            </p>
        </div>
        <div v-if="programSlot.isPresentation">
            <p>
                <span>Előadó: </span>
                <span class="presenter-name">
                    {{ programSlot.presenter.name }}
                </span>
                <span>, </span>
                <span>
                    {{ programSlot.presenter.position }}
                </span>
            </p>
        </div>
        <div v-if="programSlot.isPresentation">
            <p>{{ programSlot.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Program",
    props: {
        programSlot: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style lang="scss" scoped>

.program-slot {
    border-left: .5px solid var(--green);
    padding: 0 1rem;
    margin-bottom: 2rem;
}

.presenter-name, .program-title {
    font-weight: 600;
}
    

</style>