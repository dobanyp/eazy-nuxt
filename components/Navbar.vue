<template>
  <nav class="relative xl:static xl:flex xl:w-full xl:items-center xl:justify-between">
    <NuxtLink to="/">
      <img class="inline-block w-[128px] min-w-[128px] p-4 xl:p-0" src="/img/logo-green.svg" alt="" />
    </NuxtLink>
    <button @click="openNav" type="button" :aria-expanded="isNavOpen" aria-label="Menu" aria-controls="mainnav"
      class="absolute right-0 top-0 cursor-pointer p-4 xl:hidden">
      <svg width="23" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke="#8AF270" stroke-width="2" d="M0 1h23M0 15h23M0 8h23" />
      </svg>
    </button>
    <ul role="list"
      class="flex h-screen w-screen flex-col bg-gradient-to-r from-ea-gradient-dark-start via-ea-gradient-dark-end to-ea-gradient-dark-start pl-4 pt-4 xl:h-full xl:w-full xl:flex-row xl:flex-wrap xl:justify-end xl:from-black xl:via-black xl:to-black xl:pl-0 xl:pt-0">
      <li class="nav-link">
        <NuxtLink to="/contact" @click="openNav">Contact</NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="/workshop" @click="openNav">Workshop</NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="https://ikomm.hu/" @click="openNav">Ikomm</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const isNavOpen = ref(false);
const openNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<style lang="postcss">
.router-link-exact-active {
  @apply text-ea-green-light;
}
</style>
