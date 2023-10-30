<template>
<header>
    <slot></slot>
</header>
</template>

<script>
export default {
    name: 'Header' 
}
</script>

<style lang="scss" scoped>

header {
    background: black;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2000;
    height: calcRem(60);

    @include breakpoint(xlarge) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline-start: calcRem(100);
        padding-inline-end: calcRem(100);
        height: calcRem(80);
    }
}

</style>