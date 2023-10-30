<template>
<Section :show-headline-one="helloSectionData.showHeadlineOne" :headline="helloSectionData.headline" :buttons="helloSectionData.buttons" :isGradient="helloSectionData.isGradient">
    <p class="subtitle">ROI, AI, PPC, SEO, CRM...OMG stop the jargon!<br>We simply get you more business online, full stop.</p>
    <img class="dino" :src="helloSectionData.imgSrc" alt="">
    <div class="hello-block">
      <h2 class="green">Hello!</h2>
      <p>EAZY Digital is a new wave digital agency founded in Budapest. The largest division is Google and Facebook ad management.</p>
    </div>
</Section>
</template>

<script>
import Section from "@/components/Section.vue";
export default {
    name: "HelloSection",
    components: {Section},
    data() {
        return {
          helloSectionData: {
            showHeadlineOne: true,
            isGradient: true,
            headline: "Eazy Digital Agency",
            buttons: [
              {
                cta: "Contact us",
                url: "/contact"
              }
            ],
            imgSrc: require('@/assets/dino-line.svg')
          }
        }
    }
    
}
</script>

<style lang="scss" scoped>

.hello-block {
  max-width: calcRem(500);
  @include breakpoint(xlarge) {
    margin-top: calcRem(120);
  }
}

.subtitle {
  z-index: 100;
  position: relative;
}

.dino {
    width: 100%;
    position: relative;
    margin: 2rem 0;
    z-index: 1;

    @include breakpoint(xlarge) {
        margin: 0;
        width: unset;
        height: 15rem;
        position: absolute;
        right: calcRem(100);
        top: calcRem(200);
    }

}

</style>