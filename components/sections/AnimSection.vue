<template>
<section>
    <AnimatedCard :header="animCard1.header" :body="animCard1.body" class="animated-card" animation-type="lineAnim"/>
    <AnimatedCard :header="animCard2.header" :body="animCard2.body" class="animated-card" animation-type="circleAnim"/>
    <AnimatedCard :header="animCard3.header" :body="animCard3.body" class="animated-card" animation-type="triangleAnim"/>
</section>
</template>

<script>
import AnimatedCard from '../cards/AnimCard.vue'
export default {
    name: "AnimSection",
    components: {
        AnimatedCard
    },
    data() {
        return {
            animCard1: {
                    header: "E-commerce most effectively",
                    body: "ROI, AI, PPC, SEO, CRM... OMG! Stop the jargon! We simply get you more business online, full stop."
                },
            animCard2: {
                    header: "Your numbers. Multiplied.",
                    body: "We have an impressive list of numbers: the money we earned for our clients, the increase in their sales, and the seminars we held. But we want to show you your numbers. Multiplied."
                },
            animCard3: {
                    header: "The WOW without the BS",
                    body: "We listen to your needs, speak your language, and understand your customers. We use a combination of AI and HI (Human Intelligence) to turn your quarterly meetings to endless celebrations of increased sales."
                }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    section {
        padding: 4rem 0;
        display: grid;
        @include breakpoint(large) {
            padding: 4rem 0 6rem;
        }
        @include breakpoint(xlarge) {
            padding: 4rem 0 10rem;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
            gap: 1rem;
            .animated-card:nth-child(2) {
                grid-row: span 2;
                align-self: center;
            }
        }
        
    }

</style>