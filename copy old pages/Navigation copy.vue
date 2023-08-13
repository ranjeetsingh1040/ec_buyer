<template>
  <nav class="navbar">
    <div class="flex px-4 py-2 justify-between items-center w-full">
      <div class="flex navbar-brand py-2 w-1/3">
        <nuxt-link :to="{ name: 'index' }" class="">
          <img src="/logo.png" class="h-6 lg:h-16">
        </nuxt-link>
        <div class="navbar-burger burger" data-target="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="w-1/3 flex">
        <input type="search"
          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
        <button
          class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="button" id="button-addon2">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
            </path>
          </svg>
        </button>
        <!-- <input
          class="rounded w-full px-10 mx-1 text-black no-underline outline-none focus:outline-none focus:shadow-outline"
          v-on:keyup="keymonitor" v-model="searchquery" type="text" placeholder="Search product..">
        <button class="rounded-3xl p-3 self-center bg-red-600 rounded" @click="search()">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button> -->
      </div>



      <div id="nav" class="navbar-menu w-1/3">
        <div class="navbar-end flex float-right lg:mr-5">

          <template v-if="!$auth.loggedIn">
            <nuxt-link :to="{ name: 'auth-signin' }" class="self-center navbar-item">
              <div class="hidden lg:block">Sign In</div>
              <div class="block lg:hidden"><img src="/images/login.svg" class="h-4"></div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-registration' }" class="self-center navbar-item">
              <div class="hidden lg:block">Sign Up</div>
              <div class="block lg:hidden"><img src="/images/register.svg" class="h-4"></div>
            </nuxt-link>
          </template>

          <template v-else>
            <div class="flex items-center">
              <nuxt-link :to="{ name: 'orders' }" class="self-center navbar-item">
                Orders
              </nuxt-link>
              <nuxt-link :to="{ name: 'cart' }" class="self-center navbar-item">
                <img src="~/static/assets/images/cart.svg">
                <!-- ({{ cartCount }}) -->
              </nuxt-link>
              <nuxt-link :to="{ name: 'cart' }" class="self-center navbar-item -ml-2 mt-3">
                ({{ cartCount }})
              </nuxt-link>
              <nuxt-link :to="{ name: '' }" class="navbar-item"><img src="~/static/assets/images/user.png" class="h-8"
                  @click="togglemenu">
              </nuxt-link>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end absolute" style="z-index: 99;" v-show="submenu" @mouseover="submenu = true"
      @mouseleave="submenu = false">
      <template v-if="$auth.loggedIn">

        <div class="w-64 sub-menu flex items-start mx-4">
          <div class="w-full p-2 flex flex-col">
            <p class="text-sm font-bold uppercase text-center text-white border-b border-gray-500 pb-2">{{
              $auth.user.name
            }}</p>
            <nuxt-link :to="{ name: 'profile' }" class="sub-menu-item">
              View Profile
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-password' }" class="sub-menu-item">
              Change Password
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
  </nav>
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
      template: ItemTemplate
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
      console.log("searchPage", this.searchquery);
      //alert(process.env.url)
      //this.$router.push('/products/productlist?search=' + this.searchquery)
      //redirect('/products/productlist?search=' + this.searchquery)
      //this.$route.router.go('/products/productlist?search=' + this.searchquery);
      // this.$emit('productsearch_query', this.searchquery);
      this.$router.replace({
        name: 'products-productlist',
        // redirect: '/products/productlist',
        query: { searchq: this.searchquery }
        //params: { searchq: this.searchquery, }
      });


      //window.location.href='/products/productlist?search=' + this.searchquery;
    }

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
  },
  mounted() {
    let toggleBtn = document.querySelector("#navbar-toggle");
    let collapse = document.querySelector("#navbar-collapse");
    toggleBtn.onclick = () => {
      collapse.classList.toggle("hidden");
      collapse.classList.toggle("flex");
    };

  }
}

</script>
<style>
.vautocomplete {
  position: relative
}

.vautocomplete .vautocomplete-list {
  position: absolute
}

.vautocomplete .vautocomplete-list .vautocomplete-list-item {
  cursor: pointer
}

.vautocomplete .vautocomplete-list .vautocomplete-list-item.vautocomplete-item-active {
  background-color: #f3f6fa
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  border: 0px ! important;
}
</style>


