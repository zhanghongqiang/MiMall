<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <div class="btn">立即购买</div>
      </template>
    </product-param>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  name: 'product',
  components:{
    ProductParam
  }
}
</script>

<style lang='scss'>
  .product{
    .h{
      height: 100px;
      line-height: 100px;
    }
    .btn{
      margin-left: 10px;
    }
  }
</style>