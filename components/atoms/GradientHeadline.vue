<template>
  <div>
    <h1
      v-if="data.isOne"
      class="text-dynamic inline-block bg-gradient-to-r from-ea-gradient-light-start via-ea-gradient-light-end to-ea-gradient-light-start bg-clip-text font-bold uppercase tracking-[-0.5px] text-transparent"
    >
      {{ data.text }}
    </h1>
    <h2
      v-else
      class="text-dynamic inline-block bg-gradient-to-r from-ea-gradient-light-start via-ea-gradient-light-end to-ea-gradient-light-start bg-clip-text font-bold uppercase tracking-[-0.5px] text-transparent"
    >
      {{ headlineData.text }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default(rawProps) {
      return {
        isOne: false,
        text: "This is a default text",
      };
    },
  },
});
</script>
