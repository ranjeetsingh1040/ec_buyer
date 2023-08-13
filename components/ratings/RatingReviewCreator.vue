<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Rate and Review
      </h2>
    
    
    
    
      <!-- <div v-if="success != null" class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
      <p class="text-white">{{ success }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
    </div> -->


    <div v-if="success != null" class="md:w-3/4 mb-9 xs:w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <span class="block sm:inline">{{ success }}.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="close()">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>




      <form action="#" @submit.prevent="store" class="space-y-8">
        <div>
          <label class="label my-2 w-64 self-center text-sm font-medium text-gray-900 dark:text-gray-300">Your Review for
            this Product</label>
          <div class="control w-1/2 flex flex-col">
            <StarRating v-model="form.rating" v-bind:increment="0.5"></StarRating>
            <p class="text-red-900" v-if="errors.rating">
              {{ errors.rating[0] }}
            </p>
          </div>
        </div>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
          <input type="text" id="name" v-model="form.title"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="">
            <p class="text-red-900" v-if="errors.title">
            {{ errors.title[0] }}
          </p>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
            Description</label>
          <textarea id="message" rows="6" v-model="form.description"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""></textarea>
            <p class="text-red-900" v-if="errors.description">
            {{ errors.description[0] }}
          </p>
        </div>


        <div>
          <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add Product Image</label>
        <div class="control flex flex-xol w-full ">
          <div class="dropzone-img w-full bg-gray-50">
            <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" v-on:vdropzone-success="showSuccess"
              v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-thumbnail="showthumbnail" ></dropzone>
          </div>
        </div>
      </div>
      <input type="hidden" v-model="form.imagecount" name="">
          <!-- <div class="w-full">
            <label
              class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span class="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input type="file" name="file_upload" class="hidden">
            </label>
          </div> -->

        </div>



        <button class="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>

      </form>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
  props: ['productid'],
  data() {
    return {

      form: {
        user_id: this.$auth.user.id,
        customer_name: this.$auth.user.name,
        // customer_name: '',
        title: '',
        rating: 0,
        description: '',
        entityid: '',
        entityname: 'product',
        imagecount: ''
      },
      imagefile: [],
      success: null,
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        maxFiles: 10,
        maxFilesize: 2,
        acceptedFiles: ".jpeg,.jpg,.png,.svg,.webp",
        parallelUploads: 10,
        resizeWidth: 600,
        resizeHeight: 400,
      },

    }
  },
  components: {
    StarRating,
    Dropzone,
  },
  


  methods: {
    async close() {

      this.success = null;
    },
    async store() {
      let formData = new FormData();
      formData.append('user_id', this.form.user_id);
      formData.append('customer_name', this.form.customer_name);
      formData.append('title', this.form.title);
      formData.append('rating', this.form.rating);
      formData.append('description', this.form.description);
      formData.append('entity_id', this.form.entityid);
      formData.append('entity_name', 'product');
      for (let i = 0; i < this.imagefile.length; i++) {
        if (typeof this.imagefile[i] !== "undefined") {
          formData.append('review_image' + i, this.imagefile[i]);
        }
        else {
          formData.append('review_image' + i, '');
        }

        /// formData.append('product_image',this.form.imagefile);
      }
      formData.append('imagecount', this.imagefile.length);

      let responses = await this.$axios.$post('addrating', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        if (response.message !== "Saved Successfully") {
          this.success = response.message;

        }
        else {
          this.form = "";

          //  //console.log(response.data);
          //  this.$nuxt.$emit('savemessage',response.message);
          this.$router.replace({
            name: 'stores',
          });

        }
      }).catch((error) => {
      });



    },
    showSuccess(file, response) {
      // console.log(response);
      // console.log(file);
    },
    showthumbnail(file, dataUrl) {
      // console.log(file);
      //  console.log(dataUrl);
    },
    removeAllFiles() {
      this.$refs.el.dropzone.removeAllFiles();
    },
    sendingEvent(file, xhr, formData) {

      //console.log(file);
      this.imagefile.push(file);
    },


  },
  created() {
    this.form.entityid = this.productid;
  },

}
</script>
<style scoped>
div#foo {
    background: #f9fafb;
    border-radius: 10px;
    border: dashed;
    border-color: #d1d5db;
}
svg.vue-star-rating-star {
  height: 30px;
  width: 30px;
}

element.style {}

.textArea {
  width: 63.666667%;
}
</style>