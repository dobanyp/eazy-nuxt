<template>
    <div id="particle"></div>
</template>

<script>
import { initializeParticle } from '@/particle.js';
export default {
    name: "Particles",
    mounted() {
        initializeParticle();
    }
}
</script>

<style lang="scss" scoped>
#particle {
    display: none;
    @include breakpoint(large) {
        display: block;
        margin: 0 auto;
    }
}
</style>