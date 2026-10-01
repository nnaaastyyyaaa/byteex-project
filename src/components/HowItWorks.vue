<template>
  <div class="how-it-works-container">
    <div class="how-it-works-content">
      <h1 class="how-it-works-content__title">Comfort made easy</h1>
      <div class="how-it-works-content__steps steps">
        <div
          v-for="(step, index) in steps"
          :class="`steps__step--${index}`"
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
      </div>
      <ButtonCustomize svgSrc="arrow" class="how-it-works-content__button" />
      <Stars />
    </div>
  </div>
</template>

<script setup>
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";

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

  &__step {
    width: 346px;
    height: 321px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
