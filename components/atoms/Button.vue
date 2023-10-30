<template>
    <a :href="url" class="cta">{{ctaText}}</a>
</template>

<script>
export default {
    name: "Button",
    props: {
        url: String,
        ctaText: String
    }
}
</script>

<style lang="scss" scoped>

.cta {
    display: inline-block;
    width: 100%;
    background: transparent;
    border: solid calcRem(1) var(--white);
    color: var(--white);
    padding: calcRem(10) calcRem(15);
    cursor: pointer;
    transition: 0.1s ease-in-out all;
    

    @include breakpoint(medium) {
        max-width: calcRem(200);
    }
}

.cta:hover {
    box-shadow: rgb(20, 20, 20) calcRem(-5) calcRem(-5) 0 0, var(--green) calcRem(-5) calcRem(-5) 0 calcRem(1);
    transform: translate(calcRem(2), calcRem(2));
    transition: 0.2s ease-out all;
    opacity: 0.7;
}
</style>