<template>
  <div class="w-full ml-8 page-change-password bg-white">
    <div class="w-1/2 p-6">
      <div v-if="success != null" class="w-1/2 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
        <p class="text-white">{{ success }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
      </div>
      <div v-if="failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
        <p class="text-white">{{ failure }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
      </div>
      <h4 class="uppercase mb-4 font-semibold">Change Password</h4>
      <form action="" @submit.prevent="store">
        <div class="field my-3 flex">
          <label class="label w-1/4 self-center">Old Password</label>
          <div class="flex flex-col w-1/2 control">
            <input class="input border border-gray-500 px-4 py-2 w-full rounded" type="password" v-model="form.oldpassword"
              placeholder="Old password">
            <p class="text-red-900" v-if="errors.oldpassword">
              {{ errors.oldpassword[0] }}
            </p>
          </div>
        </div>
        <div class="flex field my-3">
          <label class="label w-1/4 self-center">New Password</label>
          <div class="flex flex-col w-1/2 control">
            <input class="input border border-gray-500 px-4 py-2 w-full rounded" type="password" placeholder="New password"
              v-model="form.newpassword">
            <p class="text-red-900" v-if="errors.newpassword">
              {{ errors.newpassword[0] }}
            </p>
          </div>
        </div>
        <div class="flex field my-3">
          <label class="label w-1/4 self-center">Confim Password</label>
          <div class="flex flex-col w-1/2 control">
            <input class="input border border-gray-500 px-4 py-2 w-full rounded" type="password"
              v-model="form.confirmpassword" placeholder="Confim password">
            <p class="text-red-900" v-if="errors.confirmpassword">
              {{ errors.confirmpassword[0] }}
            </p>
          </div>
        </div>
        <div class="flex mt-10">
          <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Change
            Password</button>
          <!-- <button class="w-64 button is-info is-medium bg-blue-600 px-4 py-2 text-white rounded hover:shadow-lg">Change
            Password</button> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'blank',
  data() {
    return {
      // errors:[],
      form: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: '',
        id: '',

      },

      success: null,
      failure: null,
    }
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
      let response = await this.$axios.$post('users/passwordchange', this.form)
        .then((response) => {
          if (response.message == "Password is changed successfully") {
            this.success = response.message;
            this.form = '';
          }
          else {
            this.failure = response.message;
          }
        }).catch((error) => {
          //this.errors=error.response.data.errors;
        });

    }
  }
}
</script>