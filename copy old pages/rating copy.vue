<template>
  <div class="w-full flex flex-wrap">
    <div class="container w-full p-4">
      <div class="w-full flex flex-col p-4">
        <h4 class="my-4">Description</h4>
        <p class="leading-loose">{{ product.description }}</p>
      </div>
      <div class="w-full flex flex-wrap p-4">
        <h4 class="my-4">Ratings</h4>
        <div class="w-full flex">

          <div class="w-1/3 p-2">

            <div class="flex my-4">

              <span class="custom-font mr-2">User Rating</span>

              <div v-for="rating in total_rating" :key="rating">
                <div v-if="product.rate >= rating">
                  <img src="/images/star_half.svg" class="h-4">
                </div>
                <div v-else>
                  <img src="/images/star.svg" class="h-4">
                </div>
              </div>

            </div>

            <p class="custom-font my-4">{{ totalrate }} average based on {{ product.reviewcount }} reviews.</p>
          </div>
          <div class="w-1/3 p-2">
            <div class="flex w-full justify-between my-2">
              <div class="w-1/4 mr-2">
                <p>5 star</p>
              </div>
              <div class="w-full bg-gray-100 mr-2">
                <div class="w-3/4 h-4 bg-green" style="width: 0%;"></div>
              </div>
              <div class="w-1/4">
                <p class="float-right">{{ bar5 }}</p>
              </div>
            </div>
            <div class="flex w-full justify-between my-2">
              <div class="w-1/4 mr-2">
                <p>4 star</p>
              </div>
              <div class="w-full bg-gray-100 mr-2">
                <div class="w-2/3 h-4 bg-orange" style="width: 0%;"></div>
              </div>
              <div class="w-1/4">
                <p class="float-right">{{ bar4 }}</p>
              </div>
            </div>
            <div class="flex w-full justify-between my-2">
              <div class="w-1/4 mr-2">
                <p>3 star</p>
              </div>
              <div class="w-full bg-gray-100 mr-2">
                <div class="w-3/5 h-4 bg-teal-900" style="width: 0%;"></div>
              </div>
              <div class="w-1/4">
                <p class="float-right">{{ bar3 }}</p>
              </div>
            </div>
            <div class="flex w-full justify-between my-2">
              <div class="w-1/4 mr-2">
                <p>2 star</p>
              </div>
              <div class="w-full bg-gray-100 mr-2">
                <div class="w-1/2 h-4 bg-blue-400" style="width: 0%;"></div>
              </div>
              <div class="w-1/4">
                <p class="float-right">{{ bar2 }}</p>
              </div>
            </div>
            <div class="flex w-full justify-between my-2">
              <div class="w-1/4 mr-2">
                <p>1 star</p>
              </div>
              <div class="w-full bg-gray-100 mr-2">
                <div class="w-1/4 h-4 bg-purple-500" style="width: 0%;"></div>
              </div>
              <div class="w-1/4">
                <p class="float-right">{{ bar1 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import $ from "jquery";
export default {
  props: ['slug'],
  //layout:'product',
  data() {
    return {
      product: [],
      item1: true,
      item2: false,
      item3: false,
      open: false,
      tab: 'item1',
      params: this.$route.params.slug,
      total_rating: 5,
      ratings: [],
      productid: '',
      reviews: [],
      reviewcount: 0,
      totalreview: 0,
      bar1: 0,
      bar2: 0,
      bar3: 0,
      bar4: 0,
      bar5: 0

    }

  },
  computed: {
    totalrate() {
      let total = 0;
      let usercount = 0;
      let ratetotal = 0;
      if (this.product.ratetotal != '') {
        ratetotal = this.product.ratetotal;
        usercount = this.product.reviewcount;
        total = this.product.ratetotal / usercount;
        return total.toFixed(2);
      }
      return total;
    },


  },

  methods: {

    settab(tabname) {

      this.tab = tabname;
    },

    async getproduct() {

      let response = await this.$axios.$get(`products/` + this.params);
      // console.log(response.data);
      this.product = response.data;
      this.productid = response.data.id;

      this.bar1 = this.product.rateproduct1;
      this.bar2 = this.product.rateproduct2;
      this.bar3 = this.product.rateproduct3;
      this.bar4 = this.product.rateproduct4;
      this.bar5 = this.product.rateproduct5;
      let bartotal5 = 0;
      let bartotal4 = 0;
      let bartotal3 = 0;
      let bartotal2 = 0;
      let bartotal1 = 0;
      bartotal5 = (this.bar5 / this.product.reviewcount)
      $('.bg-green').css('width', bartotal5 + '%');

      bartotal4 = (this.bar4 / this.product.reviewcount)
      $('.bg-orange').css('width', bartotal4 + '%');

      bartotal3 = (this.bar3 / this.product.reviewcount)
      $('.bg-teal-dark').css('width', bartotal3 + '%');

      bartotal2 = (this.bar2 / this.product.reviewcount)
      $('.bg-blue-400').css('width', bartotal2 + '%');

      bartotal1 = (this.bar1 / this.product.reviewcount)
      $('.bg-purple-500').css('width', bartotal1 + '%');

    },



  },
  created() {
    this.getproduct()

  },
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  margin: 0 auto; /* Center website */
  max-width: 800px; /* Max width */
  padding: 20px;
}

.heading {
  font-size: 25px;
  margin-right: 25px;
}

.fa {
  font-size: 25px;
}

.checked {
  color: orange;
}

/* Three column layout */
.side {
  float: left;
  width: 15%;
  margin-top:10px;
}

.middle {
  margin-top:10px;
  float: left;
  width: 70%;
}

/* Place text to the right */
.right {
  text-align: right;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}

/* Individual bars */
.bar-5 {width: 60%; height: 18px; background-color: #04AA6D;}
.bar-4 {width: 30%; height: 18px; background-color: #2196F3;}
.bar-3 {width: 10%; height: 18px; background-color: #00bcd4;}
.bar-2 {width: 4%; height: 18px; background-color: #ff9800;}
.bar-1 {width: 15%; height: 18px; background-color: #f44336;}

/* Responsive layout - make the columns stack on top of each other instead of next to each other */
@media (max-width: 400px) {
  .side, .middle {
    width: 100%;
  }
  .right {
    display: none;
  }
}
</style>