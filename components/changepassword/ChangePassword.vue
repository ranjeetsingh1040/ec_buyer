<template>
  <div class="page-change-password lg:ml-8 sm:ml-0 xs:ml-0 bg-white changepassword">
    <div class="lg:w-3/5 md:w-4/5 xs:w-full lg:pl-7 md:pl-7 sm:pl-0 xs:pt-8">




      <div v-if="success != null" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ success }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"  @click="close()">
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>


      <div v-if="failure != null" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ failure }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"  @click="fclose()">
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>


  


      <h4 class="uppercase mb-4 font-semibold sm:text-center xs:text-center md:text-left">
        Change Password
      </h4>
      <form action="" @submit.prevent="store">
        <div class="field my-3 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col sm:py-4 xs:py-4 xs:align-center">
          <!-- <label class="label w-1/4 self-center text-xl">Old Password</label> -->
          <h1
            class="lg:w-1/4 md:1/4 sm:w-2/5 xs:w-2/5 sm:py-4 xs:py-4 md:p-0 self-center sm:text-center xs:text-center md:text-left text-gray-500 p1">
            Old Password
          </h1>

          <div class="flex flex-col sm:text-center xs:text-center md:text-left w-3/5 control">
            <input class="input px-4 py-2 w-full rounded sm:text-center xs:text-center md:text-left input-type input-type"
              type="password" v-model="form.oldpassword" placeholder="Old password" />
            <p class="text-red-900" v-if="errors.oldpassword">
              {{ errors.oldpassword[0] }}
            </p>
          </div>
        </div>
        <div
          class="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col sm:text-center xs:text-center md:text-left field my-3">
          <h3
            class="lg:w-1/4 md:1/4 sm:w-2/5 xs:w-2/5 sm:py-4 xs:py-4 self-center sm:text-center xs:text-center md:text-left text-gray-500 p1">
            New Password
          </h3>
          <div class="flex flex-col w-3/5 control">
            <input class="input input-type px-4 py-2 w-full rounded sm:text-center xs:text-center md:text-left"
              type="password" placeholder="New password" v-model="form.newpassword" />
            <p class="text-red-900" v-if="errors.newpassword">
              {{ errors.newpassword[0] }}
            </p>
          </div>
        </div>
        <div class="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col field my-3">
          <h3
            class="lg:w-1/4 md:1/4 sm:w-2/5 sm:py-4 xs:py-4 self-center sm:text-center xs:text-center md:text-left text-gray-500 p1">
            Confim Password
          </h3>
          <div class="flex flex-col w-3/5 control">
            <input class="input input-type px-4 py-2 w-full rounded sm:text-center xs:text-center md:text-left"
              type="password" v-model="form.confirmpassword" placeholder="Confim password" />
            <p class="text-red-900" v-if="errors.confirmpassword">
              {{ errors.confirmpassword[0] }}
            </p>
          </div>
        </div>
        <div class="sm:text-center xs:text-center md:text-left mt-10 xs:pb-16 lg:pb-28">
          <button
            class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
            Change Password
          </button>
          <!-- <button class="w-64 button is-info is-medium bg-red-600 px-4 py-2 text-white rounded hover:shadow-lg">Change
            Password</button> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "blank",
  data() {
    return {
      // errors:[],
      form: {
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
        id: "",
      },

      success: null,
      failure: null,
    };
  },

  methods: {
    async close() {
      this.success = null;
    },
    async fclose() {
      this.failure = null;
    },
    async store() {
      this.form.id = this.$auth.user.id;
      let response = await this.$axios
        .$post("users/passwordchange", this.form)
        .then((response) => {
          if (response.message == "Password is changed successfully") {
            this.success = response.message;
            this.form = "";
          } else {
            this.failure = response.message;
          }
        })
        .catch((error) => {
          //this.errors=error.response.data.errors;
        });
    },
  },
};
</script>
<style scoped>
@media (max-width: 640px) {
  .changepassword .field {
    display: flex;
    align-items: center;
  }
}</style>