<template>
  <div class="how-it-works-container">
    <div class="how-it-works-content">
      <h1 class="how-it-works-content__title">Comfort made easy</h1>
      <div class="how-it-works-content__steps steps">
        <button
          class="steps__arrow"
          type="button"
          aria-label="Previous step"
          @click="prev"
        >
          <svg width="14" height="26">
            <use href="/icons/icons.svg#icon-arrow2" />
          </svg>
        </button>
        <div
          v-for="(step, index) in steps"
          :class="[
            `steps__step--${index}`,
            { 'steps__step--inactive': index !== current },
          ]"
          class="steps__step step"
        >
          <svg :class="`step__svg--${index}`">
            <use :href="`/icons/icons.svg#icon-${step.icon}`" />
          </svg>
          <h2 class="step__title">
            {{ step.title }}
          </h2>
          <p class="step__text">
            {{ step.text }}
          </p>
        </div>
        <button
          class="steps__arrow steps__arrow--next"
          type="button"
          aria-label="Next step"
          @click="next"
        >
          <svg width="14" height="26">
            <use href="/icons/icons.svg#icon-arrow2" />
          </svg>
        </button>
      </div>
      <ButtonCustomize svgSrc="arrow" class="how-it-works-content__button" />
      <Stars />
    </div>
  </div>
</template>

<script setup>
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";
import { ref } from "vue";

const current = ref(0);

const next = () => {
  current.value = (current.value + 1) % steps.length;
};
const prev = () => {
  current.value = (current.value - 1 + steps.length) % steps.length;
};

const steps = [
  {
    icon: "cart",
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.",
  },
  {
    icon: "car",
    title: "We ship.",
    text: "We ship your items within 1-2 days of receiving your order.",
  },
  {
    icon: "moon-sun",
    title: "You enjoy!",
    text: "Wear hernest around the house, out on the town, or in bed.",
  },
];
</script>

<style lang="scss">
.how-it-works-content {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    text-align: center;
    color: #01005b;
    margin-top: 75px;
    margin-bottom: 46px;
  }

  &__button {
    display: block;
    margin: 0 auto;
  }
}

.steps {
  display: flex;
  gap: 41px;
  margin-bottom: 56px;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    align-items: center;
    gap: 8px;
    padding: 0 12px;
  }

  &__arrow {
    display: none;

    @media screen and (max-width: 1280px) {
      display: block;
      flex-shrink: 0;
      padding: 8px;
      border: none;
      background: none;
      color: #676869;
      cursor: pointer;

      &--next {
        transform: rotate(180deg);
      }
    }
  }

  &__step {
    width: 346px;
    height: 321px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1280px) {
      flex: 0 1 346px;
      min-width: 0;
      width: auto;
      padding: 0 24px;
      box-sizing: border-box;
      border-radius: 8px;

      &--inactive {
        display: none;
      }
    }

    &--0 {
      background-color: #f0eeef;
    }

    &--1 {
      background-color: #f9f0e6;
    }

    &--2 {
      background-color: #f0eeef;
    }
  }
}

.step {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 4%;
    text-align: center;
    color: #01005b;
  }

  &__text {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 153%;
    letter-spacing: 0.03em;
    text-align: center;
    color: #676869;
  }

  &__svg {
    &--0 {
      width: 51px;
      height: 51px;
    }

    &--1 {
      width: 68px;
      height: 50px;
    }

    &--2 {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
