<template>
<Section :showHeadlineOne="clientsSectionData.showHeadlineOne" :headline="clientsSectionData.headline" :isGradient="clientsSectionData.isGradient" :buttons="clientsSectionData.buttons">
    <p class="subtitle"></p>
    <div v-if="isLogosEmpty" class="clients-grid">
        <img v-for="logo in logos" :key="logo.index" :src="logo" alt="" class="client-logo">
    </div>
    <p v-else >I can't find any logos.</p>
</Section>
    
</template>

<script>
import Section from '../Section.vue';
export default {
    name: "ClientsSection",
    components: {
        Section
    },
    data() {
        return {
            clientsSectionData: {
                showHeadlineOne: false,
                headline: "Our clients",
                isGradient: true,
                buttons: [],
            },
            imgSrc: []
        }
    },
    created() {
        const requireContext = require.context('@/assets/logos', false, /\.png$/);
        this.logos = requireContext.keys().map(requireContext);
    },
    computed: {
        isLogosEmpty() {
            return this.logos;
        }
    }
}
</script>

<style lang="scss" scoped>

section {
    padding: 4rem 0;
}

.clients-grid {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.client-logo {
    object-fit: contain;
    width: 6rem;
}

</style>