<template>
  <div class="container lg:mx-20 xl:mx-auto relative similarproduct">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl ml-8">Similar Products </h1>
    <div class="flex items-center justify-between absolute inset-0 w-full h-full">
      <button @click="showPrev" role="button" aria-label="slide forward"
        class=" z-30 ml-6 lg:ml-10 focus:outline-none  rounded-full p-2"
        id="next">
        <svg width="24px" height="24px" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L1 7L7 13" stroke="black" stroke-width="1px" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button @click="showNext" role="button" aria-label="slide forward"
        class=" z-30  rounded-full p-2 mr-5 lg:mr-16 focus:outline-none"
        id="next">
        <svg width="24px" height="24px" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke="black" stroke-width={2} stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div class="slider">
        <div class="slide-ana">
          <VueSlickCarousel v-bind="settings" ref="carousel" v-if="smproduct.length">
            <!-- <div class="px-3"> -->
            <!-- <h1 class="bg-red-700">{{ smproduct.length }}</h1> -->
            <div class="px-3 hover14 column" v-for="product in smproduct">
              <!-- <h2>{{ product.productgallery[0].imagepath }}</h2> -->
              <div class="gallery-cell w-full h-full">
                <div class="relative w-full h-full lg:block">
                  <!-- <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" class="object-center object-cover w-full h-96" /> -->
                  <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }">


                   <figure v-if="product.productgallery[0]"> <img :src="rooturl + product.productgallery[0].imagepath" alt="sitting area"
                      class="object-center object-cover w-full h-96" /> </figure>
                  </nuxt-link>

                  <div class="pl-6 pb-20 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                  </div>
                </div>
                <h1 class="capitalize text-lg text-[#434343]">{{ product.name }}</h1>
                <!-- <h1 class="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-black">{{ product.rate }}({{ product.reviewcount }})</h1> -->
                <div class="text-sm flex ">
                  <div v-for="rating in total_rating" :key="rating.id">
                    <div v-if="product.rate >= rating">
                      <i class="fa fa-star ratingchecked text-xl"></i>
                    </div>
                    <div v-else class="mx-[2px]">
                      <i class="fa fa-star ratingunchecked text-xl"></i>
                    </div>
                  </div>
                  <p class="text-base ml-2 text-gray-500">({{ product.reviewcount }})</p>
                </div>
                <h1 class="text-xl leading-5 lg:leading-normal text-black">{{ product.price }}</h1>
                <!-- <p>{{ totalrate }} average based on {{ product.reviewcount }} reviews.</p> -->
                <!-- <p class="capitalize">{{ product.brand }}</p> -->
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  // name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      bannerObj: [],
      params: this.$route.params.slug,
      rooturl: process.env.SITEURL,
      category: '',
      smproduct: [],
      total_rating: 5,
      settings: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "initialSlide": 0,
        speed: 500,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 750,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ],
      },
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    async getproduct() {
      let response = await this.$axios.$get('products/' + this.params);
      this.category = response.data.category[0].slug;
      // let responsetest = await this.$axios.$get("getrating/" + this.productid);
      let responsetest = await this.$axios.$get("products?category=" + this.category);
      this.smproduct = responsetest.data;
    },
  },
  created() {
    this.getproduct();
  },
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap'); */
/* @import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'); */
.similarproduct .slider {
  width: 100%;
  height: 550px;
  position: relative;
  overflow: hidden;
}
svg {
    color: #fff;
    background-color: white;
    padding: 15px;
    border-radius: 46px;
    height: 50px;
    width: 50px;
}
.similarproduct .slide-ana {
  height: 368px;
}

.similarproduct .slide-ana>div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}

@media (min-width: 300px) and (max-width: 884px) {
  .similarproduct .slider {
    height: 550px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .similarproduct .slider {
    height: 330px;
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .similarproduct .slider {
    height: 300px;
  }
}

.similarproduct .slider2 {
  width: 100%;
  height: 386px;
  position: relative;
  overflow: hidden;
}

.similarproduct .slide-ana2 {
  height: 100%;
}

.similarproduct .slide-ana2>div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}

@media (min-width: 300px) and (max-width: 1023px) {
  .similarproduct .slider2 {
    height: 486px;
  }
}

.similarproduct .carousel__sliderLarge {
  padding-left: 20%;
  padding-right: 20%;
}
.checkedsm {
  color: #f02640; 
}
.uncheckedsm {
  color: #e1e1e1;
}
</style>
