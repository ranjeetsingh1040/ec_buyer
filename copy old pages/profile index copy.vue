<template>
	<div class="ml-8 bg-white">
		<div class="w-full p-6" v-show="showprofile">
			<h4 class="uppercase mb-4 font-semibold">Profile Information</h4>
			<div v-if="success != null" class="w-1/2 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
				<p class="text-white">{{ success }}</p>
				<img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
			</div>
			<div v-if="failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
				<p class="text-white">{{ failure }}</p>
				<img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
			</div>
			<div class="w-1/2 flex my-4">
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">Name</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p>{{ users.name }}</p>
				</div>
			</div>
			<div class="w-1/2 flex my-4">
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">E-mail ID</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p>{{ users.email }}</p>
				</div>
			</div>
			<div class="w-1/2 flex my-4">
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">Mobile No</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p>{{ users.mobileno }}</p>
				</div>
			</div>
			<div class="my-4 mt-10">
				<a href="#"
					class="no-underline w-64 button is-info is-medium px-4 py-2 text-white rounded bg-sky-500 hover:bg-sky-700"
					@click="showdiv()">Edit</a>
			</div>
		</div>
		<div class="w-full p-6" v-show="showedit">
			<h4 class="mb-4 uppercase font-semibold">Profile Information</h4>
			<div class="w-full flex my-4">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">Name</p>
				</div>
				<div class="w-3/5 md:w-1/6 lg:w-1/6">
					<input type="text" v-model="userdetails.name" class="input-type">
				</div>
				<p class="text-red-900" v-if="errors.name">
					{{ errors.name[0] }}
				</p>
			</div>
			<div class="w-full flex my-4">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">E-mail ID</p>
				</div>
				<div class="w-3/5 md:w-1/6 lg:w-1/6">
					<input type="text" v-model="userdetails.email" class="input-type">
				</div>
				<p class="text-red-900" v-if="errors.email">
					{{ errors.email[0] }}
				</p>
			</div>
			<div class="w-full flex my-4">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<p class="p1">Mobile No</p>
				</div>
				<div class="w-3/5 md:w-1/6 lg:w-1/6">
					<input type="text" v-model="userdetails.mobileno" class="input-type">
				</div>
				<p class="text-red-900" v-if="errors.mobileno">
					{{ errors.mobileno[0] }}
				</p>
			</div>
			<div class="my-4 mt-10">
				<a href="#"
					class="no-underline w-64 button is-info is-medium  px-4 py-2 text-white rounded bg-sky-500 hover:bg-sky-700"
					@click="updateuser()">Change</a>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	layout: 'member',
	data() {
		return {
			showprofile: true,
			showedit: false,
			success: null,
			failure: null,
			users: [],
			userdetails: {
				name: '',
				email: '',
				id: ''
			}
		}
	},
	methods: {
		async close() {
			this.success = null;
		},
		async fclose() {
			this.failure = null;
		},
		async showdiv() {
			this.showedit = true;
			this.showprofile = false;
		},
		async getuserdetails() {
			var userid = this.$auth.user.id;
			let response = await this.$axios.$get('users/getuserdetails');

			this.users = response;
			this.userdetails = response;

		},

		async updateuser() {

			let response = await this.$axios.$post('users/updateuser', this.userdetails).then((response) => {
				if (response.message == "Profile Updated Successfully.") {
					this.success = response.message;
					this.userdetails = '';
				}
				else {
					this.failure = response.message;
				}

				this.showedit = false;
				this.showprofile = true;
			}).catch((error) => {

				/// this.errors=error.response.data.errors;
				//console.log(error);
			});
		}
	},
	created() {
		this.getuserdetails();
	}
}
</script>
<style scoped>
.p1,
label {
	font-weight: bold;
	color: black;
}
</style>
