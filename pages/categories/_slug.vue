<template>
  <div>
    <div class="container mx-auto my-4">
      <a class="font-semibold text-blue text-sm" href="/">Home</a>
      <span class="mx-2">/</span>
      <a class="font-semibold text-blue text-sm">{{ categoryname }}</a>
      <span class="mx-2">/</span>
      <a class="font-semibold text-blue text-sm">{{ subcategory }}</a>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/4 lg:pr-8">
        <div class="bg-white rounded-lg shadow-md p-4 mt-4">
          <h2 class="text-lg font-bold mb-4">Filter Products</h2>
          <!-- brand filter start -->
          <div class="mb-4">
            <h3 class="text-md font-bold mb-2">Brand</h3>
            <ul class="list-none pl-4 overflow-auto max-h-96 h-auto scrollbarstyle-3">
              <li v-for="brand in brands" :key="brand.id">
                <label :for="`brand-${brand}`" class="cursor-pointer">
                  <input type="checkbox" :id="`brand-${brand}`" :value="brand" v-model="selectedBrand">
                  <span>{{ brand }}</span>
                </label>
              </li>
            </ul>
          </div>
          <!-- brand filter end -->


          <!-- Price Range start -->
          <div class="mb-4">
            <h3 class="text-md font-bold mb-2">Price Range</h3>
            <div class="flex items-center">
              <span class="text-gray-500 mr-2">₹</span>
              <input type="text" class="w-1/2 rounded-md border-gray-300 border p-2 text-gray-700" placeholder="Min"
                v-model="minPrice">
              <span class="text-gray-500 mx-2">-</span>
              <span class="text-gray-500 mr-2">₹</span>
              <input type="text" class="w-1/2 rounded-md border-gray-300 border p-2 text-gray-700" placeholder="Max"
                v-model="maxPrice">
            </div>
          </div>
          <!-- Price Range End -->


          <!-- Price Sort start -->
          <div>
            <h3 class="text-md font-bold mb-2">Sort By</h3>
            <select v-model="selectedSort" class="w-full rounded-md border-gray-300 border p-2 text-gray-700">
              <option value="">Default</option>
              <option value="price_asc">Price (low to high)</option>
              <option value="price_desc">Price (high to low)</option>
              <option value="rating">Rating</option>
              <!-- <option value="name_asc">Name (A to Z)</option>
            <option value="name_desc">Name (Z to A)</option> -->
            </select>
          </div>
          <!-- Price Sort End -->

        </div>
      </div>
      <div class="flex-1" v-if="products.length > 0">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 hover14 column" v-for="product in products" :key="product.id">
            <div class="bg-white rounded-lg shadow-md p-4" v-if="product.productgallery.length > 0">
              <div class="cardCircle p-4 shadow-inner">
            <i class="fa-duotone fa-shield-halved"></i>
            <div class="circle" @click="toggleFavorite(product.id)">
              <i class="fa-star"
                :class="{ 'fa-solid fa-heart': isInWishlist(product.id), 'fa-regular fa-heart': !isInWishlist(product.id) }"></i>
            </div>
          </div>
              <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }">
                <figure>
                  <img v-bind:src="rooturl + product.productgallery[0].imagepath" class="imgsizeproduct mb-4" />
                </figure>
              </nuxt-link>
              <!-- <h2 class="text-lg font-bold text-center">{{ product.name.slice(0, 60) }}</h2> -->
              <!-- <h3 class="py-2 text-2xl text-center">{{ product.name.slice(0, 30) }}</h3> -->
              <h3 class="py-2 text-2xl text-center">{{ product.slicename }}</h3>
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
              <div class="flex justify-center">
                <!-- <span class="text-lg font-bold text-gray-800 text-lg pb-5">{{ product.price }}</span> -->
                <!-- <p class="text-lg pb-5 text-gray-800">{{ product.price }}</p> -->
                <p class="text-lg pb-5 text-gray-600">{{ product.price }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- paginate -->
        <div class="flex">
          <paginate :page-count="totalPages" :click-handler="changePage" :prev-text="''" :next-text="''"
            :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
            :page-class="'mx-1.5 paginationitem'" :prev-class="'fa-solid fa-chevron-left paginationitem'"
            :next-class="'fa-solid fa-chevron-right paginationitem'" :disabled-class="'disabled'" :active-class="'active'"
            class="items-center h-[70px] text-4xl text-center py-5 my-5 flex mx-auto"></paginate>
        </div>
      </div>
      <div v-else>
        <p class="text-red-600 p-4">No Records Found...</p>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
      currentPage: 1,
      perPage: 12,
      totalProducts: 0,
      store: [],
      rooturl: process.env.SITEURL,
      total_rating: 5,
      products: [],
      sellers: [],
      stockavailable: 0,
      outofstock: 0,
      searchuserid: [],
      chkboxtype: [],
      useridlist: [],
      // page: 1,
      // page_count: 0,
      // total: '',
      open: false,
      productcount: 0,
      categoryname: this.$route.params.parentname,
      subcategory: this.$route.params.slug,
      selectedBrand: [],
      brands: [],
      selectedSort: "",
      minPrice: null,
      maxPrice: null,
      favorites: [],

    }
  },
  // middleware: [
  //    'redirectIfGuest'
  //  ],

  // async asyncData({ params, app }) {
  //   let response = await app.$axios.$get(`products?category=${params.slug}`)

  //   return {
  //     products: response.data,

  //     // page_count:response.meta.last_page,
  //     //total:response.meta.total,
  //     // productcount:response.data.length      
  //   }

  // },
  methods: {

    async getproduct(page = 1) {
      if (this.$route.params.slug == undefined) {
        this.subcategory = "";
      } else {
        this.subcategory = this.$route.params.slug;
      }
      if (this.minPrice == "") {
        this.maxPrice = null
      }
      if (this.maxPrice == "") {
        this.maxPrice = null
      }
      let response = await this.$axios
        .$get("/products", {
          params: {
            category: this.subcategory,
            brand: this.selectedBrand,
            sort: this.selectedSort,
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
            page: this.currentPage,
            per_page: this.perPage,
          },
        })
        .then((response) => {
          this.products = response.data;
          this.totalProducts = response.meta.total;
        });
    },
    isInWishlist(productId) {
      return this.favorites.some((wishlistItem) => wishlistItem.product_Id === productId);
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


    async getSellers() {

      let response = await this.$axios.$get('sellers');
      // console.log(response.data);
      this.sellers = response.data;
    },

    async searchPrice(priceval) {

      let response = await this.$axios.$get('products/pricefilter/' + priceval);
      // console.log(response.data);
      this.products = response.data;
    },
    async searchBrand(userid) {

      this.useridlist.push(userid);

      let response = await this.$axios.$get('products/searchbrand/' + userid);
      this.products = response.data;
    },
    productredirect(product) {
      this.$router.replace({
        name: 'products-slug',
        params: { slug: product.slug }
      })
    },
    async getBrands() {
      let response = await this.$axios.$get("getcategorybrands/" + this.subcategory);
      this.brands = response.brands;
    },
    changePage(page) {
      this.currentPage = page;
      this.getproduct();
    },
  },
  watch: {
    $route: "getproduct",
    selectedBrand: {
      handler: "getproduct",
      deep: true,
    },
    selectedSort: {
      handler: "getproduct",
      // deep: true,
      immediate: false,
    },
    minPrice: {
      handler: "getproduct",
      immediate: false,
    },
    maxPrice: {
      handler: "getproduct",
      immediate: false,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.perPage);
  }
},
  created() {
    this.getSellers();
    this.getBrands();
    this.getproduct();
    this.getfavoritelist();

  },

}
</script>
<style lang="css">
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
.pagination {
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.page-item {
  border: 2px solid;
  padding: 9px;
  margin-right: 1px;
}

.prev-text {
  background-color: #d8d8d8;
  padding: 9px;
  margin-right: 1px;
}

.next-text {
  background-color: #d8d8d8;
  padding: 9px;
  margin-right: 1px;
}

.disabled {}

.prev {
  background-color: #d8d8d8;
  padding: 9px;
  margin-right: 1px;
}

.next {
  background-color: #d8d8d8;
  padding: 9px;
  margin-right: 1px;
}

.page-item active {
  background-color: white;
  border: 2px solid #d8d8d8;
}
</style>

