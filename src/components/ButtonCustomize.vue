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
