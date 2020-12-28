<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from './../components/Loading.vue'
export default {
  components: { 
    Loading
  },
  name: 'alipay',
  data() {
    return {
      loading: true,
      content: '',
      orderId: this.$route.query.orderId
    }
  },
  methods: {
    paySubmit() {
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName: 'Vue高仿小米',
        amount: 0.01,
        payType: 1
      }).then( res => {
        this.content = res.content;
        setTimeout(()=> {
          document.forms[0].submit();
        },100)
      })
    }
  },
}
</script>

<style>

</style>