<template>
  <div>
    <div class="container mx-auto my-4">
      <nuxt-link :to="{ name: 'index' }" class="font-semibold text-blue text-sm">
        <i class="fas fa-home"></i> Home</nuxt-link>
      <span class="mx-2"><i class="fa fa-angle-right"></i></span>

      <!-- <nuxt-link :to="{ name: '' }" class="font-semibold text-blue text-sm">
        <span v-if="product.category.length > 0">{{ product.category[0].name }}</span>
      </nuxt-link> -->

      <nuxt-link :to="{
        name: 'categories-slug',
        params: {
          slug: product.category[0].slug,
          parentname: product.category[0].praentsName,
        },
      }" class="font-semibold text-blue text-sm">
        {{ product.category[0].name }}
      </nuxt-link>
    </div>
    <div class="flex flex-col min-h-screen bg-gray-100">
      <div class="main flex-wrap w-full flex">
        <div class="w-full container mx-auto bg-white">
          <div class="w-full flex my-2">
            <!-- <div class="w-2/5 flex border-r border-gray-500er justify-center mt-8">
              <gallery slug="slug" />
            </div> -->
            <!-- <div class="w-3/5 flex"> -->
            <div class="w-full flex">
              <productdetails slug="slug" />
            </div>
          </div>
        </div>
        <div class="w-full container mx-auto bg-white">
          <similarproducts slue="slug" />
        </div>
        <div class="w-full container mx-auto bg-white">
          <rating slug="slug" />
        </div>
        <div class="w-full container mx-auto bg-white">
          <div class="w-full flex justify-center">
            <reviews slug="slug" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gallery from "@/pages/products/gallery";
import productdetails from "@/pages/products/product_details";
import rating from "@/pages/products/rating";
import reviews from "@/pages/products/reviews";
import similarproducts from "@/pages/products/similarproducts";

export default {
  props: ["slug"],
  layout: "home",
  components: {
    gallery,
    productdetails,
    reviews,
    slug: "",
    rating,
    similarproducts,
    //productid:''
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data,
    };

    this.slug = params.slug;
  },
  methods: {},
};
</script>
