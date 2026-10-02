<template>
  <div class="founder-container">
    <div class="founder-content">
      <FounderImages class="founder-content__image" />
      <div class="founder-text">
        <h1 class="founder-text__title">Be your best self.</h1>
        <FounderImages class="founder-text__image" />
        <p class="founder-text__info">
          Hi! My name’s [Insert Name], and I founded [Insert] in ____.
        </p>
        <p class="founder-text__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p class="founder-text__info">
          Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
          et felis finibus consequat. Fusce non nibh luctus, dignissim risus
          quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur
          felis varius non. Aliquam a nunc rutrum, porttitor dolor eu,
          pellentesque est. Vivamus id arcu congue, faucibus libero nec,
          placerat ligula.
        </p>
        <p class="founder-text__info">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
        </p>
        <p class="founder-text__info">
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
          sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
          convallis urna massa at nibh.
        </p>
        <p class="founder-text__info">
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien.
        </p>
        <p class="founder-text__info">Cras mattis varius mollis.</p>
        <ButtonCustomize class="founder-text__button" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonCustomize from "./ButtonCustomize.vue";
import FounderImages from "./FounderImages.vue";
</script>

<style scoped lang="scss">
.founder-container {
  padding: 82px 90px 56px 124px;
  background-color: #f0eeef;

  @media screen and (max-width: 1280px) {
    padding: 40px 38px 54px;
  }
}

.founder-content {
  display: flex;
  gap: 96px;

  @media screen and (max-width: 1280px) {
    align-items: center;
    justify-content: center;
  }

  &__image {
    display: block;
    @media screen and (max-width: 1280px) {
      display: none;
    }
  }
}

.founder-text {
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    color: #2a2996;
    margin-bottom: 40px;

    @media screen and (max-width: 1280px) {
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }

  &__image {
    display: none;
    @media screen and (max-width: 1280px) {
      display: block;
      margin: 40px auto;
      max-width: 344px;
    }
  }

  &__info {
    max-width: 620px;
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #6c6c6c;
    margin-bottom: 30px;

    @media screen and (max-width: 1280px) {
      display: block;
      margin: 0 auto 30px;
    }

    @media screen and (max-width: 786px) {
      max-width: 335px;
      margin-left: 4px;
    }
  }

  &__button {
    display: flex;
    @media screen and (max-width: 1280px) {
      display: none;
    }
  }
}
</style>
