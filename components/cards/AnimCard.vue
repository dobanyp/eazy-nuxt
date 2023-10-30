<template>
    <div class="animated-card">
        <FigAnim :animation-type="animationType"/>
        <div>
            <h3 class="header">{{ header }}</h3>
            <p>{{ body }}</p>
        </div>
    </div>
</template>

<script>
import FigAnim from "@/components/FigAnim.vue";
export default {
    name: "AnimatedCard",
    components: {FigAnim},
    props: {
        header: {
            type: String,
            required: true,
            default: "Animated card header",
        },
        body: {
            type: String,
            required: true,
            default: "Animated card body",
        },
        animationType: {
            type: String,
            required: true,
            default: "lineAnim",
            validator: (value) => ["lineAnim", "triangleAnim", "circleAnim"].includes(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.animated-card{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding-left: 1.5rem;
    @include breakpoint(medium) {
        gap: 3rem;
    }
    @include breakpoint(xlarge) {
        gap: 2rem;
        padding: 3rem 5rem;
        margin-left: 5rem;

    }
    .header{
        display: inline-block;
        font-weight: 900;
    }
}



</style>