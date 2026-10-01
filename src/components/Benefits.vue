<template>
  <div class="benefits-container">
    <div class="benefits-title">
      <h1 class="benefits-title__header">as seen in</h1>
      <div class="benefits-title__brands">
        <img
          v-for="n in 5"
          :key="n"
          :src="`/images/brand${n}.png`"
          :alt="`Brand ${n}`"
          class="benefits-title__brand"
        />
      </div>
    </div>
    <div class="benefits-content">
      <div class="benefits-text">
        <h2 class="benefits-text__title">Loungewear you can be proud of.</h2>
        <ul class="benefits-text__list">
          <li
            class="benefits-text__list-item list-item"
            v-for="(benefit, index) in benefits"
            :key="index"
          >
            <div class="list-item__svg-container">
              <svg :class="`list-item__svg--${index}`">
                <use :href="`/icons/icons.svg#icon-${benefit.icon}`" />
              </svg>
            </div>
            <div class="list-item__text-container text-container">
              <h3 class="text-container__title">
                {{ benefit.title }}
              </h3>
              <p class="text-container__text">
                {{ text }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <BenefitGallery :images="images" />
    </div>
  </div>
</template>
<script setup>
import BenefitGallery from "./BenefitGallery.vue";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ";
const benefits = [
  {
    icon: "cart",
    title: "Ethically sourced.",
  },
  {
    icon: "leave",
    title: "Responsibly made.",
  },
  {
    icon: "moon-sun",
    title: "Made for living in.",
  },
  {
    icon: "wave",
    title: "Unimaginably comfortable.",
  },
];

const images = [
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/woman4.jpg",
    alt: "Woman in a white robe",
    title: "White Robe",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
];
</script>
<style lang="scss">
.benefits-container {
  background-image: linear-gradient(
    180deg,
    #f9f0e5 0%,
    rgba(249, 240, 229, 0.18) 43.05%,
    rgba(249, 240, 229, 0) 100%
  );
  padding-top: 78px;
}

.benefits-title {
  margin-top: 78px;
  text-align: center;

  &__header {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 3%;
    text-align: center;
    color: #868787;
  }

  &__brands {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    margin-top: 24px;
  }
}

.benefits-content {
  display: flex;
  gap: 180px;
  margin-top: 112px;
  margin-left: 106px;
}

.benefits-text {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    color: #01005b;
    margin-bottom: 74px;
    margin-left: 50px;
  }
}

.list-item {
  &__svg-container {
    width: 42px !important;
    height: 42px;
    flex-shrink: 0;
  }

  &__svg {
    &--0 {
      width: 25px;
      height: 20px;
    }
    &--1 {
      width: 22px;
      height: 22px;
    }
    &--2 {
      width: 20px;
      height: 20px;
    }
    &--3 {
      width: 22px;
      height: 18px;
    }
  }

  &__text-container {
    margin-left: 32px;
    margin-bottom: 32px;
    max-width: 660px;
  }
}

.text-container {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 4%;
    color: #01005b;
  }

  &__text {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #6c6c6c;
  }
}
</style>
