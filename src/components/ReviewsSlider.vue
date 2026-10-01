<template>
  <div class="slider">
    <button class="slider__arrow" type="button">
      <svg class="slider__icon" width="10" height="20">
        <use href="/icons/icons.svg#icon-arrow2" />
      </svg>
    </button>

    <ul class="slider__list">
      <li
        v-for="(review, i) in reviews"
        :key="review.id"
        class="card"
        :class="{ 'card--center': i === 1 }"
      >
        <div class="card__head">
          <div class="card__avatar"></div>
          <div>
            <Stars :includeParagraph="false" />
            <p class="card__name">{{ review.name }}</p>
          </div>
        </div>
        <p class="card__text">{{ review.text }}</p>
      </li>
    </ul>

    <button class="slider__arrow" type="button">
      <svg class="slider__icon slider__icon--next" width="10" height="20">
        <use href="/icons/icons.svg#icon-arrow2" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Stars from "./Stars.vue";

const reviews = [
  {
    id: 1,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 2,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    id: 3,
    name: "Jane, S.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
];
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 66px;
  margin-top: 76px;

  &__arrow {
    border: none;
    background: none;
    cursor: pointer;
  }

  &__icon--next {
    transform: rotate(180deg);
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 42px;
    list-style: none;
  }
}

.card {
  width: 338px;
  height: 194px;
  padding: 28px 36px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.08);

  &--center {
    width: 338px;
    height: 252px;
  }

  &__head {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  &__avatar {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1c2e58;
  }

  &__name {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #676869;
  }

  &__text {
    margin-top: 12px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    letter-spacing: 4%;
    color: #676869;
  }
}
</style>
