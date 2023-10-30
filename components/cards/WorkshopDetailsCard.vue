<template>

<div class="details-card-wrapper">
    <div class="details-card">
        <img :src="imgSrc.pipa" alt="">
        <p class="workshop-card-hl yes">Neked szól, ha</p>
        <ul>
            <li>van már vállalkozásod, de az online marketing nem az erősséged</li>
            <li>átfogó képet szeretnél kapni a Google és META hirdetések világáról</li>
            <li>a kampánykezelés nem teljesen ismeretlen terep, de bizonytalan vagy az adott hirdetéstípusok és médiaköltés tekintetében</li>
            <li>megerősítenéd a vállalkozásod Facebook, Instagram vagy éppen TikTok jelenlétét</li>
            <li>szeretnél professzionális árképzési stratégiák birtokában lenni</li>
            <li>nem vagy ugyan kezdő, de fejleszteni szeretnéd digitális marketing tudásodat az aktuális trendeknek megfelelően</li>
        </ul>
    </div>
    <div class="details-card">
        <img :src="imgSrc.x" alt="">
        <p class="workshop-card-hl no">Nem neked szól, ha</p>
        <ul>
            <li>semmilyen formában sem szeretnél online értékesíteni</li>
            <li>kizárólag offline hirdetésekben gondolkozol</li>
            <li>szeretnéd, hogy webshopod megmaradjon a jelenleg elért célközönségnél</li>
            <li>nincs időd és kapacitásod rá, hogy tovább fejlődj a digitális trendeknek megfelelően</li>
            <li>nem tudsz megjelenni a helyszínen, és személyesen résztvenni a képzésen</li>
        </ul>
    </div>
</div>
    
</template>

<script>
export default {
    name: "WorkshopDetailsCard",
    data() {
        return {
            imgSrc: {
                pipa: require('@/assets/workshop/pipa.svg'),
                x: require('@/assets/workshop/X.svg')
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

.details-card-wrapper {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
    flex-direction: column;
    @include breakpoint(medium) {
        flex-direction: row;

    }
    

    .details-card {
        background-color: var(--grey);
        padding: 2rem;
        @include breakpoint(medium) {
            max-width: 50%;
        }
    }

    ul {
        //list-style: none;
        padding-left: 1rem;

        li{
            margin-bottom: .5rem;
        }
    }
}

.workshop-card-hl {
    font-size: calcRem(18);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: -0.5px;

    &.no {
        color: var(--purple);
    }

    &.yes {
        color: var(--orange);
    }

}

</style>