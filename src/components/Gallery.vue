<template>
  <div class="gallery">
    <div class="gallery__inner">
      <div class="gallery__band"></div>
      <img
        class="gallery__left"
        :src="`${base}images/${props.urls[0].src}`"
        :alt="props.urls[0].alt"
      />
      <img
        class="gallery__center"
        :src="`${base}images/${props.urls[1].src}`"
        :alt="props.urls[1].alt"
      />
      <img
        class="gallery__right"
        :src="`${base}images/${props.urls[2].src}`"
        :alt="props.urls[2].alt"
      />
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;

const props = defineProps({
  urls: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.gallery {
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 36px auto 0;

  &__inner {
    --w: clamp(150px, 17vw, 250px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 786px) {
      --w: 136px;
    }

    @media screen and (max-width: 481px) {
      --w: 120px;
    }
  }

  &__band {
    margin-right: 10px;
    position: absolute;
    top: 50%;
    left: calc(var(--w) * -0.16);
    right: calc(var(--w) * -0.19);
    height: calc(var(--w) * 0.756);
    transform: translateY(-50%);
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(249, 240, 229, 0.7) 0%,
      rgba(249, 240, 229, 0.22) 100%
    );
  }

  &__left,
  &__center,
  &__right {
    position: relative;
    display: block;
    object-fit: cover;
  }

  &__center {
    box-sizing: border-box;
    width: var(--w);
    aspect-ratio: 250 / 422;
    border: 2px solid #fff;
    z-index: 3;
  }

  &__left,
  &__right {
    width: calc(var(--w) * 0.84);
    aspect-ratio: 210 / 316;
    z-index: 2;
  }

  &__left {
    margin-right: calc(var(--w) * -0.184);
  }
  &__right {
    margin-left: calc(var(--w) * -0.184);
  }
}
</style>
