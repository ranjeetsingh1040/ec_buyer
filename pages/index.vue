<template>
  <div class="section">
    <a id="button"></a>
    <slider />
    <!-- <Catagory /> -->
    <LoadingBar v-if="show" />
    <collection />
    <product />
    <extra />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import product from '@/pages/home/Product'
import slider from '@/pages/home/Slider'
import extra from '@/pages/home/Extra'
import collection from '@/pages/collections/index'
import LoadingBar from '@/components/LoadingBar'
import Catagory from '@/pages/home/Catagory'
// import collection from '@/pages/products/Collection'
export default {
  layout: 'home',
  data() {
    return {
      show: true,
      products: [],
      modvalue: 0,
      rooturl: process.env.SITEURL,
      page: 1,
      page_count: 0,
      total: ''
    }
  },
  components: {
    product,
    slider,
    collection,
    extra,
    LoadingBar,
    Catagory
  },
  methods: {
    async getproduct(page = 1) {
      let response = await this.$axios.$get('products?' + '&page=' + page);
      this.show = false
      this.products = response.data;
      this.modvalue = this.products.length % 4;
      this.page_count = response.meta.last_page;
      this.total = response.meta.total;
    },
    productredirect(product) {
      this.$router.replace({
        name: 'products-slug',
        params: { slug: product.slug }
      })
    }
  },
  // middleware: [
  //   'buyerlogingroup'
  // ],
  created() {
    this.getproduct()
  },
  mounted() {
    var btn = $('#button');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });


  }
}
</script>
<style scoped>

#button {
  display: inline-block;
  background-color: #f02640;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s,
    opacity .10s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  border-radius: 40px;
  cursor: pointer;
}

#button::after {
  content: "\f0d8";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 1em;
  line-height: 50px;
  color: #fff;
  position: absolute;
  left: 18px;
  bottom: 1px;
  font-size: 22px;
}

#button.show {
  opacity: 1;
  visibility: visible;
}

/* Styles for the content section */

.content {
  width: 77%;
  margin: 50px auto;
  font-family: 'Merriweather', serif;
  font-size: 17px;
  color: #6c767a;
  line-height: 1.9;
}

@media (min-width: 500px) {
  .content {
    width: 43%;
  }

  #button {
    margin: 30px;
  }
}

.content h1 {
  margin-bottom: -10px;
  color: #03a9f4;
  line-height: 1.5;
}

.content h3 {
  font-style: italic;
  color: #96a2a7;
}

.portfolioDisc {
  opacity: 0;
}

.port:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

}

.port:hover .portfolioDisc {
  opacity: 1;
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;

}

@media only screen and (max-width: 600px) {
  .portfolioDisc {
    opacity: 1;
  }
}

.ctc {
  color: #f02640 !important;
}

.cbc {
  background-color: #f02640 !important;
}

.nlink {
  text-decoration: none;
}

.bannercustom {
  background-image: url("/shoptown/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>