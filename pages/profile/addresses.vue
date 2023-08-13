<template>
  <div class="lg:ml-8 sm:ml-0 xs:ml-0 bg-white address">
    <div class="w-full xs:text-center sm:text-center md:text-start p-6">
      <div class="flex justify-end mb-3">
        <a href="#" class="button is-info is-medium hover:shadow-lg no-underline btnstyle" @click="add()">Add</a>
      </div>
      <!-- Add Address Start -->
      <div class="w-full" v-show="addaddress">
        <h4 class="mb-4 mt-4 uppercase">Add Address</h4>
        <form action="" @submit.prevent="store">
          <section class="w-full p-6">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-10">
              <div>
                <label class="text-white dark:text-gray-200" for="username">First Name</label>
                <input id="username" type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.firstname" placeholder="Enter your first name....." />
                <p class="text-red-900" v-if="errors.firstname">
                  {{ errors.firstname[0] }}
                </p>
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="lastname">Last Name</label>
                <input id="lastname" type="lastname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="form.lastname" placeholder="Enter your last name....." />
                <p class="text-red-900" v-if="errors.lastname">
                  {{ errors.lastname[0] }}
                </p>
              </div>

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
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Mobile Number</label>
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
                <label class="text-white dark:text-gray-200" for="state">State</label>
                <StateDropdown v-model="form.state" />
                <p class="text-red-900" v-if="errors.state">
                  {{ errors.state[0] }}
                </p>
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="city">City</label>
                <CityDropdown v-model="form.city" />
                <p class="text-red-900" v-if="errors.city">
                  {{ errors.city[0] }}
                </p>
              </div>



              <div>
                <label class="text-white dark:text-gray-200" for="pincode">Pincode</label>
                <input id="pincode" type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  placeholder="6 digit (0 to 9)" v-model="form.postal_code" />
                <p class="text-red-900" v-if="errors.postal_code">
                  {{ errors.postal_code[0] }}
                </p>
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="address">Address</label>
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
                  <button type="submit" class="button is-info is-medium hover:shadow-lg btnstyle">
                    Submit
                  </button>
                  <a href="#" @click="showaddress()" class="btnstyle">Close</a>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
      <!-- Add Address End -->

      <!-- List Address Start -->
      <div class="lg:p-4 md:p-4 xs:p-0 sm:p-0 border" v-show="listaddress">
        <div class="">
          <h4 class="my-2">List Address</h4>
          <div class="flex flex-wrap">
            <div v-for="address in addresses" class="lg:w-1/2 md:w-full xs:w-full sm:w-full my-3 h-full text-slate-600">
              <div class="px-3 py-2 bg-gray-200 border mx-2">
                <div class="flex justify-between">
                  <div>
                    <p class="my-2">
                      <b>{{ address.name }} </b>
                    </p>
                    <p class="my-2">
                      {{ address.address_1 }}, {{ address.address_2 }}
                    </p>
                    <p class="my-2">
                      {{ address.city.name }} - {{ address.postal_code }}
                    </p>
                    <p class="my-2">{{ address.state.name }}</p>
                    <p class="my-2">{{ address.country.name }}</p>
                    <p class="my-2">Phone number: {{ address.mobileno }}</p>
                  </div>
                  <div>
                    <p class="block my-2 text-red text-sm font-semibold" v-if="address.default">
                      Default
                    </p>
                  </div>
                </div>
                <div
                  class="justify-between flex items-center mt-3 self-center sm:justify-center xs:justify-center md:justify-start">
                  <a href="#" @click="showdiv(address.id)" class="text-xs btnstyle">Edit</a>
                  <a href="#" @click="deletediv(address.id)" class="text-xs btnstyle">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- List Address End -->

      <!-- Edit Address Start -->
      <div class="w-full" v-show="showeditaddress">
        <h4 class="mb-4 mt-4 uppercase">Edit Address</h4>
        <form action="">
          <!-- <form action="" @submit.prevent="store"> -->
          <section class="w-full p-6">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-10">
              <div>
                <label class="text-white dark:text-gray-200" for="username">First Name</label>
                <input id="username" type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="editaddress.firstname" placeholder="Enter your first name....." />
                <p class="text-red-900" v-if="errors.firstname">
                  {{ errors.firstname[0] }}
                </p>
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="lastname">Last Name</label>
                <input id="lastname" type="lastname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="editaddress.lastname" placeholder="Enter your last name....." />
                <p class="text-red-900" v-if="errors.lastname">
                  {{ errors.lastname[0] }}
                </p>
              </div>

              <!-- <div>
                <label class="text-white dark:text-gray-200" for="email">Email</label>
                <input id="email" type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="editaddress.email" placeholder="Enter your email....." />
                <p class="text-red-900" v-if="errors.email">
                  {{ errors.email[0] }}
                </p>
              </div> -->

              <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Mobile Number</label>
                <input id="passwordConfirmation" type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  v-model="editaddress.mobileno" placeholder="Enter your mobile number....." />
                <p class="text-red-900" v-if="errors.mobileno">
                  {{ errors.mobileno[0] }}
                </p>
              </div>

              <!-- <div>
                <label class="text-white dark:text-gray-200" for="city">Country</label>
                <div class="control w-full">
                  <select @change="changed" class="countystatecity" v-model="editaddress.country_id">
                    <option value="" class="text-gray-400">Please select</option>
                    <option :value="country.id" v-for="country in countries" :key="country.id">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <p class="text-red-900" v-if="errors.country_id">
                  {{ errors.country_id[0] }}
                </p>
              </div> -->

              <div>
                <label class="text-white dark:text-gray-200" for="state">State</label>
                <div class="control w-full">
                  <select @change="statechanged" class="countystatecity" v-model="editaddress.state">
                    <option value="" class="text-gray-400">Please select</option>
                    <option :value="state.id" v-for="state in states" :key="state.id">
                      {{ state.name }}
                    </option>
                  </select>
                </div>
                <p class="text-red-900" v-if="errors.state">
                  {{ errors.state[0] }}
                </p>
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="city">City</label>
                <div class="control w-full">
                  <select @change="citychanged" class="countystatecity" v-model="editaddress.city">
                    <option value="" class="text-gray-400">Please select</option>
                    <option :value="city.id" v-for="city in cities" :key="city.id">
                      {{ city.name }}
                    </option>
                  </select>
                </div>
                <p class="text-red-900" v-if="errors.city">
                  {{ errors.city[0] }}
                </p>
              </div>



              <div>
                <label class="text-white dark:text-gray-200" for="pincode">Pincode</label>
                <input id="pincode" type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"
                  placeholder="6 digit (0 to 9)" v-model="editaddress.postal_code" />
                <p class="text-red-900" v-if="errors.postal_code">
                  {{ errors.postal_code[0] }}
                </p>
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="address">Address</label>
                <textarea id="address" type="text" rows="4" v-model="editaddress.address_1"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-red-800 dark:text-red-300 dark:border-red-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none"></textarea>
              </div>
              <p class="text-red-900" v-if="errors.address_1">
                {{ errors.address_1[0] }}
              </p>
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
      <!-- Edit Address End -->
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import CountryDropdown from "@/components/form/CountryDropdown";
import StateDropdown from "@/components/form/StateDropdown";
import CityDropdown from "@/components/form/CityDropdown";
export default {
  layout: "member",
  data() {
    return {
      addresses: [],
      // errors: [],
      form: {
        name: "",
        firstname: "",
        lastname: "",
        address_1: "",
        // address_2: "",
        country_id: 1,
        state: "",
        city: "",
        // email: "",
        mobileno: "",
        postal_code: "",
        // default: true,
        default: false,
      },
      editaddress: {
        id: 0,
        name: "",
        firstname: "",
        lastname: "",
        address_1: "",
        // address_2: "",
        country_id: 1,
        state: "",
        city: "",
        // email: "",
        mobileno: "",
        postal_code: "",
        //  default: true,
        default: false,
      },
      addaddress: true,
      listaddress: false,
      showeditaddress: false,
      displayaddress: [],
      editaddress: [],
      countries: [],
      states: [],
      cities: [],
    };
  },
  components: {
    CountryDropdown,
    StateDropdown,
    CityDropdown,
  },
  methods: {
    showdiv(id) {
      this.getaddressdetails(id);
      this.addaddress = false;
      this.listaddress = false;
      this.showeditaddress = true;
    },
    deletediv(id) {
      this.deladdress(id);
      this.addaddress = false;
      this.listaddress = true;
      this.showeditaddress = false;
    },

    showaddress() {
      this.addaddress = false;
      this.listaddress = true;
      this.showeditaddress = false;
    },

    /* showeditaddress(){
           this.addaddress=false;
           this.listaddress=false;
           this.showeditaddress=true;
     },*/
    add() {
      this.addaddress = true;
    },
    async getCountries() {
      let response = await this.$axios.$get("countries");
      this.countries = response.data;
    },
    async getaddresses() {
      let addresses = await this.$axios.$get("addresses");
      this.addresses = addresses;

      if (Object.keys(this.addresses).length > 0) {
        this.listaddress = true;
        this.addaddress = false;
        this.showeditaddress = false;
      } else {
        this.listaddress = false;
        this.addaddress = true;
        this.showeditaddress = false;
      }
    },
    async store() {
      this.form.name = this.form.firstname + " " + this.form.lastname;
      let response = await this.$axios
        .$post("addresses", this.form)
        .then((response) => {
          if (response.message !== "Saved Successfully") {
            this.getaddresses();
          } else {
            this.success = "Saved Successfully";
            this.form = "";
          }
        })
        .catch((error) => {
          // this.errors = error.response.data.errors;
        });
    },
    async edit() {
      this.editaddress.name = this.editaddress.firstname + " " + this.editaddress.lastname;
      let response = await this.$axios
        .$post("addresses/update/" + this.editaddress.id, this.editaddress)
        .then((response) => {
          if (response.message == "Updated Successfully") {
            this.showeditaddress = false;
            this.getaddresses();
          } else {
            this.success = "Updated Successfully";
            this.form = "";
          }
        })
        .catch((error) => { });
    },
    async getaddressdetails(id) {
      let response = await this.$axios.$get("addresses/edit/" + id);
      this.editaddress = response.data;
      this.editaddress.id = response.data.id;
      this.editaddress.country_id = response.data.country.id;
      this.editaddress.state = response.data.state.id;
      this.editaddress.city = response.data.city.id;
    },
    async deladdress(id) {
      let response = await this.$axios.$post("addresses/delete/" + id);
      this.getaddresses();
      // this.editaddress = response.data;
      // this.editaddress.id = response.data.id;
      // this.editaddress.country_id = response.data.country.id;
    },
    changed($event) {
      this.$emit("input", $event.target.value);
    },
    async getStates() {
      let response = await this.$axios.$get("states");
      this.states = response;
    },

    async getCities() {
      let response = await this.$axios.$get("cities");
      this.cities = response;
    },

    statechanged($event) {
      this.$emit("input", $event.target.value);
    },

    citychanged($event) {
      this.$emit("input", $event.target.value);
    },
  },
  created() {
    this.getaddresses();
    this.getCountries();
    this.getStates();
    this.getCities();
  },
};
</script>

<style scoped>
/* select {
  outline: none;
  width: 100%;
} */
.address label {
  font-weight: bold;
  color: black;
}
</style>
