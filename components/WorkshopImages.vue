<template>
<div class="img-wrapper">
    <img v-for="img in workshopImages" :src="img.src" :key="img.id" alt="">
</div>
    
</template>

<script>
export default {
    name: 'WorkshopImages',
    data() {
        return {
            workshopImages: [
                {
                    id: 1,
                    src: require('@/assets/workshop/workshop_3.jpg')
                },
                {
                    id: 2,
                    src: require('@/assets/workshop/workshop_5.jpg')
                },
                {
                    id: 3,
                    src: require('@/assets/workshop/workshop_4.jpg')
                }
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>

.img-wrapper {
    display: grid;
    margin-bottom: 2rem;
    gap: 1rem;

    @include breakpoint(large) {
        grid-template-columns: repeat(3, 1fr);
    }

    img {
        max-width: 100%;
    }
}

</style>