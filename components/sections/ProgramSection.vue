<template>
    <section>
        <h2>Program</h2>
        <div>
            <ProgramSlot v-for="program in timetable" :key="program.id" :programSlot="program"/>
        </div>
    </section>
</template>

<script>
import ProgramSlot from '@/components/ProgramSlot.vue';
export default {
    name: "ProgramSection",
    components: {
        ProgramSlot
    },
    props: {
        timetable: {
            type: Array,
            required: true
        }

    }
}
</script>

<style lang="scss" scoped>

h2 {
        max-width: unset;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        @include breakpoint(medium){
            font-size: calc(1.5rem + 0.3vw);
            line-height: unset;
        }
    }

</style>