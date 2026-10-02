<template>
  <div class="slider">
    <button class="slider__arrow" type="button" @click="prev">
      <svg class="slider__icon" width="10" height="20">
        <use href="/icons/icons.svg#icon-arrow2" />
      </svg>
    </button>

    <ul class="slider__list">
      <li
        v-for="(review, i) in reviews"
        :key="i + 1"
        class="card"
        :class="{ 'card--center': i === 1, 'card--active': i === active }"
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

    <button class="slider__arrow" type="button" @click="next">
      <svg class="slider__icon slider__icon--next" width="10" height="20">
        <use href="/icons/icons.svg#icon-arrow2" />
      </svg>
    </button>
  </div>
  <div class="slider__dots">
    <button
      v-for="(review, i) in reviews"
      :key="review.id"
      type="button"
      class="slider__dot"
      :class="{ 'slider__dot--active': i === active }"
      :aria-label="`Show review ${i + 1}`"
      @click="active = i"
    ></button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Stars from "./Stars.vue";
import { getEntries } from "../api/cms.js";

const reviews = ref([]);

onMounted(async () => {
  try {
    const entries = await getEntries("ourReviews");
    reviews.value = entries.map((e) => ({
      name: e.name,
      text: e.text,
    }));
  } catch (err) {
    console.error(err);
  }
});

const active = ref(0);

const next = () => {
  active.value = (active.value + 1) % reviews.length;
};
const prev = () => {
  active.value = (active.value - 1 + reviews.length) % reviews.length;
};
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 58px;
  margin-top: 76px;

  @media screen and (max-width: 1280px) {
    gap: 20px;
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
    row-gap: 5px;
    margin-top: 40px;
  }

  &__dots {
    display: none;

    @media screen and (max-width: 1280px) {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: 100%;
      margin-top: 5px;
    }
  }

  &__dot {
    @media screen and (max-width: 1280px) {
      width: 10px;
      height: 10px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: #c4c4c4;
      cursor: pointer;

      &--active {
        background: #000;
      }
    }
  }

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

    @media screen and (max-width: 1280px) {
      gap: 40px;
      padding: 0;
    }
  }
}

.card {
  width: 338px;
  height: 194px;
  padding: 28px 36px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 1280px) {
    display: none;
    box-sizing: border-box;
    width: 300px;
    height: auto;
    padding: 28px 48px 36px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px 10px;
    width: 200px;
    height: auto;
  }

  &--center {
    width: 338px;
    height: 252px;

    @media screen and (max-width: 1280px) {
      width: 400px;
      height: auto;
    }

    @media screen and (max-width: 480px) {
      padding: 18px 28px 18px;
      width: 250px;
      height: auto;
    }
  }

  &--active {
    @media screen and (max-width: 1280px) {
      display: block;
    }
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

    @media screen and (max-width: 1280px) {
      font-size: 12px;
      line-height: 20px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
      line-height: 15px;
    }
  }
}
</style>
