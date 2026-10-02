<template>
  <ul class="photo-grid">
    <li v-for="n in 22" :key="n" class="photo-grid__item">
      <img
        class="photo-grid__img"
        :src="`/images/image${n}.jpg`"
        :alt="`Customer photo ${n}`"
        loading="lazy"
      />
    </li>
  </ul>
</template>

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
