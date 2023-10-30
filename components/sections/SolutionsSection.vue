<template>
<Section 
    :show-headline-one="solutionsSectionData.showHeadlineOne"
    :headline="solutionsSectionData.headline" 
    :buttons="solutionsSectionData.buttons" 
    :isGradient="solutionsSectionData.isGradient">
    <div v-if="isCardsEmpty" class="solution-cards-cont">
        <SolutionCard v-for="card in solutionCards" :key="card.id" :card="card"/>
    </div>
    <div v-else>
        There are no solutions!
    </div>
</Section>
    
</template>

<script>
import SolutionCard from '../cards/SolutionCard.vue'
import Section from '../Section.vue'
export default {
    name: "SolutionsSection",
    components: {Section, SolutionCard},
    data() {
        return {
            solutionsSectionData: {
                shoHeadlineOne: false,
                headline: "Solutions",
                buttons: [],
                isGradient: true
            },
            solutionCards: [
                {
                    id: 1,
                    title: "Media",
                    solutions: [
                        "Indoor, outdoor",
                        "Print",
                        "TV, Radio",
                        "Online",
                        "Media Planning",
                        "Social Media Management",
                        "Full Campaign Management and Optimization"
                    ]
                },
                {
                    id: 2,
                    title: "Creative",
                    solutions: [
                        "Online and print graphic design",
                        "Photo, video",
                        "Animation",
                        "Merchandising",
                        "Content creation (TikTok, Reels)",
                        "Copywriting"
                    ]
                },
                {
                    id: 3,
                    title: "PR Communication",
                    solutions: [
                        "Press Communication",
                        "Social Media Communication",
                        "Native Content, Branded Content",
                        "Branding"
                    ]
                },
                {
                    id: 4,
                    title: "Ecommerce",
                    solutions: [
                        "CRM and Marketing Automation",
                        "Email marketing, automation",
                        "Lead generation, pop-up management",
                        "Search Engine Optimization",
                        "Feed management"
                    ]
                },
                {
                    id: 5,
                    title: "Data Science",
                    solutions: [
                        "Analytics and Tag Manager Configuration",
                        "Target Group Segmentation",
                        "Machine Learning",
                        "Big Data"
                    ]
                },
                {
                    id: 6,
                    title: "Development",
                    solutions: [
                        "Landing Page and Microsite Development",
                        "Development of Dynamic Creatives",
                        "UX and Front-End",
                        "HTML Email templates"
                    ]
                }
            ]
        }
    },
    computed: {
        isCardsEmpty() {
            return this.solutionCards.length != 0;
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    padding: 4rem 0;
}
    .solution-cards-cont {
        margin-top: 2rem;
        display: grid;
        grid-gap: 2rem;
        @include breakpoint(medium) {
            grid-template-columns: 1fr 1fr;
            gap: 7rem;
            margin-top: 2rem;
        }
    }
</style>

