<template>
    <nav id="mainnav">
        <object :data="logoPath" type="image/svg+xml"></object>
        <button @click="openNav" id="nav-btn" type="button" :aria-expanded="isNavOpen" aria-label="Menu" aria-controls="mainnav">
            <svg width="23" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke="#8AF270" stroke-width="2" d="M0 1h23M0 15h23M0 8h23" />
            </svg>
        </button>
        <ul role="list">
            <li v-for="route in publicRoutes" :key="route.path" class="nav-link">
                <router-link :to="{name:route.name}" @click="openNav" >{{ route.name }}</router-link>
            </li>
            <li class="nav-link">
                <a href="https://ikomm.hu" target=_blank>Magazine</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            logoPath: require('@/assets/logo-green.svg'),
            isNavOpen: false
        }
    },
    methods: {
        openNav() {
            this.isNavOpen = !this.isNavOpen;
        }
    },
    computed:{
        publicRoutes() {
            return this.$router.options.routes.filter((route)=>route.public);
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    background: black;
    position: relative;
    @include breakpoint(xlarge) {
        background: transparent;
        padding-block-start: 0;
        padding: 0;
        position: static;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    button {
        background-color: black;
        cursor: pointer;
        border: none;
        padding: 1rem;
        margin: 0;
        position: absolute;
        top: 0;
        right: 0;
        @include breakpoint(xlarge) {
            display: none;
        }
    }
    object {
        display: inline-block;
        width: 8rem;
        padding: 1rem;
        @include breakpoint(xlarge) {
            padding: 0;
            margin-block: 0;
            margin-inline: 1rem;
        }
    }
    ul {
        background: linear-gradient(90deg, var(--dark-gradient-first), var(--dark-gradient-second), var(--dark-gradient-third), var(--dark-gradient-second), var(--dark-gradient-first));
        list-style: none;
        margin: 0;
        padding-inline-start: 1rem;
        padding-block-start: 1rem;
        height: 100vh;
        width: 100vw;
        @include breakpoint(xlarge) {
            display: flex;
            background: black;
            justify-content: flex-end;
            flex-direction: row;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;
            padding: 0;
        }
    }
    .nav-link {
        a {
            font-weight: 700;
            font-size: calcRem(24);
            letter-spacing: calcRem(-0.5);
            color: var(--white);
            text-decoration: none;
            text-transform: uppercase;
            text-decoration: none;
            display: inline-block;
            margin-block-end: 1rem;
            text-decoration: none;
    
            &.router-link-exact-active {
                text-decoration: none;
            color: var(--light-green);
            }
    
            @include breakpoint(xlarge) {
                font-family: var(--font-barlow);
                font-size: calcRem(14);
                font-weight: 800;
                letter-spacing: calcRem(1.5);
                margin-block-end: 0;
                margin-inline-start: 2rem;
            }
        }
    }

    [aria-expanded="false"]+ul {
    display: none;

    @include breakpoint(xlarge) {
        display: flex;
    }
}
}
</style>