<template>
  <div class="header">
    <p class="header__text">
      <span class="header__text--accent">
        consciously made butter soft staples for every day (or night)
      </span>
      <span class="header__text--separator"> | </span>
      <span class="header__text--accent">free shipping on orders</span>
      <span> $200 </span>
      <span class="header__text--separator"> | </span>
      <span> easy 45 day return window. </span>
    </p>
  </div>
</template>

<style lang="scss">
.header {
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 35px;
    letter-spacing: 8%;
    height: 36px;
    background-color: #f9f0e5;
    text-align: center;
    font-family: "Suisse Int'l", sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #565656;

    &--accent {
      text-transform: uppercase;
    }

    &--separator {
      color: rgba(86, 86, 86, 0.5);
    }
  }
}
</style>
