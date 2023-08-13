<template>
  <!-- <div class="h-full">
    <div class="w-full p-4 bg-white shadow">
      <div class="my-2">
        <h4 class="member-menu-heading">Account</h4>
        <ul class="list-reset flex flex-col">
          <nuxt-link :to="{ name: 'profile' }" class="member-menu-item">
            View Profile
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-password' }" class="member-menu-item">
            Change Password
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-avatar' }" class="member-menu-item">
            Change Avatar
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-cards' }" class="member-menu-item">
            Saved Cards
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-addresses' }" class="member-menu-item">
            Addresses
          </nuxt-link>
          <nuxt-link :to="{ name: 'orders' }" class="member-menu-item">
            Orders
          </nuxt-link>
          <nuxt-link :to="{ name: 'wishlist' }" class="member-menu-item">
            Wishlist
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div> -->
  <div>
    <div class=" p-4 bg-white shadow">
      <!--   <div class="member-menu-seperator">
          <h4 class="member-menu-heading">Overview</h4>
        </div> --><!-- to do -->
      <!--   <div class="member-menu-seperator">
        <h4 class="member-menu-heading">Orders</h4>
          <ul class="list-reset">
            <li class="member-menu-item">Orders & Returns</li>
          </ul>
        </div> --><!-- to do -->
      <!--         <div class="member-menu-seperator">
        <h4 class="member-menu-heading">Credits</h4>
        <ul class="list-reset">
          <li class="member-menu-item">Gego credit</li>
          <li class="member-menu-item">Gego coupon</li>
          <li class="member-menu-item">Wallet</li>
          <li class="member-menu-item">Rewards</li>
          <li class="member-menu-item">Gego points</li>
        </ul>
        </div> --><!-- to do -->

      <div class="my-2">
        <h2 class="member-menu-heading text-2xl">Account</h2>
        <ul class="list-reset flex flex-col membermenu">
          <nuxt-link :to="{ name: 'profile' }" class="member-menu-item py-1">
            <i class="fa-solid fa-user-plus pr-px"></i> View Profile
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-password' }" class="member-menu-item py-1">
            <i class="fa-solid fa-lock pr-px"></i> Change Password
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-avatar' }" class="member-menu-item py-1">
            <i class="fa-solid fa-user pr-px"></i> Change Avatar
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-cards' }" class="member-menu-item py-1">
            <i class="fa-solid fa-address-card pr-px"></i> Saved Cards
          </nuxt-link>
          <nuxt-link :to="{ name: 'profile-addresses' }" class="member-menu-item py-1">
            <i class="fa-solid fa-location-dot pr-px"></i> Addresses
          </nuxt-link>
          <nuxt-link :to="{ name: 'orders' }" class="member-menu-item py-1">
            <i class="fa-solid fa-cube pr-px"></i> Orders
          </nuxt-link>
          <nuxt-link :to="{ name: 'wishlist' }" class="member-menu-item py-1">
            <i class="fa-solid fa-hand-holding-heart pr-px"></i> Wishlist
          </nuxt-link>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.membermenu .fa-solid {
  color: #f02640;
  font-size: 15px;
}
</style>