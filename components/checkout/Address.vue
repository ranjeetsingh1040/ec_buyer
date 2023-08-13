<template>
  <div>
    <div class="w-full" v-show="addaddress">
      <h4 class="mb-4 mt-4 uppercase text-center">Add Address</h4>
      <form action="" @submit.prevent="store">
        <section class="w-full p-6">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label class="dark:text-gray-200" for="firstname">First Name</label>
              <input id="firstname" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="form.firstname" placeholder="Enter your first name....." />
              <p class="text-red-900" v-if="errors.firstname">
                {{ errors.firstname[0] }}
              </p>
            </div>

            <div>
              <label class="dark:text-gray-200" for="lastname">Last Name</label>
              <input id="lastname" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="form.lastname" placeholder="Enter your first name....." />
              <p class="text-red-900" v-if="errors.lastname">
                {{ errors.lastname[0] }}
              </p>
            </div>

            <!-- <div>
                <label class="dark:text-gray-200" for="lastname">Last Name</label>
                <input id="lastname" type="lastname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.lastname" placeholder="Enter your last name....." />
                <p class="text-red-900" v-if="errors.lastname">
                  {{ errors.lastname[0] }}
                </p>
              </div> -->

            <!-- <div>
                <label class="text-white dark:text-gray-200" for="email">Email</label>
                <input id="email" type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.email" placeholder="Enter your email....." />
                <p class="text-red-900" v-if="errors.email">
                  {{ errors.email[0] }}
                </p>
              </div> -->

            <div>
              <label class="dark:text-gray-200" for="passwordConfirmation">Mobile Number</label>
              <input id="passwordConfirmation" type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="form.mobileno" placeholder="Enter your mobile number....." />
              <p class="text-red-900" v-if="errors.mobileno">
                {{ errors.mobileno[0] }}
              </p>
            </div>

            <!-- <div>
                <label class="text-white dark:text-gray-200" for="city">Country</label>
                <CountryDropdown v-model="form.country_id" />
                <p class="text-red-900" v-if="errors.country_id">
                  {{ errors.country_id[0] }}
                </p>
              </div> -->

            <div>
              <label class="dark:text-gray-200" for="state">State</label>
              <StateDropdown v-model="form.state" />
              <p class="text-red-900" v-if="errors.state">
                {{ errors.state[0] }}
              </p>
            </div>

            <div>
              <label class="dark:text-gray-200" for="city">City</label>
              <CityDropdown v-model="form.city" />
              <p class="text-red-900" v-if="errors.city">
                {{ errors.city[0] }}
              </p>
            </div>



            <div>
              <label class="dark:text-gray-200" for="pincode">Pincode</label>
              <input id="pincode" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                placeholder="6 digit (0 to 9)" v-model="form.postal_code" />
              <p class="text-red-900" v-if="errors.postal_code">
                {{ errors.postal_code[0] }}
              </p>
            </div>
            <div>
              <label class="dark:text-gray-200" for="address">Address</label>
              <textarea id="address" type="text" rows="4" v-model="form.address_1"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"></textarea>
              <p class="text-red-900" v-if="errors.address_1">{{ errors.address_1[0] }}</p>
            </div>
            <div></div>

            <div class="w-1/2 field my-2 flex items-center">
              <div class="control flex flex-col w-6">
                <input class="input-type my-2 accent-red-500" type="checkbox" v-model="form.default" />
              </div>
              <label class="label my-2 text-sm self-center" for="checkbox">Set as default</label>
            </div>
            <div></div>
            <div class="flex justify-between self-center sm:justify-center xs:justify-center md:justify-start">
              <div class="flex my-6">
                <button class="w-48 text-sm no-underline hover:bg-black p-3 rounded-full outline-none btnstyle">Add
                  Address</button>
                <!-- <button class="w-32 text-sm no-underline hover:bg-black p-3 rounded-full outline-none btnstyle" @click="showaddress()">Close</button> -->
                <a href="#" @click="showaddress()" class="w-28 text-center text-sm no-underline hover:bg-black p-3 rounded-full outline-none btnstyle">Close</a>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>

    <div class="mx-4 lg:mx-0 w-full" v-show="listaddress">


      <div class="flex justify-between items-center md:flex-row">
        <h4 class="my-4 uppercase">Address</h4>

        <a href="#" class="btnstyle" @click="add()">Add</a>
        <a href="#" class="btnstyle" @click="changeDeliveryAddress()">Change</a>
      </div>



      <div v-if="Object.keys(this.address).length > 0">
        <div class="w-full flex my-4">
          <div class="w-2/5 md:w-1/5 lg:w-1/5">
            <p>Name</p>
          </div>
          <div class="w-3/5 md:w-4/5 lg:w-4/5">
            <p>{{ address.name }}</p>
          </div>
        </div>
        <div class="w-full flex my-4">
          <div class="w-2/5 md:w-1/5 lg:w-1/5">
            <p>Address</p>
          </div>
          <div class="w-3/5 md:w-4/5 lg:w-4/5">
            <p>{{ address.address_1 }}</p>
          </div>
        </div>
        <div class="w-full flex my-4">
          <div class="w-2/5 md:w-1/5 lg:w-1/5">
            <p>City</p>
          </div>
          <div class="w-3/5 md:w-4/5 lg:w-4/5">
            <p>{{ address.city.name }}</p>
          </div>
        </div>
        <div class="w-full flex my-4">
          <div class="w-2/5 md:w-1/5 lg:w-1/5">
            <p>Postal Code</p>
          </div>
          <div class="w-3/5 md:w-4/5 lg:w-4/5">
            <p>{{ address.postal_code }}</p>
          </div>
        </div>


        <a href="#" @click="showdiv(address.id)" class="w-64 outline-none btnstyle">Edit</a>
      </div>
    </div>

    <div class="border border-gray-500 p-4" v-show="change_address">
      <h4 class="my-2">List Address</h4>
      <div v-for="address in addresses">
        <div class="flex my-4">
          <div class="">

            <input @click="setDeliveryAddress(address.id)" type="radio" v-model="select_delivery" name="select_delivery"
              :value="address.id"
              class="checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              checked>

          </div>
          <div class="mx-4">
            <p class="mb-2">{{ address.name }} </p>
            <p class="mb-2">{{ address.address_1 }}, {{ address.address_2 }} </p>
            <p class="mb-2">{{ address.city.name }} - {{ address.postal_code }}</p>
            <p class="mb-2">{{ address.state.name }} </p>
          </div>
        </div>
      </div>
    </div>




    <div class="mx-4 lg:mx-0 w-full" v-show="showeditaddress">
      <h4 class="my-4 uppercase">Edit Address</h4>
      <form action="">
        <section class="w-full p-6">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label class="dark:text-gray-200" for="firstname">First Name</label>
              <input id="firstname" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="editaddress.firstname" placeholder="Enter your first name....." />
              <p class="text-red-900" v-if="errors.firstname">
                {{ errors.firstname[0] }}
              </p>
            </div>

            <div>
              <label class="dark:text-gray-200" for="lastname">Last Name</label>
              <input id="lastname" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="editaddress.lastname" placeholder="Enter your first name....." />
              <p class="text-red-900" v-if="errors.lastname">
                {{ errors.lastname[0] }}
              </p>
            </div>

            <!-- <div>
                <label class="dark:text-gray-200" for="lastname">Last Name</label>
                <input id="lastname" type="lastname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.lastname" placeholder="Enter your last name....." />
                <p class="text-red-900" v-if="errors.lastname">
                  {{ errors.lastname[0] }}
                </p>
              </div> -->

            <!-- <div>
                <label class="text-white dark:text-gray-200" for="email">Email</label>
                <input id="email" type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.email" placeholder="Enter your email....." />
                <p class="text-red-900" v-if="errors.email">
                  {{ errors.email[0] }}
                </p>
              </div> -->

            <div>
              <label class="dark:text-gray-200" for="passwordConfirmation">Mobile Number</label>
              <input id="passwordConfirmation" type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                v-model="editaddress.mobileno" placeholder="Enter your mobile number....." />
              <p class="text-red-900" v-if="errors.mobileno">
                {{ errors.mobileno[0] }}
              </p>
            </div>

            <!-- <div>
                <label class="text-white dark:text-gray-200" for="city">Country</label>
                <CountryDropdown v-model="form.country_id" />
                <p class="text-red-900" v-if="errors.country_id">
                  {{ errors.country_id[0] }}
                </p>
              </div> -->

            <div>
              <label class="dark:text-gray-200" for="state">State</label>
              <select @change="statechanged" class="countystatecity" v-model="editaddress.state">
                <option value="" class="text-gray-400">Please select</option>
                <option :value="state.id" v-for="state in states" :key="state.id">
                  {{ state.name }}
                </option>
              </select>
              <p class="text-red-900" v-if="errors.state">
                {{ errors.state[0] }}
              </p>
              <!-- <p class="text-red-900" v-if="editaddress.state">
                  {{ errors.state[0] }}
                </p> -->
            </div>

            <div>
              <label class="dark:text-gray-200" for="city">City</label>
              <select @change="citychanged" class="countystatecity" v-model="editaddress.city">
                <option value="" class="text-gray-400">Please select</option>
                <option :value="city.id" v-for="city in cities" :key="city.id">
                  {{ city.name }}
                </option>
              </select>
              <p class="text-red-900" v-if="errors.city">
                {{ errors.city[0] }}
              </p>
            </div>



            <div>
              <label class="dark:text-gray-200" for="pincode">Pincode</label>
              <input id="pincode" type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                placeholder="6 digit (0 to 9)" v-model="editaddress.postal_code" />
              <p class="text-red-900" v-if="errors.postal_code">
                {{ errors.postal_code[0] }}
              </p>
            </div>
            <div>
              <label class="dark:text-gray-200" for="address">Address</label>
              <textarea id="address" type="text" rows="4" v-model="editaddress.address_1"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"></textarea>
              <p class="text-red-900" v-if="errors.address_1">
                {{ errors.address_1[0] }}
              </p>
            </div>
            <div></div>

            <div class="w-1/2 field my-2 flex items-center">
              <div class="control flex flex-col w-6">
                <input class="input-type my-2 accent-red-500" type="checkbox" v-model="editaddress.default" />
              </div>
              <label class="label my-2 text-sm self-center" for="checkbox">Set as default</label>
            </div>
            <div></div>
            <div class="flex justify-between self-center sm:justify-center xs:justify-center md:justify-start">
              <div class="flex my-6">
                <a href="#" @click="edit()"
                  class="rounded-full flex items-center justify-center uppercase mr-4 btnstyle">Save</a>

                <a href="#" @click="showaddress()" class="rounded-full btnstyle">Show Address</a>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import CountryDropdown from '@/components/form/CountryDropdown'
import StateDropdown from '@/components/form/StateDropdown'
import CityDropdown from '@/components/form/CityDropdown'
import PaymentMethods from '@/components/checkout/Payment'
export default {
  layout: 'home',
  data() {
    return {
      form: {
        name: '',
        firstname: '',
        lastname: '',
        address_1: '',
        // address_2: '',
        city: '',
        state: '',
        country_id: 1,
        // email: '',
        mobileno: '',
        postal_code: '',
        // country_id: '',
        default: false,
        address_id: '',
      },

      editaddress: {
        id: 0,
        name: '',
        firstname: '',
        lastname: '',
        address_1: '',
        // address_2: '',
        city: '',
        state: '',
        country_id: 1,
        // email: '',
        mobileno: '',
        postal_code: '',
        default: false,
        via: 'delivery'

      },
      // signinshow:true,
      addaddress: true,
      listaddress: false,
      showeditaddress: false,
      displayaddress: [],
      editaddress: [],
      countries: [],
      states: [],
      cities: [],
      addresses: [],
      address: [],
      change_address: false,
      select_delivery: null,
    }
  },

  components: {
    CountryDropdown,
    StateDropdown,
    CityDropdown,
    // PaymentMethods
  },

  methods: {
    async store() {
      this.form.name = this.form.firstname + ' ' + this.form.lastname;
      let response = await this.$axios.$post('addresses', this.form).then((response) => {
        if (response.message !== "Saved Successfully") {
          this.getAddress();
          this.$nuxt.$emit('getaddresses', true);
        }
        else {
          this.success = "Saved Successfully";
          this.form = '';
        }
      }).catch((error) => {
        // this.errors = error.response.data.errors;
      });


    },

    async edit() {
      this.editaddress.name = this.editaddress.firstname + ' ' + this.editaddress.lastname;
      let response = await this.$axios.$post('addresses/update/' + this.editaddress.id,
        this.editaddress).then((response) => {
          this.showeditaddress = false;
      this.getAddress();
      //this.$emit('created', response.data)
      this.$nuxt.$emit('getaddresses', true);

        }).catch((error) => { });
      

    },
    add() {
      this.addaddress = true;
    },


    async getCountries() {
      let response = await this.$axios.$get('countries')
      this.countries = response.data
    },

    async getaddressdetails(id) {
      let response = await this.$axios.$get('addresses/edit/' + id);
      this.editaddress = response.data;
      this.editaddress.id = response.data.id;
      this.editaddress.country_id = response.data.country.id;
      this.editaddress.state = response.data.state.id;
      this.editaddress.city = response.data.city.id;
    },
    async getStates() {
      let response = await this.$axios.$get('states')
      this.states = response
    },

    async getCities() {
      let response = await this.$axios.$get('cities')
      this.cities = response;
    },

    statechanged($event) {
      this.$emit('input', $event.target.value)
    },

    citychanged($event) {
      this.$emit('input', $event.target.value)
    },


    changed($event) {
      this.$emit('input', $event.target.value)
    },

    showdiv(id) {
      this.getaddressdetails(id);
      this.addaddress = false;
      this.listaddress = false;
      this.showeditaddress = true;

    },

    showaddress() {
      this.addaddress = false;
      this.listaddress = true;
      this.showeditaddress = false;
    },

    showdiveditaddress() {
      this.addaddress = false;
      this.listaddress = false;
      this.showeditaddress = true;
    },

    async getAddress() {
      //var userid=this.$auth.user.id;
      let response = await this.$axios.$get('getdefaultaddress')
      //    this.displayaddress=response.data;
      this.displayaddress = response.data;

      if (Object.keys(this.displayaddress).length > 0) {
        this.address = response.data[0];
        //  this.form.address_id=this.address.id;
        this.$nuxt.$emit('address_id', this.address.id);
        this.$nuxt.$emit('getaddresses', true);
        this.listaddress = true;
        this.addaddress = false;
      }
      else {
        this.listaddress = false;
        this.addaddress = true;
      }

    },
    async getAddresses() {

      let addresses = await this.$axios.$get('addresses');
      this.addresses = addresses;

    },
    changeDeliveryAddress() {
      this.change_address = true;
      this.listaddress = false;
      this.addaddress = false;
      this.showeditaddress = false;


    },
    setDeliveryAddress(id) {
      //  this.form.address_id=id;
      this.$nuxt.$emit('address_id', id);
      this.address = this.addresses[id];
      this.change_address = false;
      this.listaddress = true;
      this.addaddress = false;
      this.showeditaddress = false;
    }
  },
  created() {
    this.getAddress();
    this.getAddresses();
    this.getCountries();
    this.getStates();
    this.getCities();
  }
}
</script>         
<style>
select {
  width: 100%;
  outline: none;
}
</style>