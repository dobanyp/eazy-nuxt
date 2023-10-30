<template>
<div>
    <div class="card">
        <div class="img-container">
            <img :src="manager.imgSrc" alt="">
        </div>
        <div class="text-container">
            <p class="name">{{ manager.name }}</p>
            <p class="position">{{ manager.position }}</p>
            <blockquote>"{{ manager.quote }}"</blockquote>
            <p>{{ manager.certification }}</p>
            <Button :url="manager.button.url" :ctaText="manager.button.ctaText"/>
        </div>
    </div>
</div>
</template>

<script>
import Button from '../atoms/Button.vue'
export default {
    name: "ManagementCard",
    components: {
        Button
    },
    props: {
        manager: {
            type: Object,
            required: true
        }
    }
    
}
</script>

<style lang="scss" scoped>

.card {
    display: flex;
    flex-direction: column;
    @include breakpoint(medium) {
        flex-direction: row;
    }

        .img-container {
            @include breakpoint(medium) {
                flex-basis: 13rem;
                flex-shrink: 0;
                align-items: flex-end;
            }

            img {
                display: block;
                margin: 0 auto;
                border-radius: 100%;
                height: calcRem(120);
                @include breakpoint(large) {
                    margin: 0 0 0 auto;
                    height: calcRem(86);
                }
            }
        }

        .text-container {
            
            @include breakpoint(medium) {
                padding-left: 2rem;
                max-width: 50%;
            }

            .name,
            .position {
                font-weight: 600;
            }

            .cta{
                margin: 2rem 0;
                display: block;
            }
        }
    }

</style>