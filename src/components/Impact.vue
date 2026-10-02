<template>
  <div class="impact-container">
    <h1 class="impact-container__title">Our total green impact</h1>

    <div class="impact-container__list impacts">
      <div v-for="(item, index) in impacts" :key="index" class="impact__item">
        <div class="impact__svg-container">
          <svg :class="`impact__icon impact__icon--${index}`">
            <use :href="`${base}icons/icons.svg#icon-${item.icon}`" />
          </svg>
        </div>
        <h3 class="impact__value">{{ item.title }}</h3>
        <p class="impact__text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;

const impacts = [
  {
    icon: "cloude",
    title: "3,927 kg",
    text: "of CO2 saved",
  },
  {
    icon: "water",
    title: "2,546,167 days",
    text: "of drinking water saved",
  },
  {
    icon: "energy",
    title: "7,321 kWh",
    text: "of energy saved",
  },
];
</script>

<style lang="scss">
.impact-container {
  background-color: #f0eeef;
  padding-top: 40px;
  padding-bottom: 32px;
  display: block;
  margin: 0 auto;

  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 4%;
    text-align: center;
    color: #2a2996;
    margin-bottom: 18px;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 786px) {
      flex-direction: column;
      padding-bottom: 56px;
    }
  }
}

.impact {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 60px 0;
    text-align: center;
    height: 122px;

    & + & {
      border-left: 1px solid rgba(196, 196, 196, 0.5);
    }

    @media screen and (max-width: 786px) {
      & + & {
        border-left: none;
      }
      & {
        width: 282px;
        border-bottom: 1px solid rgba(196, 196, 196, 0.5);
      }
    }

    &:last-child {
      display: block;
      @media screen and (max-width: 786px) {
        display: none;
      }
    }
  }

  &__svg-container {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    &--0 {
      width: 32px;
      height: 21px;
    }
    &--1 {
      width: 23px;
      height: 31px;
    }
    &--2 {
      width: 19px;
      height: 28px;
    }
  }

  &__value {
    margin: 14px 0 4px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #2a2996;
  }

  &__text {
    margin: 0;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #2a2996;

    @media screen and (max-width: 786px) {
      padding-bottom: 16px;
    }
  }
}
</style>
