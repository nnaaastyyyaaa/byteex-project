<template>
  <div class="reviews-container">
    <div class="reviews-header">
      <h1 class="reviews-header__title">What are our fans saying?</h1>
      <p class="reviews-header__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
    </div>
    <PhotoGrid />
    <ReviewsSlider />
    <div class="reviews-content"></div>
  </div>
</template>

<script setup>
import PhotoGrid from "./PhotoGrid.vue";
import ReviewsSlider from "./ReviewsSlider.vue";
</script>

<style lang="scss">
.reviews-container {
  margin-top: 74px;
}

.reviews-header {
  display: block;
  margin: 0 auto;

  &__title {
    margin-bottom: 30px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    text-align: center;
    color: #01005b;
  }

  &__text {
    max-width: 613px;
    margin: 0 auto 55px;
    text-align: center;
    font-family: 30px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    text-align: center;
    color: #676869;
  }
}
</style>
