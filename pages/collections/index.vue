<template>
  <!-- <div> -->
  <div class="container mx-auto my-10">
    <h1 class="text-4xl text-center py-5 my-5">Collection</h1>
    <div v-if="collections.length > 0" class="flex flex-col lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row sm:flex-wrap sm:flex-row mx-2 hover14 column">
      <div class="w-full lg:w-1/3 flex md:w-1/2 " v-for="collection in collections" :key="collection.id"
        style="padding-inline:1rem;">
        <div class="port my-2 bg-white mr-2 w-full">

          <div class="flex flex-col">
            <div v-if="collection.collectionproduct.length > 0" class="overflow-hidden h-[350px]">
              <nuxt-link :to="{ name: 'collections-collectionlist', params: { collectionlist: collection.id } }">
             <figure>   <img v-bind:src="rooturl + collection.collectionproduct[0].product.productgallery[0].imagepath"
                  class=""> </figure>
              </nuxt-link>
            </div>
          </div>
          <div class="flex px-2 py-2">
            <div class="w-5/6 mr-1">
              <nuxt-link :to="{ name: 'collections-collectionlist', params: { collectionlist: collection.id } }"
                class="no-underline">
                <p class="py-1 text-lg"> {{ collection.name.slice(0, 60) }}...</p>
              </nuxt-link>
            </div>
          </div>
          <div class="flex px-2 py-2" v-if="collection.collectionproduct.length>3">
            <nuxt-link :to="{ name: 'products-slug', params: { slug: collection.collectionproduct[1].product.slug } }">
             <img v-bind:src="rooturl + collection.collectionproduct[1].product.productgallery[0].imagepath"
                class="imgsize"> 
            </nuxt-link>
            <nuxt-link :to="{ name: 'products-slug', params: { slug: collection.collectionproduct[2].product.slug } }">
             <img v-bind:src="rooturl + collection.collectionproduct[2].product.productgallery[0].imagepath"
                class="ml-20 imgsize"> 
            </nuxt-link>
            <nuxt-link :to="{ name: 'products-slug', params: { slug: collection.collectionproduct[3].product.slug } }">
               <img v-bind:src="rooturl + collection.collectionproduct[3].product.productgallery[0].imagepath"
                class="ml-20 imgsize"> 
            </nuxt-link>
            <nuxt-link :to="{ name: 'collections-collectionlist', params: { collectionlist: collection.id } }"
              class="no-underline">
              <div class="col-3 ml-20">
                <p class="numberMore p-0">+{{ collection.collectionproduct.length }}</p>
                <p class="p-0-">More</p>
              </div>
            </nuxt-link>
          </div>

        </div>
      </div>

    </div>
    <div v-else>
        <p class="text-red-600 p-4">No Records Found...</p>
      </div>
    <div v-if="page_count > 1" class="flex">
      <paginate v-model="page" :page-count="page_count" :page-range="3" :margin-pages="1" :click-handler="getcollection"
        :prev-text="''" :next-text="''"
        :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
        :page-class="'mx-1.5 paginationitem'"
        :prev-link-class="'fa-solid fa-chevron-left paginationitem'"
        :next-link-class="'fa-solid fa-chevron-right paginationitem'"
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
      collections: [],
      modvalue: 0,
      rooturl: process.env.SITEURL,
      page: 1,
      page_count: 0,
      total: '',
      total_rating: 5,
    }
  },

  methods: {
    async getproduct() {
      let response = await this.$axios.$get('products');
      this.products = response.data;
    },
    async getcollection(page = 1) {
      let response = await this.$axios.$get('buyer/getcollection?' + '&page=' + page);
      this.collections = response.data;
      this.modvalue = this.collections.length % 4;
      this.page_count = response.last_page;
      this.total = response.total;
    },
    productredirect(product) {
      this.$router.replace({
        name: 'products-slug',
        params: { slug: product.slug }
      })
    }

  },
  created() {
    this.getproduct()
    this.getcollection()

  },

}
</script>
<style scoped>

@media (min-width: 320px){
    .container {
      min-width: 358px;
     }
  }
.numberMore {
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #f02640;
  cursor: pointer
}

.p-0 {
  padding: 0;
}

.ml-20 {
  margin-left: 20px;
}

.imgsize {
  height: 70px;
  width: 70px;
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