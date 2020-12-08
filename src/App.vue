<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    gerUser(){
      this.axios.get('/user').then(res => {
        this.$storestore.dispatch('saveUserName', res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then( res => {
        this.$storestore.dispatch('saveCartCount', res)
      })
    } 
  },
}
</script>

<style lang="sass">
@import "./assets/sass/reset"
</style>
