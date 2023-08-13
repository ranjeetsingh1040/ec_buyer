<template>
  <div class="section w-full container mx-auto my-4">
    <h1 class="title is-4 text-center my-4">Your cart</h1>
    <div class="w-full">
      <article class="message" v-if="products.length">
        <CartOverview />
      </article>
      <p v-else class="border border-gray-500 p-4">
        Your cart is empty
      </p>
      <div class="flex justify-end">
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty"
          class="self-center rounded-full w-64 text-center button is-fullwidth is-info is-medium p-3 no-underline btnstyle h-12">Checkout
          <img src="/images/right-arrow.svg" class="self-center ml-2 h-3 inline">
        </nuxt-link>
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