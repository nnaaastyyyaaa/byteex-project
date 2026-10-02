<template>
  <div class="faq-container">
    <div class="faq-content">
      <h1 class="faq-content__title">Frequently asked questions.</h1>
      <div class="faq-content__info">
        <FAQAccordion />
        <div class="faq-content__collage collage">
          <div class="collage__block collage__block--1"></div>
          <div class="collage__block collage__block--2"></div>
          <img
            class="collage__image collage__image--right"
            src="/images/image23.png"
            alt="Girl"
          />
          <img
            class="collage__image collage__image--left"
            src="/images/image21.jpg"
            alt="Girl reads book"
          />
          <img
            class="collage__image collage__image--center"
            src="/images/hero-1.jpg"
            alt="Girl in grey costume"
          />
        </div>
      </div>
      <ButtonCustomize svgSrc="arrow" class="faq-content__button" />
      <Stars class="faq-content__stars" />
    </div>
  </div>
</template>

<script setup>
import FAQAccordion from "./FAQAccordion.vue";
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";
</script>

<style lang="scss">
.faq-container {
  margin: 110px 105px 42px 211px;

  @media screen and (max-width: 1280px) {
    margin: 68px 20px 40px;
  }
}

.faq-content {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    color: #01005b;
    margin-bottom: 54px;

    @media screen and (max-width: 1280px) {
      font-size: 26px;
      display: block;
      margin: 0 auto;
      max-width: 318px;
      text-align: center;
    }
  }
  &__info {
    display: flex;
    gap: 88px;
  }

  &__collage {
    position: relative;
    width: 402px;
    height: 620px;
  }

  &__button {
    display: none;
    @media screen and (max-width: 786px) {
      display: block;
      margin: 40px auto 0;
    }
  }

  &__stars {
    display: none;
    @media screen and (max-width: 786px) {
      display: flex;
    }
  }
}

.collage {
  display: block;

  @media screen and (max-width: 1280px) {
    display: none;
  }

  &__block {
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(249, 240, 229, 0.7) 0%,
      rgba(249, 240, 229, 0.22) 100%
    );

    &--1 {
      top: 70px;
      left: 31px;
      width: 149px;
      height: 187px;
    }
    &--2 {
      top: 340px;
      left: 246px;
      width: 139px;
      height: 196px;
    }
  }

  &__image {
    position: absolute;
    object-fit: cover;

    &--right {
      top: -5px;
      left: 228px;
      width: 173px;
      height: 262px;
    }
    &--left {
      width: 216px;
      height: 159px;
      bottom: 20px;
      left: 0;
      object-fit: cover;
      object-position: center top;
    }
    &--center {
      top: 133px;
      left: 83px;
      width: 235px;
      height: 367px;
      z-index: 1;
    }
  }
}
</style>
