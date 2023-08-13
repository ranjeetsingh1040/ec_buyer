<template>
  <div class="lg:p-4 sm:p-0 md:p-2 navigationmenu">
    <div class="grid md:grid-cols-3 my-2 flex items-center p-2">

      <div class="">
        <nuxt-link :to="{ name: 'index' }" class="">
          <img src="/logo.png" height="110px" width="150px" />
        </nuxt-link>
      </div>

      <div class="flex items-center hidden lg:block md:block ">
        <div class="searchBar ">
          <input id="searchQueryInput" @input="search()" class="hover:bg-sky-700 focus:ring-2 focus:ring-[#f02640]"
            v-on:keyup="keymonitor" v-model="searchquery" type="text" placeholder="Search Products" />

          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" @click="search()">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="flex justify-end items-center sm:ml-1 col-start-3" v-if="!$auth.loggedIn">
        <div class="flex px-2.5">
          <nuxt-link :to="{ name: 'auth-signin' }" class="mx-6 flex">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <p class=" text-gray-500 hidden lg:block ml-1">
              Sign-In
            </p>
          </nuxt-link>
          <nuxt-link :to="{ name: 'auth-registration' }" class="flex">
            <i class="fa-solid fa-pen-to-square"> </i>
            <p class="text-gray-500 hidden lg:block ml-1">
              Sign-Up
            </p>
          </nuxt-link>
        </div>
      </div>


      <!-- else condition -->
      <div class="flex justify-end items-center sm:ml-1 xs:col-start-4 md:col-start-3" v-else>
        <div class="flex px-2.5">
          <nuxt-link :to="{ name: 'wishlist' }">
            <i class="fa-solid fa-heart mt-1.5"></i>
          </nuxt-link>
          <!-- <font-awesome-icon icon="fa-thin fa-arrow-up-wide-short" /> -->
          <!-- <span class="flex mx-2">
            <i class="fa-solid fa-cart-shopping mt-1.5"></i>
            <p class="mt-1.5 quantity">{{ cartCount }}</p>
          </span> -->
          <!-- <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"> -->
          <nuxt-link :to="{ name: 'cart' }" class="relative flex mx-4">
            <!-- <a href="#" role="button" class="relative flex"> -->
            <i class="fa-solid fa-cart-shopping mt-1.5"></i>
            <span
              class="absolute bg-[#444444] right-0 top-0 rounded-full w-5 h-5 top right p-0 m-0 text-[#fff] font-normal text-sm leading-tight text-center">{{
                cartCount }}
            </span>
            <!-- </a> -->
          </nuxt-link>
          <!-- </li> -->
          <!--        <i class="fa-solid fa-heart"></i> -->
          <nuxt-link :to="{ name: '' }" class="">
            <button type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <img class="w-10 h-10 rounded-full" :src="rooturl + $auth.user.image" alt="user photo" @click="togglemenu">
            </button>
            <!-- <i class="fa-solid fa-user" @click="togglemenu"></i> -->
            <!-- <img :src="rooturl + $auth.user.image" class="w-10 h-10 rounded-full" alt="Rounded avatar" @click="togglemenu"> -->
          </nuxt-link>


        </div>
      </div>

    </div>

    <div class="w-full py-px flex   lg:hidden md:hidden">
      <div class="searchBar p-4">
        <input id="searchQueryInput" @input="search()" class="hover:bg-sky-700 focus:ring-2 focus:ring-[#f02640]" v-on:keyup="keymonitor"
          v-model="searchquery" type="text" placeholder="Search" />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" @click="search()">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="w-full flex justify-end absolute" style="z-index: 99;" v-show="submenu" @mouseover="submenu = true"
      @mouseleave="submenu = false">
      <template v-if="$auth.loggedIn">

        <div class="w-64 sub-menu flex items-start mx-4">
          <div class="w-full p-2 flex flex-col">
            <p class="text-sm font-bold uppercase text-center text-white pb-2">
              {{ $auth.user.name }}</p>
            <p class="text-sm font-bold uppercase text-center text-white border-b border-gray-500 pb-2">
              {{ $auth.user.email }}</p>
            <nuxt-link :to="{ name: 'profile' }" class="sub-menu-item">
              View Profile
            </nuxt-link>
            <nuxt-link :to="{ name: 'orders' }" class="sub-menu-item">
              Orders
            </nuxt-link>
            <nuxt-link :to="{ name: 'wishlist' }" class="sub-menu-item">
              Wishlist
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-password' }" class="sub-menu-item">
              Change Password
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-avatar' }" class="sub-menu-item">
              Change Avatar
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-notifications' }" class="sub-menu-item">
              Notifications
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-settings' }" class="sub-menu-item">
              Settings
            </nuxt-link>

            <!--   <nuxt-link :to="{ name: '' }"  @click="logout" class="sub-menu-item">Logout</nuxt-link> -->
            <!--  <nuxt-link :to="{ name: '' }" class="sub-menu-item">Logout</nuxt-link> -->
            <a href="#" @click="logout" class="sub-menu-item">Logout</a>
          </div>

        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import vautocomplete from 'v-autocomplete'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'
import ItemTemplate from '@/layouts/partials/ItemTemplate'

export default {
  data() {
    return {
      submenu: false,
      searchquery: '',
      products: [],
      page: 1,
      page_count: 0,
      total: '',
      item: {},
      // item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      items: [],
      template: ItemTemplate,
      rooturl: process.env.SITEURL,
      img: '',
    }
  },
  components: {
    vautocomplete
  },
  methods: {
    togglemenu: function () {
      this.submenu = !this.submenu;
    },
    getLabel(item) {
      for (var i = 0; i < this.items.length; i++) {
        this.item.id = this.items[i].id;
        this.item.name = this.items[i].name;
        this.item.description = this.items[i].description
      }
      return item.name
    },
    //       updateItems (text) {
    //   yourGetItemsMethod(text).then( (response) => {
    //     this.items = response
    //   })
    // }
    updateItems(text) {
      this.$axios.$get('products').then(response => {

        this.items = response.data;
      });
    },
    getSearchproduct() {
      this.$axios.$get('products').then(response => {
        this.items = response.data;
      });



      // this.page_count = response.meta.last_page;
      // this.total = response.meta.total;

    },
    async logout() {
      await this.$auth.logout();
    },
    async search() {
      this.searchfunction();
    },
    async keymonitor() {
      if (event.key == "Enter") {
        this.searchfunction();
      }
    },

    searchfunction() {
      // console.log("searchPage", this.searchquery);
      //alert(process.env.url)
      //this.$router.push('/products/productlist?search=' + this.searchquery)
      //redirect('/products/productlist?search=' + this.searchquery)
      //this.$route.router.go('/products/productlist?search=' + this.searchquery);
      // this.$emit('productsearch_query', this.searchquery);

      this.$router.replace({
        name: 'products-productlist',
        // redirect: '/products/productlist',
        query: { search: this.searchquery }
      });


      //window.location.href='/products/productlist?search=' + this.searchquery;
    },
    async getuserdetails() {
      var userid = this.$auth.user.id;
      let response = await this.$axios.$get('users/getuserdetails');

      // this.img = this.rooturl + response.image;
      // console.log(response.image,"cddfsdfsffddfsfdNNNNNN");
      // this.users = response;
      // this.userdetails = response;

    },

  },

  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cart/count'
    })
  },
  created() {
    this.searchquery = '';
    this.getSearchproduct();
    // this.getuserdetails();
  }
}

</script>
<style>
.fontAwsomeFooterSocialIcon .fa-brands  {
    font-size: 30px !important;
}
</style>
<style scoped>

.navigationmenu .wrapper {
  width: 100%;
  max-width: 31.25rem;
  margin: 6rem auto;
}

.navigationmenu .label {
  font-size: .625rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: +1.3px;
  margin-bottom: 1rem;
}

.navigationmenu .searchBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navigationmenu #searchQueryInput {
  width: 100%;
  height: 2.8rem;
  background: #dcd4d4;
  outline: none;
  border: 1px solid #80808042;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
}

.navigationmenu #searchQuerySubmit {
  width: 3.1rem;
  height: 2.8rem;
  margin-left: -2.5rem;
  background: #f02640;
  border: none;
  outline: none;
  border-radius: 82px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigationmenu i.fa.fa-search {
  color: #fff;
  font-size: 20px;
}

.navigationmenu i.fa.fa-sign-in,
i.fa-solid.fa-pen-to-square {
  color: #f02640d1;
  font-size: 28px;
  cursor: pointer;
}

#searchQuerySubmit:hover {
  cursor: pointer;
}

.navigationmenu i.fa-solid.fa-heart,
i.fa-solid.fa-cart-shopping,
i.fa-solid.fa-user {
  font-size: 30px;
  cursor: pointer;
  color: rgb(240 38 64);
}
</style>