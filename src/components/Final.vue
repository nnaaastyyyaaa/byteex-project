<template>
  <div class="final-container">
    <h1 class="final-container__title">Find something you love.</h1>
    <p class="final-container__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
      consequat.
    </p>
    <p class="final-container__text-mobile">
      Click below to browse our collection!
    </p>

    <Gallery :urls="urls" class="final-container__gallery" />
    <ButtonCustomize svgSrc="arrow" class="final-container__button" />
    <div class="final-container__payments payments">
      <svg width="11" height="11">
        <use :href="`${base}icons/icons.svg#icon-clock`" />
      </svg>
      <p class="payments__text">Ships in 1-2 Days</p>
      <img :src="`${base}images/icons.png`" alt="payment-methods`" />
    </div>
    <ul class="final-container__guarantees guarantees">
      <li v-for="(item, index) in items" :key="index" class="guarantees__item">
        <div class="guarantees__circle">
          <svg
            :class="`guarantees__icon guarantees__icon--${index}`"
            fill="#676869"
          >
            <use :href="`${base}icons/icons.svg#icon-${item.icon}`" />
          </svg>
        </div>
        <p class="guarantees__text">{{ item.text }}</p>
      </li>
    </ul>
    <Stars class="final-container__stars" />
  </div>
</template>

<script setup>
import Gallery from "./Gallery.vue";
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";

const base = import.meta.env.BASE_URL;

const items = [
  { icon: "car", text: "FREE Shipping on Orders over $200" },
  { icon: "secure", text: "Over 500+ 5 Star Reviews Online" },
  { icon: "cart", text: "Made ethically and responsibly." },
];

const urls = [
  {
    src: "image23.png",
    alt: "Woman in grey knit loungewear set",
  },
  {
    src: "image24.jpg",
    alt: "Woman in a yellow suit",
  },
  {
    src: "hero-1.jpg",
    alt: "Woman in grey knit loungewear set",
  },
];
</script>
<style lang="scss">
.final-container {
  padding-top: 84px;
  background-image: linear-gradient(
    0deg,
    #f9f0e5 0%,
    rgba(249, 240, 229, 0.18) 43.05%,
    rgba(249, 240, 229, 0) 100%
  );

  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    text-align: center;
    color: #01005b;
    margin-bottom: 20px;

    @media screen and (max-width: 786px) {
      margin-bottom: 10px;
    }
  }

  &__text,
  &__text-mobile {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 3%;
    text-align: center;
    color: #676869;
    max-width: 586px;
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  &__text {
    display: block;
    @media screen and (max-width: 786px) {
      display: none;
    }
  }

  &__text-mobile {
    display: none;
    @media screen and (max-width: 786px) {
      display: block;
    }
  }

  &__gallery {
    justify-content: center;
    margin-top: 36px;

    @media screen and (max-width: 786px) {
      margin-top: 20px;
    }
  }

  &__button {
    display: block;
    margin: 0 auto;
    margin-top: 58px;

    @media screen and (max-width: 786px) {
      margin-top: 52px;
    }
  }

  &__payments {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media screen and (max-width: 786px) {
      display: none;
    }
  }

  &__stars {
    display: none;
    @media screen and (max-width: 786px) {
      display: flex;
      padding-bottom: 50px;
    }
  }
}

.payments {
  &__text {
    font-family: "Suisse Int'l", sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 4%;
    color: #1fad40;
    padding-right: 10px;
    border-right: 2px solid rgba(196, 196, 196, 0.25);
  }
}

.guarantees {
  display: flex;
  justify-content: center;
  list-style: none;
  padding-bottom: 84px;
  margin-bottom: 0;

  @media screen and (max-width: 786px) {
    display: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 20px;

    & + & {
      border-left: 2px solid rgba(196, 196, 196, 0.35);
    }
  }

  &__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #ebe7e3;
  }

  &__icon {
    &--0 {
      width: 19px;
      height: 14px;
    }
    &--1 {
      width: 18px;
      height: 19px;
    }

    &--2 {
      width: 22px;
      height: 18px;
    }
  }

  &__text {
    max-width: 180px;
    margin: 0;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #676869;
  }
}
</style>
