<template>
  <!-- <div class="w-full flex flex-wrap border-t-2 border-gray-500er">
    <div class="w-full flex flex-col mb-5 mx-2"> -->

  <div class="w-full flex flex-wrap">
    <div class="w-full p-8">


      <h3 class="text-2xl my-4">Reviews ({{ reviewcount }})</h3>
      <div class="w-full flex border-b-2 border-gray-300 my-2" v-for="review in reviews">
        <!-- <div class="w-24"> -->
        <!-- <img src="~/static/assets/images/user.svg" class="h-8 mr-8 mt-2" /> -->
        <!-- </div> -->
        <div class="w-full flex flex-col">
          <div class="w-full flex justify-between">
            <div class="flex flex-col">
              <img :src="rooturl + review.user.image" class="imageheight rounded-full" />
              <p class="custom-font my-2">
                {{ review.customer_name }}
                <span class="text-gray-900"> Verified buyer</span>
              </p>
              <div class="flex flex-row">
                <div v-for="rating in total_rating">
                  <div v-if="review.rating >= rating">
                    <img src="/images/star_half.svg" class="h-4" />
                    <!-- <span class="fa fa-star text-shop-primary"></span> -->
                  </div>
                  <div v-else>
                    <img src="/images/star.svg" class="h-4" />
                    <!-- <span class="fa fa-star-o text-shop-primary"></span> -->
                  </div>
                </div>
              </div>
            </div>
            <p class="custom-font text-gray-400 my-2">
              {{ review.created_at }}
            </p>
          </div>
          <div class="w-full flex flex-col">
            <p class="font-semibold my-2 text-gray-600">{{ review.title }}</p>
            <p class="text-gray-400">{{ review.description }}</p>
            <!-- <img :src="rooturl + review.reviewgallery[0].imagepath" class="h-20"/> -->
          </div>
          <div class="grid lg:grid-cols-10 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2 my-3">
            <div v-for="image in review.reviewgallery" :key="image.id" v-if="review.reviewgallery.length > 0">
              <img :src="rooturl + image.imagepath" class="md:h-28 w-full border-2 xs:h-24" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: ["slug"],
  data() {
    return {
      product: [],
      productid: "",
      reviews: [],
      total_rating: 5,
      reviewcount: 0,
      params: this.$route.params.slug,
      rooturl: process.env.SITEURL,
      reviewgallery: [],
    };
  },

  methods: {
    async getproduct() {
      let response = await this.$axios.$get(`products/` + this.params);
      this.product = response.data;
      this.productid = response.data.id;
      let responsetest = await this.$axios.$get("getrating/" + this.productid);
      this.reviews = responsetest.data;
      this.reviewcount = this.reviews.length;
    },

    async getreview() {
      this.getproduct();
      let response = await this.$axios.$get("getrating/" + this.productid);
      this.reviews = response.data;
      this.reviewcount = this.reviews.length;
    },
  },
  created() {
    this.getproduct();
  },
};
</script>
<style scoped>
/* .imgsizereview {
        width: 150px;
        height: 150px;
      } */
.imageheight {
  height: 50px;
  width: 50px;
}
</style>