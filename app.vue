<template>
  <AtomsGradientHeadline :data="headlineData" />
</template>

<script setup>
const headlineData = ref({
  isOne: true,
  text: "Eazy Digital Agency",
});
</script>

<style lang="postcss">
html {
  @apply bg-gradient-to-r from-ea-gradient-dark-start via-ea-gradient-dark-end to-ea-gradient-dark-start;
}

body {
  @apply font-montserrat text-white;
}
</style>
