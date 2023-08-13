<template>
  <div>
    <div class="container mx-auto bg-white-100">
      <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full" v-if="product.product.productgallery.length > 0">
          <img v-bind:src="
            rooturl + product.product.productgallery[0].thumbnailimage
          " class="w-full rounded-lg sm:w-40" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center mx-2">
          <div class="flex items-center justify-between w-full pt-1">
            <nuxt-link class="md:text-3xl xs:text-xl font-black leading-none text-gray-800 dark:text-white" :to="{
              name: 'products-slug',
              params: { slug: product.product.slug },
            }">
              {{ product.product.name }}
            </nuxt-link>
            <div class="flex flex-row h-10 w-24 rounded-lg relative bg-transparent mt-1 ">
              <select aria-label="Select quantity" v-model="quantity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="0" v-if="product.quantity == 0">0</option>
                <option :value="x" v-for="x in product.stock_count" :key="x" :selected="x == product.quantity">
                  {{ x }}
                </option>
              </select>
            </div>
          </div>
          <p class="md:text-base xs:text-sm leading-3 text-gray-600 py-4 dark:text-white pt-2">
            {{ product.type }} : {{ product.name }}
          </p>
          <div class="flex items-center justify-between pt-5">
            <div class="flex itemms-center">
              <p class="text-base leading-3 underline text-gray-800 dark:text-white cursor-pointer md:text-base xs:text-sm"
                @click="addtofavorites(product.product.id)">
                Add to favorites
              </p>
              <p class="text-base leading-3 underline text-red-500 pl-5 cursor-pointer md:text-base xs:text-sm"
                @click.prevent="destroy(product.id)">
                Remove
              </p>
            </div>
            <p class="text-2xl font-black leading-none text-gray-800 dark:text-white md:text-base xs:text-sm">
              {{ product.total }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      rooturl: process.env.SITEURL,
    };
  },
  computed: {
    quantity: {
      get() {
        return this.product.quantity;
      },
      set(quantity) {
        this.update({ productId: this.product.id, quantity });
      },
    },
  },
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      destroy: "cart/destroy",
      update: "cart/update",
      getCart: "cart/getCart",
    }),
    addtofavorites(productid) {
      let response = this.$axios.$post('favorite/add/' + productid).then((response) => {
        if (response.message == "Added Successfully") {
          this.$router.replace({
            name: 'wishlist'
          })
        }

      }).catch((error) => {
      });


      // if(response.message=='Added Successfully'){

      //   this.$router.replace({
      //     name: 'wishlist'
      //   })
      // }
    }
  },
};
</script>
