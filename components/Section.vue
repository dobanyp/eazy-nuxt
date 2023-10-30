<template>
<section>
    <h1 v-if="showHeadlineOne" :class="{'gradient-text' : isGradient}" >{{ headline }}</h1>
    <h2 v-else :class="{'gradient-text' : isGradient}" >{{ headline }}</h2>
    <slot></slot>
    <div v-if="hasButtons" class="btn-cont">
        <Button v-for="button in buttons" :key="button.cta" :url="button.url" :ctaText="button.cta"/>
    </div>
</section>
</template>

<script>
import Button from '@/components/atoms/Button.vue'
export default {
    name: "Section",
    components: {
        Button
    },
    props: {
        showHeadlineOne: Boolean,
        headline: String,
        buttons: {
            type: Array,
            default: () => []
        },
        isGradient: {
            type: Boolean,
            default: false
        }
    },
  computed: {
    hasButtons() {
      return this.buttons.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>

.btn-cont {
    display: grid;
    gap: calcRem(20);
    padding: calcRem(20) 0;
    
    @include breakpoint(medium){
        grid-template-columns: repeat(auto-fill, calcRem(200));
    }
}

</style>