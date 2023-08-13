<template>
  <div>
    <input v-model="query" type="text" placeholder="Search products" @input="updateSearch">
    <select v-model="color" @change="updateSearch">
      <option value="">All colors</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
    <select v-model="size" @change="updateSearch">
      <option value="">All sizes</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
    <select v-model="sort" @change="updateSearch">
      <option value="">Sort by</option>
      <option value="price_asc">Price: low to high</option>
      <option value="price_desc">Price: high to low</option>
    </select>
  </div>
</div></template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      query: state => state.search.query,
      color: state => state.search.color,
      size: state => state.search.size,
      sort: state => state.search.sort
    })
  },
  methods: {
    ...mapMutations({
      setSearch: 'search/setSearch'
    }),
    updateSearch() {
      this.setSearch({
        query: this.query,
        color: this.color,
        size: this.size,
        sort: this.sort
      });
      // Call the API to search, filter, and sort the products
      this.$axios.get('/products/search', {
        params: {
          search: this.query,
          color: this.color,
          size: this.size,
          sort: this.sort
        }
      }).then(response => {
        // Handle the response
      }).catch(error => {
        // Handle the error
      });
    }
  }
};
</script>