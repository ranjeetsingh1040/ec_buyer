<template>
	<div class="secondary py-8">
		<h1 class="text-2xl font-bold text-center text-white pb-4">Sell on ShopTown</h1>
		 <div class="container mx-auto flex justify-center" >
        <div class="lg:w-1/3 md:w-1/2 w-full border border-gray-500 p-8 bg-white">
          <h3 class="uppercase mb-4 text-center ">Registration</h3>
          <hr class="border border-gray-500 my-4">
          <form action="">
            <div class="field my-2">
              <label class="label  my-2">Enter Name</label>
              <div class="control">
                <input class="input my-2 border border-gray-500 p-2 w-full rounded" type="text" placeholder="Enter Name">
              </div>
            </div>
            <div class="field my-2">
              <label class="label  my-2">Email ID</label>
              <div class="control">
                <input class="input my-2 border border-gray-500 p-2 w-full rounded" type="email"  placeholder="Enter Email ID"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label  my-2">Mobile Number</label>
              <div class="control">
                <input class="input my-2 border border-gray-500 p-2 w-full rounded" type="email"  placeholder="Enter Mobile no"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label  my-2">Company Name</label>
              <div class="control">
                <input class="input my-2 border border-gray-500 p-2 w-full rounded" type="email"  placeholder="Name of your company"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label  my-2">Company URL</label>
              <div class="control">
                <input class="input my-2 border border-gray-500 p-2 w-full rounded" type="email"  placeholder="Enter URL"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label  my-2">About your business</label>
              <div class="control">
                <textarea  class="input my-2 border border-gray-500 p-2 w-full rounded"></textarea>
              </div>
            </div>
           <div class="flex self-center"><a href="#" class="text-center no-underline w-full button is-info is-medium secondary px-4 py-2 text-white rounded hover:bg-black">Sign up</a></div>
            
          </form>
        </div>
      </div>
	</div>
</template>
<script >
import { mapActions } from 'vuex'
	export default {
		layout: 'blank'
	}
</script>