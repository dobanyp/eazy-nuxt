<template>
  <div id="page-container">
    <header
      class="fixed inset-x-0 top-0 z-50 h-16 bg-black xl:flex xl:h-20 xl:items-center xl:justify-between xl:px-24"
    >
      <Navbar />
    </header>
    <div id="content-wrapper" class="px-6 pt-16 xl:px-24 xl:pt-20">
      <slot />
    </div>
  </div>
</template>

<script setup></script>
