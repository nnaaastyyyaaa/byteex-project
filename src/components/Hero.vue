<template>
  <div class="header-container">
    <svg class="logo" width="178" height="32">
      <use href="/icons/icons.svg#icon-logo" />
    </svg>
    <div class="hero-content">
      <div class="hero-content__info info">
        <h1 class="info__header">Don’t apologize for being comfortable.</h1>
        <ul class="info__list">
          <li
            class="info__list-item list-item"
            v-for="(feature, index) in features"
            :key="index"
          >
            <div class="list-item__svg-container">
              <svg width="20" height="20" :class="`list-item__svg--${index}`">
                <use :href="`/icons/icons.svg#icon-${feature.icon}`" />
              </svg>
            </div>
            <p class="list-item__text">
              {{ feature.text }}
            </p>
          </li>
        </ul>
        <ButtonCustomize svgSrc="arrow" />
      </div>
      <Gallery :urls="urls" />
    </div>
    <div class="review">
      <div class="review__header review-header">
        <img
          :src="review.avatar"
          width="40"
          height="40"
          class="review-header__image"
        />
        <p class="review-header__name">{{ review.name }}</p>
        <Stars />
      </div>
      <p class="review__text">
        {{ review.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";
import Gallery from "./Gallery.vue";

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

const review = {
  name: "Amy P.",
  avatar: "/images/amy.jpg",
  text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.",
};

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
}

.hero-content {
  margin-top: 62px;
  display: flex;
  gap: 100px;
}

.info {
  width: 550px;
  &__header {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 38px;
    line-height: 45px;
    letter-spacing: 4%;
    color: #01005b;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 25px;
    margin-bottom: 40px;
  }
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;

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
  bottom: -35%;
  z-index: 2;

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
  }

  &__text {
    font-family: "Suisse Int'l", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 4%;
    color: #676869;
  }
}

.review-header {
  &__image {
    margin-right: 14px;
  }

  &__name {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #676869;
    margin-right: 15px;
  }
}
</style>
