<template>
    <h1 class="block w-max mx-auto my-6 text-3xl text-ea-green">Hello {{ currentMsg }}! ✨</h1>
    <button @click="toggleMsg" class="rounded-xl bg-ea-green transition-all ease-in-out duration-300 hover:bg-sky-800 hover:scale-105 text-white px-4 py-2 mx-auto block shadow-lg">{{btnText}}</button>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    btnText: String
})

const msg = ref({
    first: "Röfik",
    second: "Anya",
})

const isFirst = ref(true)

function toggleMsg() {
    isFirst.value = !isFirst.value
}

const currentMsg = computed(()=>{
    return isFirst.value ? msg.value.first : msg.value.second
})

</script>