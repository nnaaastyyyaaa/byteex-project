<template>
  <div class="stars__svg-container">
    <svg width="10" height="10" v-for="n in 5" :key="n">
      <use :href="`${base}icons/icons.svg#icon-star`" />
    </svg>
    <p v-if="props.includeParagraph" class="stars__comment">
      One of 500+ 5 Star Reviews Online
    </p>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;
const props = defineProps({
  includeParagraph: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.stars {
  &__svg-container {
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;
  }

  &__comment {
    margin-left: 10px;
    font-family: "Suisse Int'l", sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 2%;
    color: #828282;
  }
}
</style>
