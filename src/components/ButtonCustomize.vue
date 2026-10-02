<template>
  <button class="info__button">
    <p class="info__button--text">Customize Your Outfit</p>
    <svg v-if="props.svgSrc" width="22" height="10" class="info__button--arrow">
      <use :href="`${base}icons/icons.svg#icon-${props.svgSrc}`" />
    </svg>
  </button>
</template>

<script setup>
const base = import.meta.env.BASE_URL;
const props = defineProps({
  svgSrc: {
    type: String,
  },
});
</script>

<style lang="scss">
.info {
  &__button {
    width: 362px;
    height: 56px;
    border-radius: 5px;
    background-color: #01005b;
    border: none;
    padding: 16px 30px;
    position: relative;

    @media screen and (max-width: 1280px) {
      width: 381px;
    }

    @media screen and (max-width: 481px) {
      width: 80%;
      height: 80%;
    }

    &--text {
      font-family: "Suisse Int'l", sans-serif;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 3%;
      text-align: center;
      color: #fff;
    }

    &--arrow {
      position: absolute;
      right: 45px;
      bottom: 8px;

      @media screen and (max-width: 786px) {
        right: 62px;
        bottom: 22px;
      }

      @media screen and (max-width: 481px) {
        right: 38px;
        bottom: 22px;
      }
    }
  }
}
</style>
