<template>
  <div class="gallery" tabindex="0" @keydown.left="prev" @keydown.right="next">
    <button class="gallery__arrow" type="button" @click="prev">
      <svg width="20" height="20">
        <use :href="`${base}icons//icons.svg#icon-arrow2`" />
      </svg>
    </button>

    <div class="gallery__figure">
      <div class="gallery__frame">
        <Transition name="fade" mode="out-in">
          <img
            :key="current.src"
            class="gallery__img"
            :src="current.src"
            :alt="current.alt"
          />
        </Transition>

        <ul class="gallery__thumbs">
          <li v-for="(image, i) in images" :key="i">
            <button
              type="button"
              class="gallery__thumb"
              :class="{ 'gallery__thumb--active': i === index }"
              @click="index = i"
            >
              <img :src="image.src" alt="" />
            </button>
          </li>
        </ul>
      </div>

      <div class="gallery__caption">{{ current.title }}</div>
    </div>

    <button
      class="gallery__arrow gallery__arrow--right"
      type="button"
      aria-label="Next photo"
      @click="next"
    >
      <svg width="20" height="20">
        <use :href="`${base}icons//icons.svg#icon-arrow2`" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const base = import.meta.env.BASE_URL;

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const index = ref(1);
const current = computed(() => props.images[index.value]);

const next = () => {
  index.value = (index.value + 1) % props.images.length;
};
const prev = () => {
  index.value = (index.value - 1 + props.images.length) % props.images.length;
};
</script>

<style lang="scss" scoped>
.gallery {
  align-items: center;
  justify-content: center;
  gap: 20px;
  outline: none;

  @media screen and (max-width: 786px) {
    gap: 2px;
  }

  &__arrow {
    border: none;
    background: none;
    color: #565656;
    cursor: pointer;

    &--right {
      transform: rotate(180deg);
    }
  }

  &__frame {
    position: relative;
    width: 432px;
    aspect-ratio: 2 / 3;
    overflow: hidden;

    @media screen and (max-width: 1280px) {
      width: 303px;
    }

    @media screen and (max-width: 481px) {
      width: 200px;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__thumbs {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 786px) {
      gap: 2px;
    }

    & img {
      object-fit: cover;
      object-position: center 30%;
    }
  }

  &__thumb {
    display: block;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 2px solid transparent;
    background: none;
    cursor: pointer;

    @media screen and (max-width: 481px) {
      width: 18px;
      height: 18px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--active {
      border-color: #fff;
    }
  }

  &__caption {
    margin-top: 16px;
    text-align: center;
    font-size: 13px;
    color: #565656;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
