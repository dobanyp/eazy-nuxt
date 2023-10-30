<template>

<Section :showHeadlineData="contactSectionData.showHeadlineOne" :headline="contactSectionData.headline" :isGradient="contactSectionData.isGradient" :buttons="contactSectionData.buttons">
    <p class="subtitle">Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.</p>
    <ContactForm/>
</Section>
    
</template>

<script>
import Section from '@/components/Section.vue';
import ContactForm from '@/components/forms/ContactForm.vue';
export default {
    name: 'ContactSection',
    components: {
        Section,
        ContactForm
    },
    data() {
        return {
            contactSectionData: {
                showHeadlineOne: false,
                headline: "Contact us",
                isGradient: true,
                buttons: [],
            }
        }
    } 
}
</script>

<style lang="scss" scoped>
section {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    max-width: 50rem;
    padding: 0 2rem;
    margin: 0 auto;
}
</style>