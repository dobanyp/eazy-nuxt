<template>
<Section :show-headline-one="trickSection.showHeadlineOne" :headline="trickSection.headline" :buttons="trickSection.buttons" :isGradient="trickSection.isGradient">
    <div class="particle-container">
        <div class="particle-text">
            <p>We have been breathing ecommerce marketing each day of the last 10 years (except some well-deserved holidays.) We give you the shortcut to it all and make you a superstar without having to go through the hard stuff. </p>
            <p>Sounds too good to be true? We believe in proofs: if you don’t like what we teach for whatever reason, you owe us nothing. Is it a deal? </p>
        </div>
        <Particles/>
    </div>
</Section>
</template>

<script>
import Particles from '../Particles.vue';
import Section from '../Section.vue';
export default {
    name: "TrickSection",
    components: {
        Section, Particles
    }, 
    data() {
        return {
            trickSection: {
                showHeadlineOne: false,
                headline: "We share with you all our tricks",
                buttons: [
                    {
                        cta: "Contact us",
                        url: "/contact"
                    }
                ],
                isGradient: true
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
.particle-container {
    display: flex;
    @include breakpoint(large){
        flex-direction: row;
    }
}

.particle-text{
    @include breakpoint(large) {
        max-width: 50%;
        padding-right: 5rem;
    }
}  

</style>