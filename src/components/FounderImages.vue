<template>
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
</template>

<style lang="scss">
.image-container {
  width: 382px;
  height: 570px;
  overflow: hidden;
  margin: 46px 100px 47px 50px;

  @media screen and (max-width: 1280px) {
    width: 240px;
    height: 310px;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 270px;
    margin: 0;
  }
}

.founder-images {
  position: relative;
  display: flow-root;
  flex-shrink: 0;
  @media screen and (max-width: 1280px) {
    width: 238px;
    padding: 30px 55px 30px 55px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    padding: 30px 55px 30px 55px;
  }

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
    @media screen and (max-width: 1280px) {
      width: 104px;
      height: 110px;
    }
  }

  &__img-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 128px;
    height: 176px;
    border-left: 5px solid #f0eeef;

    @media screen and (max-width: 1280px) {
      width: 110px;
      height: 110px;
      border-top: 2px solid #f0eeef;
    }
  }
}
</style>
