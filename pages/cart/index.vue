<template>
  <div class="section w-full container mx-auto my-4">
    <!-- <p
      class="lg:text-5xl text-3xl text-center md:py-10 xs:py-p-0 font-black leading-10 text-gray-800 dark:text-white pt-3">
      Your Cart</p> -->
    <div class="w-full">
      <article class="message" v-if="products.length">
        <CartOverview />
      </article>
<!-- 
      <div v-else class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Your cart i empty.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    
        </span>
      </div> -->

      <div v-else class=" p-4 text-center pt-44	">
        
        <h3 class="text-2xl"> Your cart is empty </h3>
        <p class="text-sm">Add items to it.</p>
        <nuxt-link :to="{ name: 'home-Product' }">
          <button class="mt-4	 block w-40  mx-auto  bg-[#f02640]  text-white rounded-md px-5 py-2 font-semibold">SHOP NOW</button>
        </nuxt-link>

      </div>
      <!-- <div class="flex justify-end">
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty"
          class="self-center rounded-full w-64 text-center button is-fullwidth is-info is-medium p-3 no-underline btnstyle h-12">Checkout
          <img src="/images/right-arrow.svg" class="self-center ml-2 h-3 inline">
        </nuxt-link>
      </div> -->

      <div class="flex justify-center space-x-2">
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty"
          class="sm:w-full h-16 text-2xl font-bold px-6 text-white bg-red-600 rounded-lg md:w-9/12 my-16 text-center p-[15px]">
          Proceed to Checkout</nuxt-link>
        <!-- <button class="sm:w-full h-16 text-2xl font-bold px-6 text-white bg-red-600 rounded-lg md:w-9/12 my-16">Proceed
          to Checkout</button> -->
      </div>


    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CartOverview from '@/components/cart/CartOverview'
export default {
  layout: 'home',
  data() {
    return {
      refresh: false
    }
  },
  components: {
    CartOverview
  },
  middleware: [
    'redirectIfGuest'
  ],
  computed: {
    ...mapGetters({
      empty: 'cart/empty',
      products: 'cart/products',
    })
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      flash: 'alert/flash'
    }),
  },
  created() {
    this.getCart();
  }
}
</script>