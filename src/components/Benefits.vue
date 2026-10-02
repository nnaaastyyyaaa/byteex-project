<template>
  <div class="benefits-container">
    <div class="benefits-title">
      <h1 class="benefits-title__header">as seen in</h1>
      <div class="benefits-title__slider">
        <div class="benefits-title__brands" ref="track" @scroll="onScroll">
          <img
            v-for="(brand, index) in shownBrands"
            :key="brand.n"
            :src="brand.src"
            :alt="brand.alt"
            :class="[
              'benefits-title__brand',
              `benefits-title__brand--${index + 1}`,
            ]"
          />
        </div>
        <div class="benefits-title__dots">
          <button
            v-for="i in dotsCount"
            :key="i"
            type="button"
            class="benefits-title__dot"
            :class="{ 'benefits-title__dot--active': active === i - 1 }"
            :aria-label="`Show brands ${i}`"
            @click="goTo(i - 1)"
          ></button>
        </div>
      </div>
    </div>
    <div class="benefits-content">
      <div class="benefits-text">
        <h2 class="benefits-text__title">Loungewear you can be proud of.</h2>
        <BenefitGallery
          :images="images"
          class="benefits-content__mobile-gallery"
        />
        <ul class="benefits-text__list">
          <li
            class="benefits-text__list-item list-item"
            v-for="(benefit, index) in benefits"
            :key="index"
          >
            <div class="list-item__svg-container">
              <svg :class="`list-item__svg--${index}`">
                <use :href="`${base}icons/icons.svg#icon-${benefit.icon}`" />
              </svg>
            </div>
            <div class="list-item__text-container text-container">
              <h3 class="text-container__title">
                {{ benefit.title }}
              </h3>
              <p class="text-container__text">
                {{ text }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <BenefitGallery :images="images" class="benefits-content__gallery" />
      <ButtonCustomize svgSrc="arrow" class="benefits-content__button" />
      <Stars class="benefits-content__stars" />
    </div>
  </div>
</template>
<script setup>
import BenefitGallery from "./BenefitGallery.vue";
import ButtonCustomize from "./ButtonCustomize.vue";
import Stars from "./Stars.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { getEntries } from "../api/cms.js";

const base = import.meta.env.BASE_URL;
let brands = ref([]);

onMounted(async () => {
  try {
    const entries = await getEntries("ourBrands");
    if (entries) {
      brands.value = entries.map((e) => ({
        src: e.image,
        alt: "Brand",
      }));
    }
    console.log(brands);
  } catch (e) {
    console.error(e);
  }
});

const brandsCount = 5;
const visible = 3;
const dotsCount = brandsCount - visible + 1;

const active = ref(0);
const isMobile = ref(false);

let mq;
const updateMq = () => (isMobile.value = mq.matches);
onMounted(() => {
  mq = window.matchMedia("(max-width: 1280px)");
  updateMq();
  mq.addEventListener("change", updateMq);
});
onUnmounted(() => mq?.removeEventListener("change", updateMq));

const shownBrands = computed(() => {
  const list = brands.value.map((b, i) => ({ ...b, n: i + 1 }));
  return isMobile.value
    ? list.slice(active.value, active.value + visible)
    : list;
});
const goTo = (i) => {
  active.value = i;
};
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ";
const benefits = [
  {
    icon: "cart",
    title: "Ethically sourced.",
  },
  {
    icon: "leave",
    title: "Responsibly made.",
  },
  {
    icon: "moon-sun",
    title: "Made for living in.",
  },
  {
    icon: "wave",
    title: "Unimaginably comfortable.",
  },
];

const images = [
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/woman4.jpg`,
    alt: "Woman in a white robe",
    title: "White Robe",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
  {
    src: `${base}images/hero-1.jpg`,
    alt: "Woman in a grey costume",
    title: "Grey Costume",
  },
];
</script>
<style lang="scss">
.benefits-container {
  background-image: linear-gradient(
    180deg,
    #f9f0e5 0%,
    rgba(249, 240, 229, 0.18) 43.05%,
    rgba(249, 240, 229, 0) 100%
  );
  padding-top: 78px;
}

.benefits-title {
  margin-top: 78px;
  text-align: center;

  &__header {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 3%;
    text-align: center;
    color: #868787;
  }

  &__brands {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 24px;
  }

  &__dots {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    &__brands {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    &__brand {
      height: 28px;
      width: auto;
      max-width: 100%;
      object-fit: contain;

      &--1 {
        height: 15px;
        width: auto;
      }
    }

    &__dots {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 24px;
    }

    &__dot {
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
}

.benefits-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 180px;
  margin-top: 112px;
  margin-left: 106px;
  margin-bottom: 54px;

  @media screen and (max-width: 1280px) {
    justify-content: center;
    gap: 10px;
    margin-left: 10px;
    margin-top: 42px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }

  &__gallery {
    display: flex;
    @media screen and (max-width: 786px) {
      display: none;
    }
  }

  &__mobile-gallery {
    display: none;
    @media screen and (max-width: 786px) {
      display: flex;
      margin: 0 auto;
    }
  }

  &__button {
    display: none;
    @media screen and (max-width: 786px) {
      display: block;
      margin: auto;
    }
  }

  &__stars {
    display: none;
    @media screen and (max-width: 786px) {
      display: flex;
    }
  }
}

.list-item {
  &__svg-container {
    width: 42px !important;
    height: 42px;
    flex-shrink: 0;
  }

  &__svg {
    &--0 {
      width: 25px;
      height: 20px;
    }
    &--1 {
      width: 22px;
      height: 22px;
    }
    &--2 {
      width: 20px;
      height: 20px;
    }
    &--3 {
      width: 22px;
      height: 18px;
    }
  }

  &__text-container {
    margin-left: 32px;
    margin-bottom: 32px;
    max-width: 660px;

    @media screen and (max-width: 1280px) {
      margin-left: 5px;
    }
  }
}

.text-container {
  @media screen and (max-width: 786px) {
    text-align: center;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(196, 196, 196, 0.5);
  }

  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 4%;
    color: #01005b;

    @media screen and (max-width: 786px) {
      margin-bottom: 20px;
    }
  }

  &__text {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 3%;
    color: #6c6c6c;
  }
}

.benefits-text {
  @media screen and (max-width: 786px) {
    display: block;
    margin: 0 auto;
  }
  &__title {
    font-family: "Sofia Pro", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4%;
    color: #01005b;
    margin-bottom: 74px;
    margin-left: 50px;

    @media screen and (max-width: 786px) {
      display: block;
      margin: 0 auto;
      max-width: 330px;
      text-align: center;
      margin-bottom: 25px;
    }
  }

  &__list-item {
    @media screen and (max-width: 786px) {
      flex-direction: column;
      gap: 20px;
    }

    &:last-child .text-container {
      @media screen and (max-width: 786px) {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  &__list {
    @media screen and (max-width: 786px) {
      margin-top: 62px;
      padding-left: 0;
    }
  }
}
</style>
