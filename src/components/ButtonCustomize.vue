<template>
  <button class="info__button">
    <p class="info__button--text">Customize Your Outfit</p>
    <svg v-if="props.svgSrc" width="22" height="10" class="info__button--arrow">
      <use :href="`/icons/icons.svg#icon-${props.svgSrc}`" />
    </svg>
  </button>
</template>

<script setup>
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
    }
  }
}
</style>
