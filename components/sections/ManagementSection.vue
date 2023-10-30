<template>
<section>
    <div class="cont">
        <img class="rectangle" :src="imgSrc" alt="">
        <div class="text">
            <h2 class="hl gradient-text"><span>Be digital. </span><span>Sell more.</span></h2>
            <p class="subtitle">Work together for our successful future.</p>
        </div>
    </div>
    <div class="management-card-cont">
        <ManagementCard v-for="manager in managers" :key="manager.id" :manager="manager" />
    </div>
</section>  
</template>

<script>
import ManagementCard from '../cards/ManagementCard.vue';
export default {
    name: "ManagementSection",
    components: {
        ManagementCard
    },
    data() {
        return{
            imgSrc: require('@/assets/animation-elements/rectangles.svg'),
            managers: [
                {
                    id: 1,
                    name: "Kocsis Márk",
                    imgSrc: require("@/assets/managers/Kocsis_Mark.png"),
                    position: "CEO",
                    quote: "After ten years in online marketing industry I can say that it’s a passion for me. My beloved working areas are dynamic remarketing and the financial modeling of advertising activities.",
                    certification: "Márk is a Google certified trainer.",
                    button: {
                        url: "https://www.linkedin.com/in/kocsismark/",
                        ctaText: "Follow on linkedin!"
                    }
                },
                {
                    id: 2,
                    name: "Molnár Tamás",
                    imgSrc: require("@/assets/managers/Molnar_Tamas.png"),
                    position: "Head of Agency Services",
                    quote: "I am a passionated digital marketer with a strong ambition to prove the sceptics that online marketing is not as dangerous and complicated as it seems.",
                    certification: "Tamás is a Google and Facebook certified trainer.",
                    button: {
                        url: "https://www.linkedin.com/in/molnart/",
                        ctaText: "Follow on linkedin!"
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cont{
    margin-bottom: 2rem;
    @include breakpoint(large) {
        display: flex;
        margin-bottom: 0;
    }
}

.text {
    @include breakpoint(large) {
        padding-left: 2rem;
    }
}

.rectangle {
    display: none;
    @include breakpoint(large) {
        display: block;
        width: 13rem;
        height: 100%;
    }
}

.subtitle {
    @include breakpoint(large) {
        margin-top: 0;
    }
}

.hl {
    @include breakpoint(large) {
        max-width: unset;
        vertical-align: top;
    }
    span {
        @include breakpoint(large) {
            line-height: 3.6rem;
            display: block;
        }
    }
    span:nth-child(1) {
        @include breakpoint(large) {
            margin-bottom: 1.6rem;
        }
    }
    span:nth-child(2) {
        @include breakpoint(large) {
            margin-bottom: 0.8rem;
        }
    }
}
.management-card-cont {
    @include breakpoint(large) {
            display: flex;
            flex-direction: row;
            margin-top: 10vh;
        }
}

</style>