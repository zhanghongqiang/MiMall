<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tips>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span>全选</span></li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">小计</li>
            <li class="col-1">操作</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'cart',
  components:{
    OrderHeader
  }
}
</script>

<style lang='scss'>
  .cart{
    .wrapper{
      background-color: #f5f5f5;
      padding-top: 30px;
      padding-bottom: 114px;
      .cart-box{
        background-color: #fff;
        font-size: 14px;
        color:#999;
        text-align: center;
        .cart-item-head{
          display: flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex: 1;
          }
          .col-2{
            flex: 2;
          }
          .col-3{
            flex: 3;
          }
        }
      }
    }
  }
</style>