<template>
    <div class="w-full ml-8 page-change-password bg-white">
        <div class="w-1/2 p-6">
            <div v-if="success != null" class="w-1/2 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
                <p class="text-white">{{ success }}</p>
                <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()" />
            </div>
            <h4 class="uppercase mb-4 font-semibold">Change Avatar</h4>
            <form action="" @submit.prevent="store" enctype="multipart/form-data">
                <div>
                    <img :src="rooturl + this.$auth.user.image" class="uploading-image" />
                    <input type="file" name="profileImage" @change="uploadImage" id="profileImage" />
                    <p class="text-red-900" v-if="errors.profileImage">
                        {{ errors.profileImage[0] }}
                    </p>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "imageUpload",
    data() {
        return {
            rooturl: process.env.SITEURL,
            success: null,
            form: {
                id: this.$auth.user.id,
                profileImage: null,
            },
        };
    },
    methods: {
        async store() {
            let formData = new FormData();
            formData.append("id", this.form.id);
            formData.append("profileImage", this.form.profileImage);
            let response = await this.$axios
                .$post("users/changeavatar", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    this.success = response.message;
                    window.location.reload(true);
                })
                .catch((error) => { });
        },
        uploadImage(event) {
            this.form.profileImage = event.target.files[0];
        },
        close() {
            this.success = null;
        },
    },
}; // missing closure added
</script>
