<template>
  <div id="page-container">
    <header
      class="fixed inset-x-0 top-0 z-50 bg-black xl:flex xl:h-20 xl:items-center xl:justify-between xl:pl-32 xl:pr-24"
    >
      <Navbar />
    </header>
    <Sidebar />
    <main class="px-4 pt-16 xl:pl-32 xl:pr-24 xl:pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
