<template>
  <div class="header-container">
    <svg class="header-container__logo" width="178" height="32">
      <use :href="`${base}icons/icons.svg#icon-logo`" />
    </svg>
    <div class="hero-content">
      <div class="hero-content__info info">
        <h1 class="info__header">Don’t apologize for being comfortable.</h1>
        <Gallery :urls="urls" class="info__gallery-mobile" />
        <ul class="info__list">
          <li
            class="info__list-item list-item"
            v-for="(feature, index) in features"
            :key="index"
          >
            <div class="list-item__svg-container">
              <svg width="20" height="20" :class="`list-item__svg--${index}`">
                <use :href="`${base}icons/icons.svg#icon-${feature.icon}`" />
              </svg>
            </div>
            <p class="list-item__text">
              {{ feature.text }}
            </p>
          </li>
        </ul>
        <ButtonCustomize svgSrc="arrow" class="hero-content__button" />
      </div>
      <Gallery :urls="urls" class="hero-content__gallery" />
    </div>
    <div v-if="review" class="review">
      <div class="review__header review-header">
        <img
          :src="review.avatar"
          width="40"
          height="40"
          class="review-header__image"
        />
        <div class="review-header__head">
          <div class="review-header__first-line">
            <p class="review-header__name">{{ review.name }}</p>
            <Stars />
          </div>
          <div class="review-header__second-line">
            <p class="review-header__name-mobile">{{ review.nameMobile }}</p>
          </div>
        </div>
      </div>
      <p class="review__text">
        {{ review.text }}
      </p>
      <p class="review__text-mobile">
        {{ review.textMobile }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";
import Gallery from "./Gallery.vue";
import { getEntries } from "../api/cms.js";

const base = import.meta.env.BASE_URL;

let review = ref([]);

onMounted(async () => {
  try {
    const entries = await getEntries("heroReview");
    const e = entries[0];
    if (e) {
      review.value = {
        name: e.name,
        nameMobile: e.nameMobile,
        avatar: e.avatar,
        text: e.text,
        textMobile: e.textMobile,
      };
    }

    console.log(review.value);
  } catch (e) {
    console.error(e);
  }
});

const features = [
  {
    icon: "moon-sun",
    text: "Beautiful, comfortable loungewear for day or night.",
  },
  {
    icon: "cart",
    text: "No wasteful extras, like tags or plastic packaging.",
  },
  {
    icon: "wave",
    text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
  },
];

const urls = [
  {
    src: "hero-1.jpg",
    alt: "Woman in grey knit loungewear set",
  },
  {
    src: "hero-2.jpg",
    alt: "Woman in a white robe",
  },
  {
    src: "hero-3.jpg",
    alt: "Woman reading a book on a green sofa",
  },
];
</script>

<style lang="scss">
.header-container {
  margin-left: 100px;
  margin-top: 33px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1280px) {
    margin: 33px 21px 90px;
  }

  &__logo {
    @media screen and (max-width: 1280px) {
      display: block;
      margin: 0 auto;
    }
  }
}

.info {
  width: 550px;

  @media screen and (max-width: 1280px) {
    width: 100%;
    max-width: 550px;
  }

  &__gallery-mobile {
    display: none;
    @media screen and (max-width: 1280px) {
      display: block;
      margin: 0 auto 24px;
    }
  }
}
.hero-content {
  margin-top: 62px;
  display: flex;
  gap: 100px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }

  &__gallery {
    display: flex;
    margin-right: 10px;
    margin-left: 0;
    @media screen and (max-width: 1280px) {
      display: none;
    }
  }

  &__button {
    @media screen and (max-width: 1280px) {
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
  }
}

.info {
  width: fit-content;

  &__header {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 38px;
    line-height: 45px;
    letter-spacing: 4%;
    color: #01005b;

    @media screen and (max-width: 1280px) {
      font-size: 26px;
      line-height: 34px;
      max-width: 350px;
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 25px;
    margin-bottom: 40px;

    @media screen and (max-width: 1280px) {
      margin-left: 0;
    }
  }

  &__gallery-mobile {
    display: none;
    @media screen and (max-width: 1280px) {
      display: flex;
      justify-content: center;
    }
  }
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 1280px) {
    max-width: 380px;
  }

  &__svg-container {
    width: 30px;
    height: 30px;
    background-color: #f9f0e5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__svg {
    &--0 {
      width: 20px;
      height: 20px;
    }
    &--1 {
      width: 20px;
      height: 15px;
    }
    &--2 {
      width: 14px;
      height: 14px;
    }
  }

  &__text {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #676869;

    @media screen and (max-width: 786px) {
      font-size: 13px;
    }
  }
}

.review {
  width: 416px;
  height: 172px;
  padding: 20px 0 0 20px;
  border-radius: 8px;
  background: #fff;
  stroke-width: 1px;
  stroke: #ededed;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #ededed;
  position: absolute;
  left: 0;
  top: calc(100% - 46px);
  z-index: 2;

  @media screen and (max-width: 1280px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: fit-content;
    height: 132px;
    top: calc(100% + 26px);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;

    @media screen and (max-width: 481px) {
      margin-bottom: 4px;
    }
  }

  &__text,
  &__text-mobile {
    font-family: "Suisse Int'l", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 4%;
    color: #676869;
  }

  &__text {
    display: block;

    @media screen and (max-width: 1280px) {
      display: none;
    }
  }

  &__text-mobile {
    display: none;

    @media screen and (max-width: 1280px) {
      display: block;
      max-width: 375px;
    }
  }
}

.review-header {
  &__image {
    margin-right: 14px;
  }

  &__name-mobile,
  &__name {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 3%;
    color: #676869;
    margin-right: 15px;
  }

  &__name {
    display: block;
    font-size: 15px;

    @media screen and (max-width: 1280px) {
      display: none;
    }
  }

  &__name-mobile {
    display: none;
    font-size: 12px;

    @media screen and (max-width: 1280px) {
      display: block;
    }
  }

  &__first-line {
    display: flex;
  }
}
</style>
