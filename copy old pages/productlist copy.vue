
<template>
  <div>
    <!-- Product Details start Here -->
    <div class="flex flex-row  sm:flex sm:flex-col">
      <div class="sm:w-full lg:basis-full md:basis-full xl:basis-full 2xl:basis-full p-4">
        <div class="container mx-auto my-4">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:secondary dark:text-gray-400 dark:hover:secondary">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                  </path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <a href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:secondary md:ml-2 dark:text-gray-400 dark:hover:secondary">product</a>
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
        <section class="jf pb-20">
          <div class="a mx-auto">
            <div class="_ gb">
              <div class="bc gg bn/12 zo/12">
                <div class="ia ke qe gf kf">
                  <div class="xe gf fg pg un px-8">
                    <h3 class="fi oi vi gl jo pp">Product Type</h3>
                  </div>
                  <div class="ee mg pg un px-8">
                    <div>
                      <label for="checkboxLabelOne" class="gb sd td zd vi">
                        <div class="d">
                          <input type="checkbox" id="checkboxLabelOne" class="b" checked />
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
                        Standalone
                      </label>
                    </div>
                    <div>
                      <label for="checkboxLabelTwo" class="gb sd td zd vi">
                        <div class="d">
                          <input type="checkbox" id="checkboxLabelTwo" class="b" />
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
                        Mobile
                      </label>
                    </div>
                    <div>
                      <label for="checkboxLabelThree" class="gb sd td zd vi">
                        <div class="d">
                          <input type="checkbox" id="checkboxLabelThree" class="b" />
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
                        Clothing
                      </label>
                    </div>
                    <div>
                      <label for="checkboxLabel4" class="gb sd td zd vi">
                        <div class="d">
                          <input type="checkbox" id="checkboxLabel4" class="b" />
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
                        Tethered
                      </label>
                    </div>
                  </div>
                </div>

                <div class="ia ke qe gf kf">
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
                </div>

                <div class="ia ke qe gf kf">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ====== Filters Section End -->
      </div>

      <div class="xs:basis-full lg:basis-3/4 md:basis-3/4 xl:basis-3/4 2xl:basis-3/4 mb-7">
        <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[30px]">
          <div class="text-center shadow-lg rounded" v-for="product in products" :key="product.id">
            <div class="overflow-hidden" v-if="product.productgallery.length > 0">
              <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }">
                <img v-bind:src="rooturl + product.productgallery[0].imagepath"
                  class="hover:scale-125 duration-1000 imgsizeproduct">
              </nuxt-link>
            </div>
            <h3 class="py-2 text-lg">{{ product.name.slice(0, 60) }}...</h3>
            <p class="text-lg pb-5">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'home',
  //props:['searchq'],
  data() {
    return {
      rss: '',
      products: [],
      sellers: [],
      stockavailable: 0,
      outofstock: 0,
      searchuserid: [],
      chkboxtype: [],
      useridlist: [],
      rooturl: process.env.SITEURL,
      total_rating: 5,
      modvalue: 0,
      page: 1,
      page_count: 0,
      total: '',
      open: false,
      //searchparam:this.$route.params.searchq, //params
      searchparam: this.$route.query.searchq, //query

    }
  },

  components: {
    //Paginate
  },
  watch: {
    '$route.query.searchq': function () {
      this.getproduct();
    }
  },
  computed: {
    cheapestprice: function () {
      return this.products.reduce(function (item) {
        return a.price - b.price;
      }, 0);
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    async getproduct(page = 1) {
      if (this.$route.query.searchq == undefined) {
        this.searchparam = '';
      }
      let response = await this.$axios.$get('products?search=' + this.searchparam + '&page=' + page);
      this.products = response.data;
      this.modvalue = this.products.length % 4;
      this.page_count = response.meta.last_page;
      this.total = response.meta.total;
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

    async getSellers() {
      let response = await this.$axios.$get('sellers');
      this.sellers = response.data;
    },
    async searchPrice(priceval) {
      let response = await this.$axios.$get('products/pricefilter/' + priceval);
      this.products = response.data;
    },

    // async search(){

    //    this.$router.replace({
    //        name: 'products-productlist',
    //        params: { searchq: this.searchquery, }
    //      });
    // } ,
    productredirect(product) {
      this.$router.replace({
        name: 'products-slug',
        params: { slug: product.slug }
      })
    },

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


      let response = await this.$axios.$get('products/searchbrand/' + userid);
      this.products = response.data;
    },


  },
  watch: {
    // call again the method if the route changes
    '$route': 'getproduct'
  },
  created() {
    this.getproduct();
    this.getSellers();
    this.rss = this.searchparam
    console.log("productList", this.searchparam);
    // this.$nuxt.$on('productsearch_query', data => {
    //   this.searchparam = data;
    //   this.getproduct();
    // });
  },
}
</script>

<style scoped>
*,
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

body {
  font-family: Inter, sans-serif;
}

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
  .Productfilter{
    display:flex !important;
    flex-direction:column !important;
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
</style>
