<script setup>

const props = defineProps({
    fig: String
})

const figureMappings = {
    lines: {
        base: {
            src: "/img/service_figure_elements/lines_base.svg"
        },
        decor: {
            src: "/img/service_figure_elements/lines_decor.svg"
        }
    },
    circles: {
        base: {
            src: "/img/service_figure_elements/circles_base.svg"
        },
        decor: {
            src: "/img/service_figure_elements/circles_decor.svg"
        }
    },
    triangles: {
        base: {
            src: "/img/service_figure_elements/triangles_base.svg"
        },
        decor: {
            src: "/img/service_figure_elements/triangles_decor.svg"
        }
    },
    default: {
        base: {
            src: "/img/service_figure_elements/lines_base.svg"
        },
        decor: {
            src: "/img/service_figure_elements/lines_decor.svg"
        }
    }
}

const figureType = computed(() => {
    const computedFigures = figureMappings[props.fig] || figureMappings.default;
    return computedFigures;
})

</script>

<template>
    <div class="relative">
        <img class="absolute w-12 -left-6 md:w-20 xl:w-32 animate-fadein" :src="figureType.decor.src" alt="">
        <img class="hidden xl:w-40 xl:block" :src="figureType.base.src" alt="">
    </div>
</template>