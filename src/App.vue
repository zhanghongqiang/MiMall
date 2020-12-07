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
      this.axios.get('/user').then(() => {})
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(() => {})
    }
  },
}
</script>

<style lang="sass">
@import "./assets/sass/reset"
</style>
