<template>
<div class="anim-cont">
    <img class="fig-img" :class="currentAnim.classes" :src="currentAnim.sources.figImgUrl" alt="">
    <img class="fig-base" :src="currentAnim.sources.baseImgUrl" alt="">
</div>

</template>

<script>
export default {
    name: "FigAnim",
    props: {
        animationType: {
            type: String,
            required: true,
            default: "lineAnim",
            validator: (value) => ["lineAnim", "triangleAnim", "circleAnim"].includes(value)
        }
    },
    computed: {
        currentAnim() {
            const animation = {
                lineAnim: {
                    classes: "fade-in slide-right",
                    sources: {
                        figImgUrl: require('@/assets/animation-elements/lines.svg'),
                        baseImgUrl: require('@/assets/animation-elements/rectangles.svg')
                    }
                },
                triangleAnim: {
                    classes: "fade-in slide-up",
                    sources: {
                        figImgUrl: require('@/assets/animation-elements/polygons.svg'),
                        baseImgUrl: require('@/assets/animation-elements/kockak_haromszog.svg')
                    }
                },
                circleAnim: {
                    classes: "fade-in slide-corner",
                    sources: {
                        figImgUrl: require('@/assets/animation-elements/circles.svg'),
                        baseImgUrl: require('@/assets/animation-elements/kockak_kor.svg')
                    }
                }
            }
            return animation[this.animationType] || animation.lineAnim;
        }
    }

}
</script>

<style lang="scss" scoped>

.anim-cont{
    position: relative;
    .fig-img {
        position: absolute; 
        width: 3rem;
        left: -1.5rem;
        @include breakpoint(medium) {
            width: 5rem;
        }
        @include breakpoint(xlarge) {
            width: 8.375rem;
        }
    }
    .fig-base{
        display: none;
        @include breakpoint(xlarge) {
            width: 11.25rem;
            display: block;
        }
    }
    .slide-right {
        @include breakpoint(xlarge) {
            left: -5rem;
        }
    }
    .fade-in {
        animation: ease-in-out 1s 1 forwards;
        &.slide-right {
            animation-name: fadein;
            @include breakpoint(xlarge) {
                animation-name: fadein, slideright;
            }
        }
        &.slide-up {
            animation-name: fadein;
            @include breakpoint(xlarge) {
                animation-name: fadein, slideup;
                top: 0;
                left: 0;
                right: 0;
                bottom: -50%;
                margin: auto;
            }
        }
        &.slide-corner {
            animation-name: fadein;
            @include breakpoint(xlarge){
                animation-name: fadein, slidecorner;
                left: 0;
            }
        }
    }
}
    

// Animations

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideright {
    0% {
        transform: translateX(-50%)
    }
    100% {
        transform: translateX(0%)
    }
}

@keyframes slideup {
    0% {
        transform: translateY(100%);
    }
    100%{
        transform: translateY(30%);
    }
}

@keyframes slidecorner {
    from {
        transform: translate(-170%, 250%)
    }

    to {
        transform: translate(-90%, 120%)
    }
}

</style>