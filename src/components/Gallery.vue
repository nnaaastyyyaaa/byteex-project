<template>
  <div class="gallery">
    <div class="gallery__band left"></div>
    <img
      class="gallery__left"
      :src="`/images/${props.urls[0].src}`"
      :alt="props.urls[0].alt"
      width="210"
      height="316"
    />
    <img
      class="gallery__center"
      :src="`/images/${props.urls[1].src}`"
      :alt="props.urls[1].alt"
      width="250"
      height="422"
    />
    <img
      class="gallery__right"
      :src="`/images/${props.urls[2].src}`"
      :alt="props.urls[2].alt"
      width="210"
      height="316"
    />
    <div class="gallery__band right"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  urls: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.gallery {
  display: flex;
  align-items: center;

  &__band {
    width: 134px;
    height: 189px;
    background: linear-gradient(
      180deg,
      rgba(249, 240, 229, 0.7) 0%,
      rgba(249, 240, 229, 0.22) 100%
    );

    &.left {
      transform: translateX(80%);
    }

    &.right {
      transform: translateX(-80%);
    }
  }

  &__center {
    border: 2px solid white;
    z-index: 3;
  }

  &__left {
    transform: translateX(46px);
    z-index: 2;
  }

  &__right {
    transform: translateX(-46px);
    z-index: 2;
  }
}
</style>
