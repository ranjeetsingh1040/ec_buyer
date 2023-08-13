<template>
  <select @change="changed" class="countystatecity">
    <option value="" class="text-gray-400">Please select</option>
    <option :value="city.id" v-for="city in cities" :key="city.id">
      {{ city.name }}
    </option>
  </select>
</template>

<script>
  export default {
    data () {
      return {
        cities: []
      }
    },

    methods: {
      async getCities () {
        let response = await this.$axios.$get('cities')
        this.cities = response;
      },

      changed ($event) {
        this.$emit('input', $event.target.value)
      }
    },

    created () {
      this.getCities()
    }
  }
</script>
