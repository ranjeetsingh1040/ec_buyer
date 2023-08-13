<template>
    <!-- <body class="overflow-y-hidden mx-auto"> -->
    <div class=" py-12 mx-auto overflow-y-hidden">
        <!-- Desktop Responsive Start -->
        <div class="hidden sm:flex flex-col justify-start items-start">
            <div class="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                <h1 class="text-4xl font-semibold leading-9 text-gray-800">
                    Favourites
                </h1>
                <p class="text-base leading-4 text-gray-600 pb-1" v-if="favproduct.length >= 1">({{ favproduct.length }}
                    Items)</p>
            </div>
            <table class="w-full mt-16 whitespace-nowrap">
                <thead aria-label="table heading" class="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b ">
                    <tr>
                        <th class="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                            YOUR PRODUCT
                        </th>
                        <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                            Name
                        </th>
                        <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                            PRICE
                        </th>
                        <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                            MORE OPTIONS
                        </th>
                        <th class="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10">
                        </th>
                    </tr>
                </thead>
                <tbody class="w-full text-left" v-if="favproduct.length >= 1" v-for="product in favproduct"
                    :key="product.id">
                    <tr class="border-gray-200 border-b">
                        <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20 favimgsize" :src="rooturl + product.productImage"
                                alt="girl" />
                        </th>
                        <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                            <p class="text-base leading-4 text-gray-800">{{ product.productName }}</p>
                        </th>
                        <th class="my-10  pl-6 lg:pl-20 2xl:pl-52">
                            <p class="">{{ product.productPrice }}</p>
                        </th>
                        <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                            <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }"
                                class="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">View
                                detail
                            </nuxt-link>
                        </th>
                        <th class="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                            <button
                                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                                @click="destroy(product.fav_id)">Remove Item
                            </button>
                        </th>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr></tr>
                </tbody>
            </table>
        </div>
        <!-- Desktop Responsive End -->

        <!-- Mobile Responsive Start -->
        <div class=" flex justify-center items-center">
            <div class="sm:hidden flex flex-col justify-start items-start ">
                <div class="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                    <p class="text-4xl font-semibold leading-9 text-gray-800">
                        Favourites
                    </p>
                    <p class="text-base leading-4 text-gray-600 pb-1" v-if="favproduct.length >= 1">({{ favproduct.length }}
                        Items)</p>
                </div>
                <div class="border-gray-200 border-b pb-10" v-if="favproduct.length >= 1" v-for="product in favproduct"
                    :key="product.id">
                    <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                        <div>
                            <img :src="rooturl + product.productImage" alt="girl" />
                            <!-- <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" /> -->
                        </div>
                    </div>
                    <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                        <div>
                            <p class="w-36 text-base leading-6 text-gray-800">{{ product.productName }}</p>
                        </div>
                        <div>
                            <p class="text-base font-semibold leading-4 text-gray-800">{{ product.productPrice }}</p>
                        </div>
                    </div>
                    <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                        <div>
                            <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }"
                                class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">View
                                detail
                            </nuxt-link>
                        </div>
                        <div>
                            <button
                                class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800" @click="destroy(product.fav_id)">
                                Remove Item
                                <!-- <p>Remove Item</p> -->
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Mobile Responsive End -->
    </div>
    <!-- </body> -->
</template>

<script>



export default {
    name: "wishlist",
    data() {
        return {
            favproduct: [],
            rooturl: process.env.SITEURL,
        };
    },
    middleware: [
        'redirectIfGuest'
    ],
    methods: {
        async getfavoritelist() {
            let response = await this.$axios.$get('favorite/get');
            this.favproduct = response.data;
        },
        async destroy(favid) {
            let response = await this.$axios.$get('favorite/remove/' + favid).then((response) => {
                this.getfavoritelist();

            }).catch((error) => {
            });
        },
    },
    created() {
        this.getfavoritelist();
    }
};
</script>

<style scoped>
.favimgsize {
    /* width: 185px; */
    height: 188px;
}
</style>

