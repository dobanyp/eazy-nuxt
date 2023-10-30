<template>
<div>
    <h3>{{ card.title }}</h3>
    <div class="solution-divider"></div>
    <p v-for="solution in card.solutions" :key="solution.id" class="subtitle">{{ solution.name }}</p>
</div>
</template>

<script>
export default {
    name: "SolutionCard",
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    created() {
        this.card.solutions = this.card.solutions.map((item, index)=>{
            return {
                id: index,
                name: item
            }
        })
    }
}
</script>

<style lang="scss" scoped>

.solution-divider {
    width: 100%;
    height: calcRem(5);
    background: linear-gradient(90deg, var(--green), transparent);
}

h3 {
    margin-bottom: .5rem;
    text-transform: uppercase;
}

</style>