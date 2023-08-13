<template>
  <div class="flex flex-col min-h-screen">
    <div class="header">
      <TheAlert />
      <Navigation />
      <Topmenu />
    </div>
    <!-- <div class="main flex-1 flex bg-gray-100 p-8"> -->
      <!-- <div class="w-1/6"> -->
      <div class="main flex-1 flex md:flex-row sm:flex-col lg:flex-row   xs:flex-col bg-gray-100 lg:p-8 md:p-4 sm:p-4 xs:p-4">
        <div class="lg:w-1/5 md:w-1/4 xs:w-full">
          <Membermenu />      
        </div>
        <!-- <div class="w-5/6"> -->
          <div class="lg:w-4/5 md:w-3/4 xs:w-full md:pl-3 lg:pl-0 sm:pl-0 md:pt-0 lg:pt-0 xs:pt-8	">
          <nuxt/>
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
  </div>
</template>



<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import Membermenu from '@/layouts/partials/Membermenu'
  import Topmenu from '@/layouts/partials/Topmenu'
  import Footer from '@/layouts/partials/Footer'
  export default {
    components: {
      Navigation,
      TheAlert,
      Membermenu,
      Topmenu,
      Footer
    }
  }
</script>
