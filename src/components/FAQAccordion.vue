<template>
  <section class="faq">
    <ul class="faq__list">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="faq__item"
        :class="{ 'faq__item--open': openIndex === i }"
      >
        <button
          class="faq__question"
          type="button"
          :aria-expanded="openIndex === i"
          @click="toggle(i)"
        >
          <span>{{ item.question }}</span>
          <svg class="faq__icon" width="18" height="18" aria-hidden="true">
            <use
              :href="`${base}icons/icons.svg#icon-${openIndex === i ? 'minus' : 'plus'}`"
            />
          </svg>
        </button>

        <div class="faq__answer-wrap">
          <p class="faq__answer">{{ item.answer }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
const base = import.meta.env.BASE_URL;
const answer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

const items = [
  { question: "lorem ipsum dolor sit amet", answer },
  { question: "lorem ipsum dolor sit amet", answer },
  { question: "lorem ipsum dolor sit amet", answer },
  { question: "lorem ipsum dolor sit amet", answer },
  { question: "lorem ipsum dolor sit amet", answer },
  { question: "lorem ipsum dolor sit amet", answer },
];

const openIndex = ref(0);

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i;
};
</script>

<style scoped lang="scss">
.faq {
  max-width: 630px;

  @media screen and (max-width: 1280px) {
    font-size: 26px;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (max-width: 786px) {
    max-width: 318px;
  }

  &__title {
    margin: 0 0 56px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.04em;
    color: #01005b;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid #eeeeee;
  }

  &__item {
    border-bottom: 1px solid #eeeeee;
  }

  &__icon {
    flex-shrink: 0;
    color: #01005b;
  }

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 40px 24px 0;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    font-family: "Sofia Pro", sans-serif;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #01005b;
  }

  &__answer-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  &__item--open &__answer-wrap {
    grid-template-rows: 1fr;
  }

  &__answer {
    overflow: hidden;
    min-height: 0;
    margin: 0;
    max-width: 590px;
    font-family: "Sofia Pro", sans-serif;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #676869;
  }

  &__item--open &__answer {
    padding-bottom: 24px;
  }
}
</style>
