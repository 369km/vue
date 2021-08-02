<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">search Github Users</h3>
    <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
    <button @click="searchUsers">Search</button>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      this.$bus.$emit('getUsers', {isFirst: false, isLoading: true, errMsg: '', users: []})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
          .then(response => {
            this.$bus.$emit('getUsers', {isLoading: false, errMsg: '', users: response.data.items})
          }, error => {
            console.log(error.message)
            this.$bus.$emit('getUsers', {isLoading: false, errMsg: error.message, users: []})
          })
    }
  }
}
</script>