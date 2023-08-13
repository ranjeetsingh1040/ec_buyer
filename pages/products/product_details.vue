<template>
  <div class="bg-white">

    <div class="pt-6">
      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 hidden sm:flex hover14 column">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <figure> <img v-bind:src="p_imgage0" alt="" class="h-full w-full object-cover object-center imgproductsize1" />
          </figure>
        </div>
        <div class="lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <figure> <img v-bind:src="p_imgage1" alt="" class="imgproductsize2" /> </figure>
          </div>
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <figure> <img v-bind:src="p_imgage2" alt="" class="imgproductsize2" /> </figure>
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <figure> <img v-bind:src="p_imgage3" alt="" class="imgproductsize1" /> </figure>
        </div>
      </div>


      <!-- Mobile Carousel Start -->
      <div class="sm:hidden w-full flex border-r border-gray-500er justify-center mt-8">
        <gallery slug="slug" />
      </div>
      <!-- Mobile Carousel End -->

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">


          <!-- Reviews and Favorite-->
          <div class="w-full flex my-2 mt-8">
            <div class="text-sm mr-8 flex">
              <div v-for="rating in total_rating" :key="rating.id">
                <div v-if="product.rate >= rating">
                  <img src="/images/star_half.svg" class="h-4" />
                </div>
                <div v-else class="mx-[2px]">
                  <img src="/images/star.svg" class="h-4" />
                </div>
              </div>
            </div>
            <nuxt-link :to="{
              name: 'rating-productid',
              params: { productid: product.id },
            }" class="text-sm text-red-400 mr-2 border-r border-red-500 pr-2">
              Be the first review
            </nuxt-link>

            <button @click="toggleFavorite(product.id)" v-if="$auth.loggedIn">
              <span v-if="isInWishlist(product.id)">
                <i class="fa-solid fa-heart addToFavfill"></i>
              </span>
              <span v-else>
                <i class="fa-regular fa-heart addToFavblank"></i>
              </span>
            </button>
          </div>

          <h2 class="sr-only">Product information</h2>
          <p class="text-xl tracking-tight text-gray-800 capitlize">{{ product.brand }} </p>
          <p class="text-3xl tracking-tight text-gray-800 my-4">{{ product.price }} </p>



          <!-- Sizes -->
          <div class="my-8">
            <div class="flex grid grid-cols-2 md:grid-cols-3 gap-4" v-for="variation in product.variations"
              :key="variation.id">




              <div v-for="productvariation in variation">
                <button :value="productvariation.id" @click="test(productvariation.id, productvariation.price)" class="w-full p-3 text-gray-800 border-2 focus:ring-2 focus:ring-[#000] rounded-lg p-1 w-[90px] text-base hover:bg-[#000] 
                        hover:text-white" v-if="productvariation.name !== 'no variation'">
                  <!-- class="w-full text-gray-800 border-2 focus:ring-2 focus:ring-[#f02640] rounded-md"> -->
                  {{ productvariation.name }}
                </button>
              </div>
            </div>
          </div>

          <!-- <div class="mt-5">
            <div class="flex" v-for="variation in product.variations" :key="variation.id">
              <div class="my-2 mx-2 flex">
                <div v-for="productvariation in variation">
                  <button :value="productvariation.id" @click="test(productvariation.id, productvariation.price)"
                    class="text-black focus:ring-2 focus:ring-black font-medium rounded-lg text-sm mx-2">
                    {{ productvariation.name }}
                  </button>
                </div>
              </div>
            </div>
          </div> -->

          <div v-if="success != null" class="w-full my-4 bg-green-500 p-4 flex justify-between" id="success-alert ">
            <p class="text-white ">{{ success }}</p>
            <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()" />
          </div>
          <!-- <div v-if="failure != null" class="w-full my-4 bg-red-500 p-4 flex justify-between" id="failure-alert">
            <p class="text-white ">{{ failure }}</p>
            <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="cancelclose()" />
          </div> -->
          <div v-if="failure != null" id="alert-2"
            class="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">
              {{ failure }}
            </div>
            <button type="button" @click="cancelclose()"
              class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-2" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

          <!-- <div class="w-full flex">
            <div class="text-sm mr-8 flex">
              <p class="text-xl tracking-tight text-gray-800">Stock:{{ product.stock_count }}</p>
            </div>
            <p class="text-xl tracking-tight text-gray-800" v-if="product.in_stock == false">OUT OF STOCK</p>
          </div> -->

          <div class="w-full flex">
            <div class="text-sm mr-8 flex">
              <p class="text-base tracking-tight text-gray-800">Stock:{{ product.stock_count }}</p>
            </div>
            <p class="text-xl tracking-tight text-red-900 ml-10 font-bold" v-if="product.in_stock == false">OUT OF STOCK
            </p>
          </div>
          <div class="w-full flex">
            <div class="text-sm mr-8 flex">
              <p class="text-base tracking-tight text-gray-800">Store Name:</p>
            </div>
            <p class="text-base tracking-tight text-gray-800">{{ product.store_name }}</p>
            <!-- <p>{{product.sellerbusinessname}}</p> -->
          </div>
          <!-- <div>
            <i class="fa-solid fa-store"></i>{{ product.store_name }}
          </div> -->
          <div class="w-full flex">
            <div class="text-sm mr-8 flex">
              <p class="text-base tracking-tight text-gray-800">Seller Name:</p>
            </div>
            <p class="text-base tracking-tight text-gray-800">{{ product.user_name }}</p>
            <!-- <p>{{product.sellerbusinessname}}</p> -->
          </div>




          <button type="submit" v-if="product.in_stock == true"
            class="mt-10 flex w-full items-center justify-center rounded-lg border border-transparent bg-[#f02640] py-3 px-8 text-2xl text-white text-lg font-bold"
            v-show="showaddcart" @click="addcart()">
            Add to Cart
          </button>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-800 text-justify">
                {{ product.description }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script>
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
</script> -->
<script>
import gallery from '@/pages/products/gallery'
import { mapActions } from "vuex";

export default {
  props: ["slug"],

  data() {
    return {
      favorites: [],
      product: [],
      item1: true,
      item2: false,
      item3: false,
      open: false,
      tab: "item1",
      params: this.$route.params.slug,
      rooturl: process.env.SITEURL,
      products: {},
      productvariations: [],
      variationlength: 0,
      variationname: "",
      novariationid: 0,
      total_rating: 5,
      selectcolor: "",
      seller_id: "",
      p_imgage0: "",
      p_imgage1: "",
      p_imgage2: "",
      p_imgage3: "",
      form: {
        avaliable: null,
        pincode: "",
      },
      avaliable: null,
      pincodelists: [],
      showaddcart: true,
      success: null,
      failure: null,
      productattribute: "",
    };
  },
  components: {
    gallery,
  },
  methods: {
    ...mapActions({
      flash: "alert/flash",
    }),
    settab(tabname) {
      this.tab = tabname;
    },
    // getvariation(variation){
    //   this.color=variation.name;
    //   document.querySelector(".dynamic").style.background = this.color;

    // },
    close() {
      this.success = null;
    },
    cancelclose() {
      this.failure = null;
    },
    async getproduct() {
      let response = await this.$axios.$get(`products/` + this.params);
      this.product = response.data;
      this.p_imgage0 = this.rooturl + this.product.productgallery[0].imagepath;
      this.p_imgage1 = this.rooturl + this.product.productgallery[1].imagepath;
      this.p_imgage2 = this.rooturl + this.product.productgallery[2].imagepath;
      this.p_imgage3 = this.rooturl + this.product.productgallery[3].imagepath;
      this.seller_id = this.product.user;
      //  this.seller_id=this.product.user.id;
      // console.log("p_detaillength",this.product.variations[""].length)
      // if (this.product.variations.length > 0) {
      if (this.product.variations[""][0].name == 'no variation') {
        //in json output the variation value is "" :{} array
        this.variationlength = this.product.variations[""].length;
        for (var i = 0; i < this.variationlength; i++) {
          this.variationname = this.product.variations[""][i].name;
          this.novariationid = this.product.variations[""][i].id;
          // console.log("p_detail",this.novariationid,this.variationname)
        }
      }
    },
    async toggleFavorite(productID) {
      const response = await this.$axios.$post('favorite', {
        product_id: productID,
      });
      this.getproduct();
      this.getfavoritelist();
    },
    async getfavoritelist() {
      let response = await this.$axios.$get('favorite/get');
      this.favorites = response.data;
    },
    isInWishlist(productId) {
      return this.favorites.some((wishlistItem) => wishlistItem.product_Id === productId);
    },
    size: function (id) {
      this.productvariations.push({ id: id, quantity: 1 });
    },
    color: function (id) {
      this.productvariations.push({ id: id, quantity: 1 });
    },
    sizechanged($event) {
      //  alert($event.target.value);
      this.$emit("input", $event.target.value);
      this.productvariations.push({ id: $event.target.value, quantity: 1 });
    },
    colorchanged($event) {
      // alert($event.target.value)
      this.$emit("input", $event.target.value);
      // alert($event.target.value)
      this.productvariations.push({ id: $event.target.value, quantity: 1 });
    },

    async addcart() {
      if (this.variationname.toLowerCase() !== "no variation") {
        if (this.productattribute == "") {
          this.failure = "Select any one size or color";
        } else {
          this.productvariations.push({
            id: this.productattribute,
            quantity: 1,
          });
          this.products["products"] = this.productvariations;

          var self = this;
          let response = await this.$axios
            .$post("cart", this.products)
            .then((response) => {
              this.flash = "added";
              this.$nuxt.$emit("getcart", true);
              this.$router.replace({
                name: "cart",
              });
            })
            .catch(function (error) {
              if (error.response.status == 401) {
                self.failure = "Please Signin";
              }
            });
        }
      } else {
        this.productvariations.push({ id: this.novariationid, quantity: 1 });
        this.products["products"] = this.productvariations;

        let response = await this.$axios
          .$post("cart", this.products)
          .then((response) => {
            this.flash = "added";
            this.$nuxt.$emit("getcart", true);
            this.$router.replace({
              name: "cart",
            });
          })
          .catch(function (error) {
            // if(error.message=="Request failed with status code 401"){
            //  this.$router.replace({
            //           name: 'index',
            //          })
            // }
          });
      }
      // this.products['products'] =[
      //   { "id":this.product.productvariations[i].id ,"quantity":2 }];
      // this.products['products']=[{ "id":3 ,"quantity":2 }];
    },
    checkpincode() {
      this.getpincodeavaliable();
    },
    async getpincodeavaliable() {
      let response = await this.$axios.$get(
        "settings/pincodeavailable/" + this.seller_id + "/" + this.form.pincode
      );

      this.pincodelists = response;

      if (this.pincodelists.pincode == this.form.pincode) {
        this.form.avaliable = this.pincodelists.pincode;
        this.avaliable =
          "Generally Delivered in " + this.pincodelists.delivered + " days";
        this.showaddcart = true;
      } else {
        this.form.avaliable = null;
        this.avaliable = "Not Avaliable";
        this.showaddcart = false;
      }
      // if(this.pincodelists.length>0){
      //   for (var i =0;i<this.pincodelists.length;i++) {
      //     this.form.avaliable=this.pincodelists[i].pincode;
      //      this.avaliable="Generally Delivered in " + this.pincodelists[i].delivered + " days";
      //      this.showaddcart=true;
      //   }
      //  }
    },
    async test(id, price) {
      this.productattribute = id;
      this.product.price = price;
    }
  },
  created() {
    this.getproduct();
    this.getfavoritelist();
  },
};
</script>
<style scoped>
.add_hover:hover {
  border-radius: 50px;
  border-color: #f68c23 !important;
  transition: all 0.3s ease 0s;
  background-color: #ff5139;
}

.buy_hover:hover {
  border-radius: 50px;
  border-color: black !important;
  transition: all 0.3s ease 0s;
  background-color: black;
}

.active {
  color: red;
}

.imgproductsize1 {
  width: 384px;
  height: 544px;
}

.imgproductsize2 {
  width: 384px;
  height: 256px;
}

.addToFavfill {
  font-size: 25px;
  color: #f02640;
  cursor: pointer;
}

.addToFavblank {
  font-size: 25px;
  cursor: pointer;
}
</style>
