<template>
  <div>
    <!-- Product Details start Here -->
    <div class="flex flex-row sm:flex sm:flex-col">
      <div class="sm:w-full lg:basis-full md:basis-full xl:basis-full 2xl:basis-full p-4">
        <div class="container mx-auto my-4">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <nuxt-link :to="{ name: 'index' }"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:secondary dark:text-gray-400 dark:hover:secondary">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                  </path>
                </svg>

                Home
              </nuxt-link>
            </li>
            <li>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <nuxt-link :to="{ name: 'home-Product' }"
                  class="ml-1 text-sm font-medium text-gray-700 hover:secondary md:ml-2 dark:text-gray-400 dark:hover:secondary">Product</nuxt-link>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="flex flex-row Productfilter">
      <div class="xs:basis-full lg:basis-1/4 md:basis-1/4 xl:basis-1/4 xxl:basis-1/4">
        <!-- ====== Filters Section Start -->

        <section class="pb-20">
          <div class="a mx-auto">
            <div class="_ gb">
              <div class="bc gg bn/12 zo/12">
                <!-- brand filter start -->
                <div class="ia ke qe gf kf overflow-auto max-h-96 h-auto" id="style-3">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Brand</h3>
                  </div>
                  <div class="ee my-5 pg un px-8" v-for="brand in brands" :key="brand.id">
                    <div>
                      <label class="gb sd td zd vi cursor-pointer" :for="`brand-${brand}`">
                        <div class="d">
                          <input type="checkbox" :id="`brand-${brand}`" :value="brand" v-model="selectedBrand"
                            class="box la gb kb dc zd ae le qe" />
                          <span class="gj">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                            </svg>
                          </span>
                        </div>
                        {{ brand }}
                      </label>
                    </div>
                  </div>
                </div>
                <!-- brand filter end -->

                <!-- brand filter start -->

                <h3 class="p-4 font-semibold text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg">
                  Brand
                </h3>
                <ul
                  class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto max-h-96 h-auto">
                  <li class="w-full border-gray-200 rounded-t-lg dark:border-red-600" v-for="brand in brands" :key="brand.id">
                    <div class="flex items-center pl-7">
                      <input type="checkbox" :id="`brand-${brand}`" :value="brand" v-model="selectedBrand"
                        class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-700 dark:focus:ring-offset-red-700 focus:ring-2 dark:bg-red-600 dark:border-red-500 accent-red-500" />
                      <label :for="`brand-${brand}`"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{{ brand }}</label>
                    </div>
                  </li>
                </ul>

                <div class="mt-6">
                  <h3 class="p-4 font-semibold text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg">
                    Technology
                  </h3>
                  <ul
                    class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-7">
                        <input id="vue-checkbox" type="checkbox" value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                      </div>
                    </li>
                    <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-7">
                        <input id="react-checkbox" type="checkbox" value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                      </div>
                    </li>
                    <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-7">
                        <input id="angular-checkbox" type="checkbox" value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                      </div>
                    </li>
                    <li class="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-7">
                        <input id="laravel-checkbox" type="checkbox" value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="laravel-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- brand filter end -->

                <!-- sort by product Start -->
                <div class="ia ke qe gf kf">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Sort by</h3>
                  </div>
                  <div class="ee mg pg un px-8">
                    <div>
                      <label for="sizeM" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="sort" id="sizeM" class="b" v-model="selectedSort" value="price_asc"
                            checked />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Price -- Low to High
                      </label>
                    </div>
                    <div>
                      <label for="sizeL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="sort" id="sizeL" class="b" v-model="selectedSort"
                            value="price_desc" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Price -- High to Low
                      </label>
                    </div>
                    <div>
                      <label for="sizeXL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="sort" id="sizeXL" class="b" v-model="selectedSort" value="rating" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Rating
                      </label>
                    </div>
                    <!-- <div>
                      <label for="sizeXXL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="sort" id="sizeXXL" class="b" v-model="selectedSort"
                            value="featured" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Featured
                      </label>
                    </div> -->
                  </div>
                </div>
                <!-- sort by product End -->

                <!-- Category filter start -->
                <div class="ia ke qe gf kf overflow-auto max-h-96 h-auto" id="style-3">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Category</h3>
                  </div>
                  <div class="ee my-5 pg un px-8" v-for="category in categories" :key="category.id">
                    <div>
                      <label class="gb sd td zd vi cursor-pointer" :for="`category-${category.slug}`">
                        <div class="d">
                          <input type="checkbox" :id="`category-${category.slug}`" :value="category.slug"
                            v-model="selectedCategory" class="box la gb kb dc zd ae le qe" />
                          <!-- <div class="box la gb kb dc zd ae le qe"> -->
                          <span class="gj">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                            </svg>
                          </span>
                          <!-- </div> -->
                        </div>
                        {{ category.name }}
                      </label>
                    </div>
                  </div>
                </div>
                <!-- Category filter end -->

                <!-- Variation filter start -->
                <div class="ia ke qe gf kf overflow-auto max-h-96 h-auto" id="style-3">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Variation</h3>
                  </div>
                  <div class="ee my-5 pg un px-8" v-for="variation in attribute" :key="variation">
                    <div>
                      <label class="gb sd td zd vi cursor-pointer" :for="`variation-${variation}`">
                        <div class="d">
                          <input type="checkbox" :id="`variation-${variation}`" :value="variation"
                            v-model="selectedVariation" class="box la gb kb dc zd ae le qe" />
                          <!-- <div class="box la gb kb dc zd ae le qe"> -->
                          <span class="gj">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                            </svg>
                          </span>
                          <!-- </div> -->
                        </div>
                        {{ variation }}
                      </label>
                    </div>
                  </div>
                </div>
                <!-- Variation filter end -->

                <!-- Color filter Start -->
                <!-- <div class="ia ke qe gf kf">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Choose Color</h3>
                  </div>
                  <div class="ee mg pg un px-8">
                    <div>
                      <label for="black" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="color" id="black" class="b" checked />
                          <div class="box la gb kb dc zd ae le mf yi">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="currentColor" stroke="currentColor" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Black
                      </label>
                    </div>
                    <div>
                      <label for="red" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="color" id="red" class="b" />
                          <div class="box la gb kb dc zd ae le pf yi">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="currentColor" stroke="currentColor" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Red
                      </label>
                    </div>
                    <div>
                      <label for="blue" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="color" id="blue" class="b" />
                          <div class="box la gb kb dc zd ae le of yi">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="currentColor" stroke="currentColor" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Blue
                      </label>
                    </div>
                    <div>
                      <label for="green" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="color" id="green" class="b" />
                          <div class="box la gb kb dc zd ae le qf yi">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="currentColor" stroke="currentColor" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        Green
                      </label>
                    </div>
                  </div>
                </div> -->
                <!-- Color filter end -->

                <!-- Size filter Start -->
                <!-- <div class="ia ke qe gf kf">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Select Size</h3>
                  </div>
                  <div class="ee mg pg un px-8">
                    <div>
                      <label for="sizeM" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="size" id="sizeM" class="b" checked />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        M
                      </label>
                    </div>
                    <div>
                      <label for="sizeL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="size" id="sizeL" class="b" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        L
                      </label>
                    </div>
                    <div>
                      <label for="sizeXL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="size" id="sizeXL" class="b" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        XL
                      </label>
                    </div>
                    <div>
                      <label for="sizeXXL" class="gb sd td zd vi">
                        <div class="d">
                          <input type="radio" name="size" id="sizeXXL" class="b" />
                          <div class="box la gb kb dc zd ae le qe">
                            <span class="gj">
                              <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        XXL
                      </label>
                    </div>
                  </div>
                </div> -->
                <!-- Size filter end -->
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- ====== Filters Section End -->

      <!-- Product list Start dynamic -->
      <div class="xs:basis-full lg:basis-3/4 md:basis-3/4 xl:basis-3/4 2xl:basis-3/4 mb-7 hover14 column">
        <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[30px]">
          <div class="text-center shadow-lg rounded" v-for="product in products" :key="product.id">
            <div class="overflow-hidden" v-if="product.productgallery.length > 0">
              <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }">
                <figure>
                  <img v-bind:src="rooturl + product.productgallery[0].imagepath" class="imgsizeproduct" />
                </figure>
              </nuxt-link>
            </div>
            <h3 class="text-lg">{{ product.name.slice(0, 60) }}...</h3>

            <div class="py-1 text-lg flex justify-center">
              <div v-for="rating in total_rating" :key="rating.id">
                <div v-if="product.rate >= rating">
                  <i class="fa fa-star ratingchecked text-xl"></i>
                </div>
                <div v-else class="mx-[2px]">
                  <i class="fa fa-star ratingunchecked text-xl"></i>
                </div>
              </div>
              <p class="text-lg">({{ product.reviewcount }})</p>
            </div>
            <p class="text-lg pb-5">{{ product.price }}</p>
          </div>
        </div>
      </div>
      <!-- Product list End -->
    </div>

    <!-- paginate -->
    <div class="flex">
      <paginate :page-count="totalPages" :click-handler="changePage" :prev-text="''" :next-text="''"
        :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
        :page-class="'mx-1.5 paginationitem'" :prev-class="'fa-solid fa-chevron-left paginationitem'"
        :next-class="'fa-solid fa-chevron-right paginationitem'" :disabled-class="'disabled'" :active-class="'active'"
        class="items-center h-[70px] text-4xl text-center py-5 my-5 flex mx-auto"></paginate>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import Paginate from 'vuejs-paginate'
export default {
  layout: "home",
  //props:['searchq'],
  data() {
    return {
      currentPage: 1,
      perPage: 12,
      totalProducts: 0,
      selectedBrand: [],
      selectedCategory: [],
      selectedVariation: [],
      selectedSort: "",
      products: [],
      brands: [],
      attribute: [],
      categories: [],
      sellers: [],
      stockavailable: 0,
      outofstock: 0,
      searchuserid: [],
      chkboxtype: [],
      useridlist: [],
      rooturl: process.env.SITEURL,
      total_rating: 5,
      // modvalue: 0,
      // page: 1,
      // page_count: 0,
      // total: "",
      // currentPage: 1,
      open: false,
      //searchparam:this.$route.params.searchq, //params
      searchparam: this.$route.query.search, //query
    };
  },
  watch: {
    "$route.query.search": function () {
      this.getproduct();
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalProducts / this.perPage);
    },
    cheapestprice: function () {
      return this.products.reduce(function (item) {
        return a.price - b.price;
      }, 0);
    },
  },
  methods: {
    async getproduct(page = 1) {
      if (this.$route.query.search == undefined) {
        this.searchparam = "";
      } else {
        this.searchparam = this.$route.query.search;
      }
      // let response = await this.$axios.$get('products?search=' + this.searchparam + '&page=' + page);
      let response = await this.$axios
        .$get("/products", {
          params: {
            search: this.searchparam,
            brand: this.selectedBrand,
            sort: this.selectedSort,
            selectcategory: this.selectedCategory,
            variation: this.selectedVariation,
            page: this.currentPage,
            per_page: this.perPage,
            // test: [1,2,3,4],
            // minPrice: this.minPrice,
            // maxPrice: this.maxPrice,
          },
        })
        .then((response) => {
          this.products = response.data;
          this.totalProducts = response.meta.total;
          // console.log("Productlist all", this.products)
          // this.modvalue = this.products.length % 4;
          // this.page_count = response.meta.last_page;
          // this.total = response.meta.total;
          // this.brands = []
          // this.categories = []
          // this.getBrands();
          // this.getCategories();
        });
      // var k=0;
      // var j=0;
      // for (var i = 0; i <this.products.length; i++) {

      //    var instock=this.products[i].in_stock;
      //    if(instock==true){
      //      k=k+1;
      //    }
      //    else{
      //     j=j+1;
      //    }
      //    this.stockavailable=k;
      //    this.outofstock=j;

      // }
    },
    // getBrands() {
    //   for (var i = 0; i < this.products.length; i++) {
    //     if (!this.brands.includes(this.products[i].brand)) {
    //       this.brands.push(this.products[i].brand);
    //     }
    //   }
    // },
    // getCategories() {
    //   for (var i = 0; i < this.products.length; i++) {
    //     if (!this.categories.includes(this.products[i].categorychild)) {
    //       this.categories.push(this.products[i].categorychild);
    //     }
    //   }
    // },
    // async getCategories() {
    //   let response = await this.$axios.$get("categories");
    //   this.categories = response.data;
    //   console.log("category", response.data);
    // },
    async getcategoryChildren() {
      let response = await this.$axios.$get("getcategorychildren");
      this.categories = response.subcategory;
    },

    async getBrands() {
      let response = await this.$axios.$get("brands");
      this.brands = response.brands;
      this.morebrands = response.moreBrand;
    },
    async getAttributeSearch() {
      let response = await this.$axios.$get("getAttributeSearch");
      this.attribute = response.attribute;
      console.log("ddjkafjdkljfklsdfjklasdjkl11", this.attribute);
    },
    changePage(page) {
      this.currentPage = page;
      this.getproduct();
    },
    toggle() {
      this.open = !this.open;
    },

    async getSellers() {
      let response = await this.$axios.$get("sellers");
      this.sellers = response.data;
    },
    async searchPrice(priceval) {
      let response = await this.$axios.$get("products/pricefilter/" + priceval);
      this.products = response.data;
    },
    // productredirect(product) {
    //   this.$router.replace({
    //     name: "products-slug",
    //     params: { slug: product.slug },
    //   });
    // },

    async searchBrand(userid) {
      this.useridlist.push(userid);
      // for (var i = 0; i < this.useridlist.length; i++) {
      //   if(this.$refs["chkboxtype[index]"][i].checked==true){
      //     this.searchuserid.push(this.$refs["chkboxtype[index]"][i]._value);
      //        // if(userid==''){
      //        // }
      //        // else{
      //        //   this.searchuserid =this.$refs["chkboxtype[index]"][i]._value + ',' + userid;
      //        // }
      //   }
      //   // if(this.$refs["chkboxtype[index]"][i].checked==false){
      //   //   this.searchuserid.splice(i,this.$refs["chkboxtype[index]"][i]._value);
      //   // }
      // }

      let response = await this.$axios.$get("products/searchbrand/" + userid);
      this.products = response.data;
    },
    async nextPage() {
      this.currentPage++;
      await this.getproduct();
    },
    async previousPage() {
      this.currentPage--;
      await this.getproduct();
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "getproduct",
    selectedBrand: {
      handler: "getproduct",
      deep: true,
      // immediate: false,
    },
    selectedCategory: {
      handler: "getproduct",
      deep: true,
    },
    selectedVariation: {
      handler: "getproduct",
      deep: true,
    },
    selectedSort: {
      handler: "getproduct",
      // deep: true,
      immediate: false,
    },
  },

  created() {
    this.getproduct();
    this.getBrands();
    this.getcategoryChildren();
    this.getAttributeSearch();
    this.getSellers();
    // this.getCategories();
  },
};
</script>

<style scoped>
/* *, */
::after,
::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

input,
select {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

select {
  text-transform: none;
}

input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder {
  opacity: 1;
  color: #9ca3af;
}

[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

svg {
  display: block;
  vertical-align: middle;
}

[hidden] {
  display: none;
}

.a {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;
}

@media (min-width: 400px) {
  .a {
    max-width: 400px;
  }
}

@media (min-width: 540px) {
  .a {
    max-width: 540px;
  }
}

@media (min-width: 720px) {
  .a {
    max-width: 720px;
  }
}

@media (min-width: 960px) {
  .a {
    max-width: 960px;
  }
}

@media (min-width: 1140px) {
  .a {
    max-width: 1140px;
  }
}

@media (min-width: 1320px) {
  .a {
    max-width: 1320px;
  }
}

.b {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.b,
.c {
  position: absolute;
}

.d {
  position: relative;
}

.h {
  top: 1.25rem;
}

.l {
  bottom: 0;
}

.m {
  top: -1.25rem;
}

.w {
  z-index: 10;
}

.x {
  z-index: -10;
}

._ {
  margin-left: -1rem;
  margin-right: -1rem;
}

.ia {
  margin-bottom: 2rem;
}

.la {
  margin-right: 1rem;
}

.ua {
  margin-bottom: 0.25rem;
}

._a {
  margin-left: auto;
}

.gb {
  display: flex;
}

.kb {
  height: 1.25rem;
}

._b {
  height: 0.75rem;
}

.bc {
  width: 100%;
}

.dc {
  width: 1.25rem;
}

._c {
  max-width: 445px;
}

.id {
  max-width: 360px;
}

.sd {
  cursor: pointer;
}

.td {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.zd {
  align-items: center;
}

._d {
  justify-content: flex-end;
}

.ae {
  justify-content: center;
}

.ee> :not([hidden])~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.ie {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ke {
  border-radius: 0.5rem;
}

.le {
  border-radius: 0.25rem;
}

.qe {
  border-width: 1px;
}

.xe {
  border-bottom-width: 1px;
}

.gf {
  --tw-border-opacity: 1;
  border-color: rgb(231 231 231 / var(--tw-border-opacity));
}

.kf,
.mf,
.of,
.pf,
.qf {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.mf,
.of,
.pf,
.qf {
  background-color: rgb(33 43 54 / var(--tw-bg-opacity));
}

.of,
.pf,
.qf {
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

.pf,
.qf {
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.qf {
  background-color: rgb(19 194 150 / var(--tw-bg-opacity));
}

.fg {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.gg {
  padding-left: 1rem;
  padding-right: 1rem;
}

.mg {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}

.pg {
  padding-left: 2rem;
  padding-right: 2rem;
}

.ch {
  padding-top: 6rem;
}

._h {
  padding-right: 0.75rem;
}

.fi {
  font-size: 1rem;
  line-height: 1.5rem;
}

.oi {
  font-weight: 600;
}

.vi,
.yi {
  --tw-text-opacity: 1;
  color: rgb(33 43 54 / var(--tw-text-opacity));
}

.yi {
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.gj {
  opacity: 0;
}

/* body {
  font-family: Inter, sans-serif;
} */

input:checked~.dot {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

.box-select-1:checked~label .box,
input#checkboxLabelOne:checked~.box,
input:checked~.box {
  --tw-border-opacity: 1;
  border-color: rgb(48 86 211 / var(--tw-border-opacity));
}

.box-select-1:checked~label .box .icon,
input#checkboxLabelThree:checked~.box span,
input#checkboxLabelTwo:checked~.box span,
input[type="checkbox"]:checked~.box span,
input[type="radio"]:checked~.box span {
  opacity: 1;
}

.color:checked~label span {
  height: 0.5rem;
  width: 0.5rem;
}

.box-select-1:checked~label .box {
  --tw-bg-opacity: 1;
  background-color: rgb(48 86 211 / var(--tw-bg-opacity));
}

@media (max-width: 540px) {
  .Productfilter {
    display: flex !important;
    flex-direction: column !important;
  }
}

@media (min-width: 540px) {
  .gl {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 720px) {
  .xl {
    border-left-width: 1px;
    border-right-width: 1px;
  }

  ._l {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 960px) {
  .zm {
    display: none;
  }

  ._m\/12 {
    width: 58.333333%;
  }

  .bn\/12 {
    width: 100%;
  }

  .en\/2 {
    width: 50%;
  }

  .en\/4 {
    width: 25%;
  }

  .en\/3 {
    width: 33.333333%;
  }

  .un {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .jo {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1140px) {
  .zo\/12 {
    width: 100%;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .pp {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1320px) {
  .\32xl\:ud-mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .\32xl\:ud-w-5\/12 {
    width: 41.666667%;
  }

  .\32xl\:ud-w-10\/12 {
    width: 83.333333%;
  }

  .\32xl\:ud-min-w-\[325px\] {
    min-width: 325px;
  }

  .\32xl\:ud-max-w-\[1320px\] {
    max-width: 1320px;
  }

  .\32xl\:ud-space-x-5> :not([hidden])~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.25rem * var(--tw-space-x-reverse));
    margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .\32xl\:ud-px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
}

.checkedsm {
  color: orange;
}

.uncheckedsm {
  color: black;
}

.scrollbar {
  margin-left: 22px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

#wrapper {
  text-align: center;
  margin: auto;
}

/*
 *  STYLE 3
 */

#style-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#style-3::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #f02640;
  border-radius: 10px;
}

/*
 *  STYLE 4
 */
</style>
