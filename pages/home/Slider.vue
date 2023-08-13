<template>
  <div>
    <!-- <div v-if="sliderproduct.length>=1"> -->
    <VueSlickCarousel v-bind="settings" v-if="sliderproduct.length">
      <!-- <div></div> -->
      <div v-for="(slide, index) in sliderproduct" :key="index">
        <img :src="rooturl + slide.bannerImage" class="block w-full" />
        <!-- {{ slide.id }} -->
      </div>
      <!-- <div><img src="~/static/assets/images/Slider-01.png" class="block w-full" /></div>
      <div><img src="~/static/assets/images/DIWALISALE.png" class="block w-full" /></div>
      <div><img src="~/static/assets/images/slide-2.jpg" class="block w-full" /></div> -->

    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data() {
    return {
      rooturl: process.env.SITEURL,
      sliderproduct: [],
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        fadeSpeed: 1000,
        dots: true,
        "dotsClass": "slick-dots custom-dot-class",
      },
    }
  },
  name: 'slider',
  components: { VueSlickCarousel },
  methods: {
    async slider() {
      let response = await this.$axios.$get('banner').then((response) => {
        this.sliderproduct = response;
      }).catch((error) => {
        // this.errors = error.response.data.errors;
      });

    }
  },
  created() {
    this.slider();
  }
}
</script>

<style>
.slick-dots li button:before {
  font-size: 13px !important;
  color: white;
  opacity: 5;
}

.slick-dots li.slick-active button:before {
  color: #f02640;
  opacity: unset !important;
}
</style>

