<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-4xl text-center py-5 my-5">Featured Products</h1>
    </div>
    <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:px-[30px] xs:px-[0px]"
      v-if="products.length > 0">
      <div class="text-center shadow-lg rounded" v-for="product in products" :key="product.id">

        <div class="overflow-hidden hover14 column" v-if="product.productgallery.length > 0">

          <div class="cardCircle p-4 shadow-inner">
            <div class="circle" @click="toggleFavorite(product.id)">
              <i class="fa-star cursor-pointer	"
                :class="{ 'fa-solid fa-heart': isInWishlist(product.id), 'fa-regular fa-heart': !isInWishlist(product.id) } " ></i>
            </div>
          </div>
          <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }">
            <figure> <img v-bind:src="rooturl + product.productgallery[0].imagepath" class="imgsizeproduct"> </figure>
          </nuxt-link>
        </div>
        <h3 class="py-2 text-2xl">{{ product.slicename }}</h3>
        <div class="py-1 text-lg flex justify-center my-1">
          <div v-for="rating in total_rating" :key="rating.id">
            <div v-if="product.rate >= rating">
              <i class="fa fa-star ratingchecked text-xl"></i>
            </div>
            <div v-else class="mx-[2px]">
              <i class="fa fa-star ratingunchecked text-xl"></i>
            </div>
          </div>
          <p class="text-lg">({{ product.reviewcount }})</p>
        </div>
        <p class="text-lg pb-5 text-gray-600">{{ product.price }}</p>
      </div>
    </div>
    <div v-else>
      <p class="text-red-600 p-4">No Records Found...</p>
    </div>

    <div v-if="page_count > 1" class="flex">
      <paginate v-model="page" :page-count="page_count" :page-range="3" :margin-pages="1" :click-handler="getproduct"
        :prev-text="''" :next-text="''"
        :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
        :page-class="'mx-1.5 paginationitem'" :prev-link-class="'fa-solid fa-chevron-left paginationitem'"
        :next-link-class="'fa-solid fa-chevron-right paginationitem'" :active-class="'active'"
        class="items-center h-[70px] text-4xl text-center py-5 my-5 flex mx-auto">
      </paginate>
    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'home',
  data() {
    return {
      products: [],
      modvalue: 0,
      rooturl: process.env.SITEURL,
      page: 1,
      page_count: 0,
      total: '',
      total_rating: 5,
      favorites: [],
      // testingget: '',
    }
  },

  // middleware: [
  //   'redirectIfGuest'
  // ],
  methods: {
    isInWishlist(productId) {
      return this.favorites.some((wishlistItem) => wishlistItem.product_Id === productId);
    },
    async getproduct(page = 1) {
      let response = await this.$axios.$get('products?' + '&page=' + page);
      this.products = response.data;
      this.modvalue = this.products.length % 4;
      this.page_count = response.meta.last_page;
      this.total = response.meta.total;
    },
    async toggleFavorite(productID) {
      if (!this.$auth.loggedIn) {
        this.$router.replace({
          name: 'auth-signin'
        })
      }
      else {
        const response = await this.$axios.$post('favorite', {
          product_id: productID,
        });
        this.getproduct();
        this.getfavoritelist();
      }
    },
    async getfavoritelist() {
      let response = await this.$axios.$get('favorite/get');
      this.favorites = response.data;
    },
  },
  created() {
    this.getproduct()
    this.getfavoritelist();
  },

}
</script>
<style scoped>
.cardCircle {
  display: flex;
  position: absolute;
  z-index: 10;
}

.cardCircle i.fa-solid.fa-heart,
i.fa-regular.fa-heart,
i.fa.fa-thumbs-up {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 30px;
  color: #ed576d;
}

.fa-light {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 30px;
  color: #ed576d;
}

i.fa.fa-thumbs-up {
  color: #fff !important;
}

.circle {
  height: 50px;
  width: 50px;
  background-color: #f4d3d596;
  border-radius: 50%;
  display: flex;
  flex-direction: row;

}

.numberMore {
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #5d94ca;
  cursor: pointer
}

.p-0 {
  padding: 0;
}

.ml-20 {
  margin-left: 20px;
}

.imgsize {
  height: 80px;
  width: 50px;
}

.brandname {
  text-transform: capitalize;
  color: black;
  font-size: 14px;
  font-weight: bold;
}

.pname {
  color: black;
  font-size: 14px;
  margin-top: 5px;
}

.pprice {
  font-size: 14px;
  color: black;
  margin-top: 10px;
}
</style>