<template>
  <div>
    <div class="w-full p-8">
      <div v-if="success != null" class="w-1/2 my-4 bg-green-500 p-4" id="success-alert">
        <p class="text-white">{{ success }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()" />
      </div>
      <div v-if="failure != null" class="w-full my-4 bg-red-500 p-4" id="failure-alert">
        <p class="text-white">{{ failure }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="cancelclose()" />
      </div>
      <div class="w-full flex flex-wrap border-b border-gray-500er pb-2">
        <div class="w-full flex justify-between my-2">
          <h1 class="text-black text-5xl">{{ product.name }}</h1>
          <img src="~/static/assets/images/heart.svg" class="h-6" />
        </div>
        <div class="w-full flex my-2">
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
          }" class="no-underline text-sm text-blue mr-2 border-r border-gray-500er pr-2">
            Be the first review
          </nuxt-link>
          <a href="#" class="no-underline text-sm text-blue">Have a question?</a>
        </div>
      </div>
      <div class="border-b border-gray-500er py-2">
        <div>
          <div class="w-full flex my-2">
            <p class="text-grey">
              MRP.
              <strike>
                <span>{{ product.price }} </span>
              </strike>
              &nbsp; <span> (Inclusive of all taxes)</span>
            </p>
          </div>
          <div class="w-full flex my-2">
            <h4 class="text-black text-bold text-lg">
              <span class="text-2xl pb-5">{{ product.price }} </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="my-2 flex w-full justify-between">
        <div class="flex" v-for="variation in product.variations" :key="variation.id">
          <div class="flex w-full">
            <p class="mr-16 self-center">Stock: {{ product.stock_count }}</p>
            <p class="mr-16 self-center" v-if="product.in_stock == false">
              Stock: OUT OF STOCK
            </p>
          </div>

          <div class="flex">
            <div>
              <div class="select is-fullwidth">
                <select id="countries" v-model="productattribute"
                  class="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>select</option>
                  <option v-for="productvariation in variation" :value="productvariation.id"
                    :key="productvariation.name">
                    {{ productvariation.name }}-{{ productvariation.price }}
                  </option>
                </select>

                <!-- <select name="" id="" class="w-48" v-model="productattribute" style="height: 30px">
                  <option value="">select</option>
                  <option v-for="productvariation in variation" :value="productvariation.id"
                    :key="productvariation.name">
                    {{ productvariation.name }}-{{ productvariation.price }}
                  </option>
                </select> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="w-full flex my-5">
        <div class="w-1/6 font-semibold">
          Color:
        </div>
        <div class="w-4/5 flex">
          <div class="w-1/6" v-for="i in 5">
            <button type="button" class="pr-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Primary</button>
          </div>
                 </div>
      </div>
      <div class="w-full flex my-5">
        <div class="w-1/6 font-semibold">
          Size:
        </div>
        <div class="w-4/5 flex">
          <div class="w-1/6"> 45
          </div>
          <div class="w-1/6"> 21
          </div>
          <div class="w-1/6"> 25
          </div>
          <div class="w-1/6"> 99
          </div>
          <div class="w-1/6"> 75
          </div>
        </div>
      </div> -->

      <div class="w-full flex justify-center mt-6" v-if="product.in_stock == true">
        <button
          class="no-underline uppercase text-white secondary p-3 text-sm w-full text-center font-semibold rounded-full hover:bg-black cbc"
          v-show="showaddcart" @click="addcart()">
          Add to cart
        </button>
      </div>
      <div class="flex mt-4 items-center" v-if="product.in_stock == true">
        <div class="w-1/6 mr-4">
          <p class="custom-font">Delivery</p>
        </div>
        <div class="w-5/6">
          <div class="flex">
            <input type="text" maxlength="6" size="6" placeholder="Enter Pincode"
              class="text-sm w-1/2 lg:w-1/3 bg-white p-2 custom-font border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="form.pincode" />
            <div class="bg-black text-sm px-4 py-2">
              <button class="text-white custom-font text-lg" @click="checkpincode">
                Check
              </button>
            </div>
            <p class="ml-4 text-sm text-grey flex self-center">
              <span class="ml-4 text-sm text-grey flex self-center">{{
                this.avaliable
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
</script>
<script>
import { mapActions } from "vuex";

export default {
  props: ["slug"],

  data() {
    return {
      product: [],
      item1: true,
      item2: false,
      item3: false,
      open: false,
      tab: "item1",
      params: this.$route.params.slug,
      products: {},
      productvariations: [],
      variationlength: 0,
      variationname: "",
      novariationid: 0,
      total_rating: 5,
      selectcolor: "",
      seller_id: "",
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
      this.seller_id = this.product.user;
      //  this.seller_id=this.product.user.id;
      if (this.product.variations.length > 0) {
        //in json output the variation value is "" :{} array
        this.variationlength = this.product.variations[""].length;
        for (var i = 0; i < this.variationlength; i++) {
          this.variationname = this.product.variations[""][i].name;
          this.novariationid = this.product.variations[""][i].id;
        }
      }
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
          this.failure = "select any one size or color";
        } else {
          this.productvariations.push({
            id: this.productattribute,
            quantity: 1,
          });
          this.products["products"] = this.productvariations;
          console.log(this.products,"dfsdfdsdff");

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
            console.log("API", this.products);
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
  },
  created() {
    this.getproduct();
  },
};
</script>
<style>
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
</style>
