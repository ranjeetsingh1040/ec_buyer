<template>
  <div class="flex flex-col lg:flex-row lg:p-7">
    <div class="lg:w-1/4 lg:pr-8">
      <div class="bg-white rounded-lg shadow-md p-4 mt-4">
        <h2 class="text-lg font-bold mb-4">Filter Products</h2>
        <!-- brand filter start -->
        <div class="mb-4">
          <h3 class="text-md font-bold mb-2">Brand</h3>
          <ul class="list-none pl-4 overflow-auto max-h-96 h-auto scrollbarstyle-3">
            <li v-for="brand in brands" :key="brand.id">
              <label :for="`brand-${brand}`" class="cursor-pointer text-gray-400">
                <input type="checkbox" class="accent-red-500" :id="`brand-${brand}`" :value="brand" v-model="selectedBrand">
                <span class="accent-red-500 text-lg ">{{ brand }}</span>
              </label>
            </li>
          </ul>
        </div>
        <!-- brand filter end -->


        <!-- Category filter start -->
        <div class="mb-4">
          <h3 class="text-md font-bold mb-2">Categories</h3>
          <ul class="list-none pl-4 overflow-auto max-h-96 h-auto scrollbarstyle-3">
            <li v-for="category in categories" :key="category.id">
              <label :for="`category-${category.slug}`" class="cursor-pointer text-gray-400">
                <input type="checkbox" :id="`category-${category.slug}`" :value="category.slug"
                  v-model="selectedCategory" class="accent-red-500">
                <span>{{ category.name }}</span>
              </label>
            </li>
          </ul>
        </div>
        <!-- Category filter end -->

        <!-- Variation filter start -->
        <div class="mb-4">
          <h3 class="text-md font-bold mb-2">Variation</h3>
          <ul class="list-none pl-4 overflow-auto max-h-96 h-auto scrollbarstyle-3">
            <li v-for="variation in attribute" :key="variation">
              <label :for="`variation-${variation}`" class="cursor-pointer text-gray-400		">
                <input type="checkbox" :id="`variation-${variation}`" :value="variation" v-model="selectedVariation" class="accent-red-500	">
                <span>{{ variation }}</span>
              </label>
            </li>
          </ul>
        </div>
        <!-- Variation filter end -->



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
      </div>
    </div>
    <div class="flex-1" v-if="products.length > 0">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-3 hover14 column" v-for="product in products" :key="product.id">
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
</template>


<script>
import { mapActions } from "vuex";
// import Paginate from 'vuejs-paginate'
export default {
  layout: "home",
  //props:['searchq'],
  data() {
    return {
      currentPage: 1,
      perPage: 12,
      totalProducts: 0,
      selectedBrand: [],
      selectedCategory: [],
      selectedVariation: [],
      selectedSort: "",
      products: [],
      brands: [],
      attribute: [],
      categories: [],
      minPrice: null,
      maxPrice: null,
      sellers: [],
      stockavailable: 0,
      outofstock: 0,
      searchuserid: [],
      chkboxtype: [],
      useridlist: [],
      rooturl: process.env.SITEURL,
      total_rating: 5,
      favorites: [],
      // modvalue: 0,
      // page: 1,
      // page_count: 0,
      // total: "",
      // currentPage: 1,
      open: false,
      //searchparam:this.$route.params.searchq, //params
      searchparam: this.$route.query.search, //query
    };
  },
  watch: {
    "$route.query.search": function () {
      this.getproduct();
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.perPage);
    },
    cheapestprice: function () {
      return this.products.reduce(function (item) {
        return a.price - b.price;
      }, 0);
    },
  },
  methods: {
    async getproduct(page = 1) {
      if (this.$route.query.search == undefined) {
        this.searchparam = "";
      } else {
        this.searchparam = this.$route.query.search;
      }
      if (this.minPrice == "") {
        this.maxPrice = null
      }
      if (this.maxPrice == "") {
        this.maxPrice = null
      }
      // let response = await this.$axios.$get('products?search=' + this.searchparam + '&page=' + page);
      let response = await this.$axios
        .$get("/products", {
          params: {
            search: this.searchparam,
            brand: this.selectedBrand,
            sort: this.selectedSort,
            minPrice: this.minPrice,
            maxPrice: this.maxPrice,
            selectcategory: this.selectedCategory,
            variation: this.selectedVariation,
            page: this.currentPage,
            per_page: this.perPage,
            // test: [1,2,3,4],
            // minPrice: this.minPrice,
            // maxPrice: this.maxPrice,
          },
        })
        .then((response) => {
          this.products = response.data;
          this.totalProducts = response.meta.total;
          // console.log("Productlist all", this.products)
          // this.modvalue = this.products.length % 4;
          // this.page_count = response.meta.last_page;
          // this.total = response.meta.total;
          // this.brands = []
          // this.categories = []
          // this.getBrands();
          // this.getCategories();
        });
      // var k=0;
      // var j=0;
      // for (var i = 0; i <this.products.length; i++) {

      //    var instock=this.products[i].in_stock;
      //    if(instock==true){
      //      k=k+1;
      //    }
      //    else{
      //     j=j+1;
      //    }
      //    this.stockavailable=k;
      //    this.outofstock=j;

      // }
    },
    // getBrands() {
    //   for (var i = 0; i < this.products.length; i++) {
    //     if (!this.brands.includes(this.products[i].brand)) {
    //       this.brands.push(this.products[i].brand);
    //     }
    //   }
    // },
    // getCategories() {
    //   for (var i = 0; i < this.products.length; i++) {
    //     if (!this.categories.includes(this.products[i].categorychild)) {
    //       this.categories.push(this.products[i].categorychild);
    //     }
    //   }
    // },
    // async getCategories() {
    //   let response = await this.$axios.$get("categories");
    //   this.categories = response.data;
    //   console.log("category", response.data);
    // },
    async getcategoryChildren() {
      let response = await this.$axios.$get("getcategorychildren");
      this.categories = response.subcategory;
    },

    async getBrands() {
      let response = await this.$axios.$get("brands");
      this.brands = response.brands;
      this.morebrands = response.moreBrand;
    },
    async getAttributeSearch() {
      let response = await this.$axios.$get("getAttributeSearch");
      this.attribute = response.attribute;
      // console.log("ddjkafjdkljfklsdfjklasdjkl11", this.attribute);
    },
    changePage(page) {
      this.currentPage = page;
      this.getproduct();
    },
    toggle() {
      this.open = !this.open;
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
      let response = await this.$axios.$get("sellers");
      this.sellers = response.data;
    },
    async searchPrice(priceval) {
      let response = await this.$axios.$get("products/pricefilter/" + priceval);
      this.products = response.data;
    },
    // productredirect(product) {
    //   this.$router.replace({
    //     name: "products-slug",
    //     params: { slug: product.slug },
    //   });
    // },

    async searchBrand(userid) {
      this.useridlist.push(userid);
      // for (var i = 0; i < this.useridlist.length; i++) {
      //   if(this.$refs["chkboxtype[index]"][i].checked==true){
      //     this.searchuserid.push(this.$refs["chkboxtype[index]"][i]._value);
      //        // if(userid==''){
      //        // }
      //        // else{
      //        //   this.searchuserid =this.$refs["chkboxtype[index]"][i]._value + ',' + userid;
      //        // }
      //   }
      //   // if(this.$refs["chkboxtype[index]"][i].checked==false){
      //   //   this.searchuserid.splice(i,this.$refs["chkboxtype[index]"][i]._value);
      //   // }
      // }

      let response = await this.$axios.$get("products/searchbrand/" + userid);
      this.products = response.data;
    },
    async nextPage() {
      this.currentPage++;
      await this.getproduct();
    },
    async previousPage() {
      this.currentPage--;
      await this.getproduct();
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "getproduct",
    selectedBrand: {
      handler: "getproduct",
      deep: true,
      // immediate: false,
    },
    selectedCategory: {
      handler: "getproduct",
      deep: true,
    },
    selectedVariation: {
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

  created() {
    this.getproduct();
    this.getBrands();
    this.getcategoryChildren();
    this.getAttributeSearch();
    this.getSellers();
    this.getfavoritelist();
    // this.getCategories();
  },
};
</script>
<style scoped>
.scrollbarstyle-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ;
}

.scrollbarstyle-3::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scrollbarstyle-3::-webkit-scrollbar-thumb {
  background-color: #f02640;
  border-radius: 10px;
}

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

<!-- <style scoped>
/* *, */
::after,
::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

input,
select {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

select {
  text-transform: none;
}

input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder {
  opacity: 1;
  color: #9ca3af;
}

[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

svg {
  display: block;
  vertical-align: middle;
}

[hidden] {
  display: none;
}

.a {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;
}

@media (min-width: 400px) {
  .a {
    max-width: 400px;
  }
}

@media (min-width: 540px) {
  .a {
    max-width: 540px;
  }
}

@media (min-width: 720px) {
  .a {
    max-width: 720px;
  }
}

@media (min-width: 960px) {
  .a {
    max-width: 960px;
  }
}

@media (min-width: 1140px) {
  .a {
    max-width: 1140px;
  }
}

@media (min-width: 1320px) {
  .a {
    max-width: 1320px;
  }
}

.b {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.b,
.c {
  position: absolute;
}

.d {
  position: relative;
}

.h {
  top: 1.25rem;
}

.l {
  bottom: 0;
}

.m {
  top: -1.25rem;
}

.w {
  z-index: 10;
}

.x {
  z-index: -10;
}

._ {
  margin-left: -1rem;
  margin-right: -1rem;
}

.ia {
  margin-bottom: 2rem;
}

.la {
  margin-right: 1rem;
}

.ua {
  margin-bottom: 0.25rem;
}

._a {
  margin-left: auto;
}

.gb {
  display: flex;
}

.kb {
  height: 1.25rem;
}

._b {
  height: 0.75rem;
}

.bc {
  width: 100%;
}

.dc {
  width: 1.25rem;
}

._c {
  max-width: 445px;
}

.id {
  max-width: 360px;
}

.sd {
  cursor: pointer;
}

.td {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.zd {
  align-items: center;
}

._d {
  justify-content: flex-end;
}

.ae {
  justify-content: center;
}

.ee> :not([hidden])~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.ie {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ke {
  border-radius: 0.5rem;
}

.le {
  border-radius: 0.25rem;
}

.qe {
  border-width: 1px;
}

.xe {
  border-bottom-width: 1px;
}

.gf {
  --tw-border-opacity: 1;
  border-color: rgb(231 231 231 / var(--tw-border-opacity));
}

.kf,
.mf,
.of,
.pf,
.qf {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.mf,
.of,
.pf,
.qf {
  background-color: rgb(33 43 54 / var(--tw-bg-opacity));
}

.of,
.pf,
.qf {
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

.pf,
.qf {
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.qf {
  background-color: rgb(19 194 150 / var(--tw-bg-opacity));
}

.fg {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.gg {
  padding-left: 1rem;
  padding-right: 1rem;
}

.mg {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}

.pg {
  padding-left: 2rem;
  padding-right: 2rem;
}

.ch {
  padding-top: 6rem;
}

._h {
  padding-right: 0.75rem;
}

.fi {
  font-size: 1rem;
  line-height: 1.5rem;
}

.oi {
  font-weight: 600;
}

.vi,
.yi {
  --tw-text-opacity: 1;
  color: rgb(33 43 54 / var(--tw-text-opacity));
}

.yi {
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.gj {
  opacity: 0;
}

/* body {
  font-family: Inter, sans-serif;
} */

input:checked~.dot {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

.box-select-1:checked~label .box,
input#checkboxLabelOne:checked~.box,
input:checked~.box {
  --tw-border-opacity: 1;
  border-color: rgb(48 86 211 / var(--tw-border-opacity));
}

.box-select-1:checked~label .box .icon,
input#checkboxLabelThree:checked~.box span,
input#checkboxLabelTwo:checked~.box span,
input[type="checkbox"]:checked~.box span,
input[type="radio"]:checked~.box span {
  opacity: 1;
}

.color:checked~label span {
  height: 0.5rem;
  width: 0.5rem;
}

.box-select-1:checked~label .box {
  --tw-bg-opacity: 1;
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

@media (max-width: 540px) {
  .Productfilter {
    display: flex !important;
    flex-direction: column !important;
  }
}

@media (min-width: 540px) {
  .gl {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 720px) {
  .xl {
    border-left-width: 1px;
    border-right-width: 1px;
  }

  ._l {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 960px) {
  .zm {
    display: none;
  }

  ._m\/12 {
    width: 58.333333%;
  }

  .bn\/12 {
    width: 100%;
  }

  .en\/2 {
    width: 50%;
  }

  .en\/4 {
    width: 25%;
  }

  .en\/3 {
    width: 33.333333%;
  }

  .un {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .jo {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1140px) {
  .zo\/12 {
    width: 100%;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .pp {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1320px) {
  .\32xl\:ud-mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .\32xl\:ud-w-5\/12 {
    width: 41.666667%;
  }

  .\32xl\:ud-w-10\/12 {
    width: 83.333333%;
  }

  .\32xl\:ud-min-w-\[325px\] {
    min-width: 325px;
  }

  .\32xl\:ud-max-w-\[1320px\] {
    max-width: 1320px;
  }

  .\32xl\:ud-space-x-5> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.25rem * var(--tw-space-x-reverse));
    margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .\32xl\:ud-px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
}

.checkedsm {
  color: orange;
}

.uncheckedsm {
  color: black;
}

.scrollbar {
  margin-left: 22px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

#wrapper {
  text-align: center;
  margin: auto;
}

/*
 *  STYLE 3
 */

#style-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#style-3::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #f02640;
  border-radius: 10px;
}

/*
 *  STYLE 4
 */
</style> -->
