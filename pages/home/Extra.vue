<template>
  <div>


    <div class="grid sm:grid-cols-2 grid-row-2 sm:col-span-12  gap-0 hover14 column">
      <div class=" ">
       <figure> <img src="~/static/assets/images/Shoppiong0001.png" class="h-full w-full"> </figure>
      </div>
      <div class="">
       <figure> <img src="~/static/assets/images/men.png" class="h-full  w-full"> </figure>
      </div>
    </div>



    <!-- Container for demo purpose -->
    <div class="container my-24 lg:px-6 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800">
        <div class="relative overflow-hidden bg-no-repeat bg-cover subscribe">
        </div>


        <div class="container text-gray-800 px-4 md:px-12">
          <div class="block rounded-lg shadow-lg py-10 md:py-12 px-4  xs:px-0 md:px-0 lg:px-6 subscribegroup">
            <div class="flex flex-wrap justify-center text-center lg:text-left">
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div class="mb-10 lg:mb-0">
                    <h2 class="text-3xl font-bold">
                      Do not miss any updates.
                      <br />
                      <span class="text-[#f02640]">Subscribe to the newsletter</span>
                    </h2>
                  </div>

                  <div class="mb-6 md:mb-0">
                    <div class="md:flex flex-row">
                      <input type="text"
                        class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full"
                        placeholder="Enter your email" />
                      <button type="submit"
                        class="inline-block px-7 py-3 bg-[#f02640] text-white rounded-full font-medium text-sm leading-snug uppercase rounded shadow-md duration-150 ease-in-out"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->

  </div>
</template>
  
  
<style scoped>
.-skew-x-12 {
  transform: skewX(-12deg);
}

.skew-x-12 {
  transform: skewX(12deg);
}

.subscribe {
  background-position: 80%;
  background-image: url('~/static/assets/images/shoponline-wdbg.webp');
  height: 300px;
  border-radius: 50px 50px 0px 0px;
}

.subscribegroup {
  margin-top: -100px;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(30px);
}

/* <Hover Effect> */
  figure {
	margin: 0;
	padding: 0;
	background: #fff;
	overflow: hidden;
}
figure:hover+span {
	bottom: -36px;
	opacity: 1;
}



</style>