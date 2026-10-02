<template>
  <ul class="photo-grid">
    <li
      v-for="(image, index) in images"
      :key="index + 1"
      class="photo-grid__item"
    >
      <img
        class="photo-grid__img"
        :src="image.src"
        :alt="`${image.alt} ${index + 1}`"
        loading="lazy"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getEntries } from "../api/cms.js";

let images = ref([]);

onMounted(async () => {
  try {
    const entries = await getEntries("gridImages");
    if (entries) {
      images.value = entries.map((e) => ({
        src: e.image,
        alt: "Brand",
      }));
    }
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped lang="scss">
.photo-grid {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding: 0 4px;
  }

  &__item {
    aspect-ratio: 1 / 1;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      aspect-ratio: 1 / 1.02;

      &:nth-child(n + 9) {
        display: none;
      }
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
