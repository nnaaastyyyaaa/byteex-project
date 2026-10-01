<template>
  <div class="founder-container">
    <div class="founder-content">
      <div class="founder-images">
        <img
          src="/images/hero-1.jpg"
          alt="Woman"
          class="founder-images__img-left"
        />
        <div class="image-container">
          <img
            src="/images/woman4.jpg"
            alt="Woman"
            class="founder-images__img"
            width="382"
            height="570"
          />
        </div>
        <img
          src="/images/women3.jpg"
          alt="Woman"
          class="founder-images__img-right"
        />
      </div>
      <div class="founder-text">
        <h1 class="founder-text__title">Be your best self.</h1>
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
        <ButtonCustomize />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonCustomize from "./ButtonCustomize.vue";
</script>

<style scoped lang="scss">
.founder-container {
  padding: 82px 90px 56px 124px;
  background-color: #f0eeef;
}

.founder-content {
  display: flex;
  gap: 96px;
}

.image-container {
  width: 382px;
  height: 570px;
  overflow: hidden;
  margin: 46px 100px 47px 50px;
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
  }
}

.founder-images {
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    transform: scale(1.2);
    object-fit: cover;
    transform-origin: 40% 40%;
  }

  &__img-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 165px;
    height: 175px;
    object-fit: cover;
    object-position: center 25%;
    z-index: 1;
    border: 5px solid #f0eeef;
  }

  &__img-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 128px;
    height: 176px;
    border-left: 5px solid #f0eeef;
  }
}
</style>
