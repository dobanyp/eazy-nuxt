<template>
  <a
    :href="btn.url"
    class="inline-block cursor-pointer border border-solid border-white bg-transparent px-4 py-2.5 text-sm font-extrabold uppercase tracking-widest transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:opacity-70 hover:shadow-btn md:max-w-[200px]"
    >{{ btn.text }}</a
  >
</template>

<script setup>
defineProps({
  btn: Object,
  required: true,
  default(rawProps) {
    return { url: "#", text: "Default" };
  },
});
</script>
