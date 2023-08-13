<template>
  <div class="bg-white">
    <div class="pt-6">


      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 hidden lg:block">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt="Two each of gray, white, and black shirts laying flat."
            class="h-full w-full object-cover object-center">
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
          </div>
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>

        <!-- Mobile Carousel Start -->
      <div id="carouselExampleControls" class="carousel lg:hidden">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" class="carousel-img" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" class="carousel-img" alt="Second slide" />
          </div>
        </div>

        <a id="carouselPrev" class="carousel-control-prev" href="#carouselExampleControls" role="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a id="carouselNext" class="carousel-control-next" href="#carouselExampleControls" role="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- Mobile Carousel End -->
      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16   lg:block">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">$192</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <!--
                  Heroicon name: mini/star
  
                  Active: "text-gray-900", Default: "text-gray-200"
                -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>

                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>

                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>

                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>

                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <p class="sr-only">4 out of 5 stars</p>
              <a href="#" class="ml-3 text-base font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-base font-medium text-gray-900">Color</h3>

              <fieldset class="mt-4">
                <legend class="sr-only">Choose a color</legend>
                <div class="flex items-center space-x-3">
                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" class="sr-only"
                      aria-labelledby="color-choice-0-label">
                    <span id="color-choice-0-label" class="sr-only"> White </span>
                    <span aria-hidden="true"
                      class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                  </label>

                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="Gray" class="sr-only"
                      aria-labelledby="color-choice-1-label">
                    <span id="color-choice-1-label" class="sr-only"> Gray </span>
                    <span aria-hidden="true"
                      class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                  </label>

                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Black" class="sr-only"
                      aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Black </span>
                    <span aria-hidden="true"
                      class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-medium text-gray-900">Size</h3>
                <a href="#" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>

              <fieldset class="mt-4">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                    <input type="radio" name="size-choice" value="XXS" disabled class="sr-only"
                      aria-labelledby="size-choice-0-label">
                    <span id="size-choice-0-label">XXS</span>

                    <span aria-hidden="true"
                      class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100"
                        preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="XS" class="sr-only"
                      aria-labelledby="size-choice-1-label">
                    <span id="size-choice-1-label">XS</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="S" class="sr-only"
                      aria-labelledby="size-choice-2-label">
                    <span id="size-choice-2-label">S</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="M" class="sr-only"
                      aria-labelledby="size-choice-3-label">
                    <span id="size-choice-3-label">M</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="L" class="sr-only"
                      aria-labelledby="size-choice-4-label">
                    <span id="size-choice-4-label">L</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="XL" class="sr-only"
                      aria-labelledby="size-choice-5-label">
                    <span id="size-choice-5-label">XL</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="2XL" class="sr-only"
                      aria-labelledby="size-choice-6-label">
                    <span id="size-choice-6-label">2XL</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label
                    class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-base font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="3XL" class="sr-only"
                      aria-labelledby="size-choice-7-label">
                    <span id="size-choice-7-label">3XL</span>

                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <button type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#f02640] py-3 px-8  text-2xl text-white  text-lg font-bold ">
              Add to Cart</button>
          </form>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant
                personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a
                trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your
                outfit? Our white tee has you covered.</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-base font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-base">
                <li class="text-gray-400"><span class="text-gray-400">Hand cut and sewn locally</span></li>

                <li class="text-gray-400"><span class="text-gray-400">Dyed with our proprietary colors</span></li>

                <li class="text-gray-400"><span class="text-gray-400">Pre-washed &amp; pre-shrunk</span></li>

                <li class="text-gray-400"><span class="text-gray-400">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-base font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-base text-gray-400">The 6-Pack includes two black, two white, and two heather gray Basic
                Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our
                upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>
          <div class="mt-10">
          
        <div class="flex items-center mb-3">
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>First star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Second star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Third star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Fourth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Fifth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          <p class="ml-2 text-base font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
        </div>
        <p class="text-base font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
        <div class="flex items-center mt-4">
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">5 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-[#f02640] rounded" style="width: 70%"></div>
          </div>
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">70%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">4 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-[#f02640] rounded" style="width: 17%"></div>
          </div>
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">17%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">3 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-[#f02640] rounded" style="width: 8%"></div>
          </div>
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">8%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">2 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-[#f02640] rounded" style="width: 4%"></div>
          </div>
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">4%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">1 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-[#f02640] rounded" style="width: 1%"></div>
          </div>
          <span class="text-base font-medium text-gray-400 dark:text-gray-500">1%</span>
        </div>
    
          </div>
        </div>
      </div>

     


    </div>
  </div>
</template>
<script>
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
</script>
<script scoped>
import { mapActions } from "vuex";

export default {
  props: ["slug"],

  data() {
    return {
      product: [],
      item1: true,
      item2: false,
      item3: false,
      open: false,
      tab: "item1",
      params: this.$route.params.slug,
      products: {},
      productvariations: [],
      variationlength: 0,
      variationname: "",
      novariationid: 0,
      total_rating: 5,
      selectcolor: "",
      seller_id: "",
      form: {
        avaliable: null,
        pincode: "",
      },
      avaliable: null,
      pincodelists: [],
      showaddcart: true,
      success: null,
      failure: null,
      productattribute: "",
    };
  },
  methods: {
    ...mapActions({
      flash: "alert/flash",
    }),
    settab(tabname) {
      this.tab = tabname;
    },
    // getvariation(variation){
    //   this.color=variation.name;
    //   document.querySelector(".dynamic").style.background = this.color;

    // },
    close() {
      this.success = null;
    },
    cancelclose() {
      this.failure = null;
    },
    async getproduct() {
      let response = await this.$axios.$get(`products/` + this.params);
      this.product = response.data;
      this.seller_id = this.product.user;
      //  this.seller_id=this.product.user.id;
      if (this.product.variations.length > 0) {
        //in json output the variation value is "" :{} array
        this.variationlength = this.product.variations[""].length;
        for (var i = 0; i < this.variationlength; i++) {
          this.variationname = this.product.variations[""][i].name;
          this.novariationid = this.product.variations[""][i].id;
        }
      }
    },

    size: function (id) {
      this.productvariations.push({ id: id, quantity: 1 });
    },
    color: function (id) {
      this.productvariations.push({ id: id, quantity: 1 });
    },
    sizechanged($event) {
      //  alert($event.target.value);
      this.$emit("input", $event.target.value);
      this.productvariations.push({ id: $event.target.value, quantity: 1 });
    },
    colorchanged($event) {
      // alert($event.target.value)
      this.$emit("input", $event.target.value);
      // alert($event.target.value)
      this.productvariations.push({ id: $event.target.value, quantity: 1 });
    },

    async addcart() {
      if (this.variationname.toLowerCase() !== "no variation") {
        if (this.productattribute == "") {
          this.failure = "select any one size or color";
        } else {
          this.productvariations.push({
            id: this.productattribute,
            quantity: 1,
          });
          this.products["products"] = this.productvariations;

          var self = this;
          let response = await this.$axios
            .$post("cart", this.products)
            .then((response) => {
              this.flash = "added";
              this.$nuxt.$emit("getcart", true);
              this.$router.replace({
                name: "cart",
              });
            })
            .catch(function (error) {
              if (error.response.status == 401) {
                self.failure = "Please Signin";
              }
            });
        }
      } else {
        this.productvariations.push({ id: this.novariationid, quantity: 1 });
        this.products["products"] = this.productvariations;

        let response = await this.$axios
          .$post("cart", this.products)
          .then((response) => {
            this.flash = "added";
            this.$nuxt.$emit("getcart", true);
            this.$router.replace({
              name: "cart",
            });
          })
          .catch(function (error) {
            // if(error.message=="Request failed with status code 401"){
            //  this.$router.replace({
            //           name: 'index',
            //          })
            // }
          });
      }
      // this.products['products'] =[
      //   { "id":this.product.productvariations[i].id ,"quantity":2 }];
      // this.products['products']=[{ "id":3 ,"quantity":2 }];
    },
    checkpincode() {
      this.getpincodeavaliable();
    },
    async getpincodeavaliable() {
      let response = await this.$axios.$get(
        "settings/pincodeavailable/" + this.seller_id + "/" + this.form.pincode
      );

      this.pincodelists = response;

      if (this.pincodelists.pincode == this.form.pincode) {
        this.form.avaliable = this.pincodelists.pincode;
        this.avaliable =
          "Generally Delivered in " + this.pincodelists.delivered + " days";
        this.showaddcart = true;
      } else {
        this.form.avaliable = null;
        this.avaliable = "Not Avaliable";
        this.showaddcart = false;
      }
      // if(this.pincodelists.length>0){
      //   for (var i =0;i<this.pincodelists.length;i++) {
      //     this.form.avaliable=this.pincodelists[i].pincode;
      //      this.avaliable="Generally Delivered in " + this.pincodelists[i].delivered + " days";
      //      this.showaddcart=true;
      //   }
      //  }
    },
  },

  created() {
    this.getproduct();
  },
  mounted() {
    const carousel = document.getElementById('carouselExampleControls')
    var items = carousel.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let isActive = true;

    function setCurrentItem(index) {
      currentItem = (index + items.length) % items.length;
    }

    function hideItem(direction) {
      isActive = false;
      items[currentItem].classList.add(direction);
      items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
      });
    }

    function showItem(direction) {
      items[currentItem].classList.add('next', direction);
      items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isActive = true;
      });
    }

    document.getElementById('carouselPrev').addEventListener('click', function (e) {
      e.preventDefault()
      if (isActive) {
        hideItem('to-right');
        setCurrentItem(currentItem - 1);
        showItem('from-left');
      }
    });

    document.getElementById('carouselNext').addEventListener('click', function (e) {
      e.preventDefault()
      if (isActive) {
        hideItem('to-left');
        setCurrentItem(currentItem + 1);
        showItem('from-right');
      }
    });
  },
 
};
</script>
<style>
.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;

}

.carousel-inner>.carousel-item {
  position: relative;
  display: none;
  animation: 0.6s ease-in-out;
  /* height: 70vh; */
  /* Set your height */
}

.carousel-item>.carousel-img {
  width: 100%;
  /* min-height: 30vh;
  max-height: 50vh; */
  /* height: 600px; */
  /* height: auto; */
}

.carousel-item.carousel-video {
  display: block;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  /* uncomment the following line if you want to prevent mouse (or touch) clicks */
  /* pointer-events: none; */
}

.carousel-inner>.active,
.carousel-inner>.next {
  display: block;
}

.carousel-inner>.next {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel-inner>.to-left {
  animation-name: left;
}

.carousel-inner>.from-right {
  animation-name: right;
}

.carousel-inner>.to-right {
  animation-name: right;
  animation-direction: reverse;
}

.carousel-inner>.from-left {
  animation-name: left;
  animation-direction: reverse;
}

.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  cursor: pointer;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {

  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}

.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50% / 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

@keyframes left {
  from {
    left: 0;
  }

  to {
    left: -100%;
  }
}

@keyframes right {
  from {
    left: 100%;
  }

  to {
    left: 0;
  }
}

.add_hover:hover {
  border-radius: 50px;
  border-color: #f68c23 !important;
  transition: all 0.3s ease 0s;
  background-color: #ff5139;
}

.buy_hover:hover {
  border-radius: 50px;
  border-color: black !important;
  transition: all 0.3s ease 0s;
  background-color: black;
}

.active {
  color: red;
}
</style>
