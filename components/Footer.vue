<template>
    <footer class="home">
        <div class="footer-grid">
            <img class="footer-logo" :src="footerLogo" alt="">
            <p class="footer-text">Our products are designed for small to large size companies willing to optimize
                their performance.</p>
            <ul class="footer-links footnote">
                <li><a target="_blank" href="https://ikomm.hu/">Blog & News</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1bNTG3YN7y_wjQH1mNvP1w412C1-_xmX2/view">Privacy Policy</a></li>
                <li><a target="_blank" href="https://drive.google.com/file/d/1isxT5IP0I7JRqxyAABET18kCfkstGs9W/view">General Terms and Conditions</a></li>
            </ul>
            <div id="contact" class="footer-card">
                <img :src="imgSrc" alt="rectangles">
                <div class="footer-card-text">
                    <p class="footer-card-title gradient-text">Let's talk</p>
                    <ul>
                        <li><a href="tel:06202105527">+36202105527</a></li>
                        <li><a href="mailto:hello@eazy.digital">hello@eazy.digital</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-copyright footnote">Copyright © EAZY Digital Kft</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            imgSrc: require("@/assets/animation-elements/rectangles.svg"),
            footerLogo: require("@/assets/logo-green.svg")
        }
    }
}
</script>

<style lang="scss" scoped>

.footer-grid {
    width: 100%;
    display: grid;
    grid-template-areas:
        "logo"
        "text"
        "card2"
        "links"
        "copy";

    gap: 2rem;

    @include breakpoint(large) {
        grid-template-columns: 1fr 2fr 2fr;
        grid-template-areas:
            "logo logo logo "
            "text links card2"
            "copy copy copy";
        gap: 3rem;
    }
}

.footer-logo {
    grid-area: logo;
}

.footer-text {
    grid-area: text;
}

.footer-menu {
    grid-area: menu;
}

.footer-card {
    grid-area: card2;
}

.footer-copyright {
    grid-area: copy;
}

.footer-links {
    grid-area: links;
}



footer {
    background: black;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: calcRem(24);
  @include breakpoint(xlarge) {
    padding-left: calc(calcRem(74) + 2rem);
  }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    ul,
    li {
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
    }

    img {
        max-width: 8rem;
    }

    .footer-card {
        display: flex;

        .footer-card-text {
            margin-left: 1rem;
        }


        .footer-card-title {
            margin: 0;
        }
    }
}

</style>