<template>
  <div>
    <div class="container mx-auto bg-white-100">
      <div class="flex my-4 border-b border-gray-500 pb-2 mx-auto px-6">
        <div class="w-1/6 p-1 flex justify-center mr-4" v-if="product.product.productgallery.length > 0">
          <img v-bind:src="rooturl +  product.product.productgallery[0].thumbnailimage" class="w-full rounded-lg sm:w-40">
        </div>
        <div class="w-1/2 mr-4" style=" overflow-x: auto; ">
          <nuxt-link class="text-black nlink" :to="{ name: 'products-slug', params: { slug: product.product.slug } }"
            style=" font-weight: bold;">
            {{ product.product.name }}
          </nuxt-link>
        </div>
        <div class="w-1/4 mr-4">
          <p class="text-black">{{ product.type }} / {{ product.name }}</p>
        </div>
        <!--   <div class="w-1/6 mr-4">
              <select class="border border-gray-500 p-3 w-1/2">
                  <option>Size</option>
                  <option>M</option>
              </select>
          </div> -->
        <div class="w-1/4 mr-4">
          <select v-model="quantity" class="border border-gray-500 p-3 w-1/2 ">
            <option value="0" v-if="product.quantity == 0" >0</option>
            <option :value="x" v-for="x in product.stock_count" :key="x" :selected="x == product.quantity" >
              {{ x }}
            </option>
          </select>
        </div>
        <div class="w-1/3 mr-4">
          <p class="text-shop-primary font-semibold text-2xl ctc">{{ product.total }}</p>
        </div>
        <div class="w-1/6 mr-4 flex justify-end">
          <a href="" class="no-underline text-bold text-black" @click.prevent="destroy(product.id)">X</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      rooturl: process.env.SITEURL,
    }
  },
  computed: {
    quantity: {
      get() {
        return this.product.quantity
      },
      set(quantity) {
        this.update({ productId: this.product.id, quantity })
      }
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions({
      destroy: 'cart/destroy',
      update: 'cart/update',
      getCart: 'cart/getCart',
    })
  }
}
</script>