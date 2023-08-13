<template>
  <div class="w-full flex flex-wrap customrating">
    <div class="w-full xs:p-3 md:p-8">
      <span class="text-2xl mr-4">User Rating</span>
      <span v-for="rating in total_rating" :key="rating">
        <span v-if="product.rate >= rating">
          <span class="fa fa-star checked text-2xl "></span>
        </span>
        <span v-else>
          <span class="fa fa-star text-2xl text-[#e1e1e1]"></span>
        </span>
      </span>
      <p >{{ totalrate }} average based on {{ product.reviewcount }} reviews.</p>
      <hr class="my-4" style="border: 1px solid #f1f1f1" />

      <div class="row my-3">
        <div class="side">
          <div>5 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-5 h-6"></div>
          </div>
        </div>
        <div class="side right">
          <div class="mr-4">{{ bar5 }}</div>
        </div>
        <div class="side">
          <div>4 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-4 h-6"></div>
          </div>
        </div>
        <div class="side right">
          <div class="mr-4">{{ bar4 }}</div>
        </div>
        <div class="side">
          <div>3 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-3 h-6"></div>
          </div>
        </div>
        <div class="side right">
          <div class="mr-4">{{ bar3 }}</div>
        </div>
        <div class="side">
          <div>2 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-2 h-6"></div>
          </div>
        </div>
        <div class="side right">
          <div class="mr-4">{{ bar2 }}</div>
        </div>
        <div class="side">
          <div>1 star</div>
        </div>
        <div class="middle">
          <div class="bar-container">
            <div class="bar-1 h-6"></div>
          </div>
        </div>
        <div class="side right">
          <div class="mr-4">{{ bar1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  props: ["slug"],
  //layout:'product',
  data() {
    return {
      product: [],
      item1: true,
      item2: false,
      item3: false,
      open: false,
      tab: "item1",
      params: this.$route.params.slug,
      total_rating: 5,
      ratings: [],
      productid: "",
      reviews: [],
      reviewcount: 0,
      totalreview: 0,
      bar1: 0,
      bar2: 0,
      bar3: 0,
      bar4: 0,
      bar5: 0,
    };
  },
  computed: {
    totalrate() {
      let total = 0;
      let usercount = 0;
      let ratetotal = 0;
      if (this.product.ratetotal != "") {
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
      if (this.product.reviewcount != 0) {
        bartotal5 = (this.bar5 / this.product.reviewcount) * 100;
        $(".bar-5").css({
          width: bartotal5 + "%",
          "background-color": "#04aa6d",
        });
        bartotal4 = (this.bar4 / this.product.reviewcount) * 100;
        $(".bar-4").css({
          width: bartotal4 + "%",
          "background-color": "#2196f3",
        });
        bartotal3 = (this.bar3 / this.product.reviewcount) * 100;
        $(".bar-3").css({
          width: bartotal3 + "%",
          "background-color": "#00bcd4",
        });
        bartotal2 = (this.bar2 / this.product.reviewcount) * 100;
        $(".bar-2").css({
          width: bartotal2 + "%",
          "background-color": "#ff9800",
        });
        bartotal1 = (this.bar1 / this.product.reviewcount) * 100;
        $(".bar-1").css({
          width: bartotal1 + "%",
          "background-color": "#f44336",
        });
      } else {
        $(".bar-5").css({ width: "0%" });
        $(".bar-4").css({ width: "0%" });
        $(".bar-3").css({ width: "0%" });
        $(".bar-2").css({ width: "0%" });
        $(".bar-1").css({ width: "0%" });
      }
    },
  },
  created() {
    this.getproduct();
  },
};
</script>
<style scoped>
.customrating .checked {
  color: orange;
}

/* Three column layout */
.customrating .side {
  float: left;
  width: 15%;
  margin-top: 10px;
}

.customrating .middle {
  margin-top: 10px;
  float: left;
  width: 70%;
}

/* Place text to the right */
.customrating .right {
  text-align: right;
}

/* Clear floats after the columns */
.customrating .row:after {
  content: "";
  display: table;
  clear: both;
}

/* The bar container */
.customrating .bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}</style>
