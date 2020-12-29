<template>
  <div class="order-list">
    <order-header title="订单支付">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order">
            <div class="order-title">
              <div class="item-info fl">
                2020-12-29 11:43:08
                <span>|</span>
                河畔角
                <span>|</span>
                订单号：1352216743 
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额:</span>
                <span class="money">999</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">Redmi Note 8</div>
                    <div class="p-money">999x1元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;">未支付</a>
              </div>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            @size-change="sizeChange"
            @current-change ="currentChange"
            class="pagination-right"
            :total="40">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import { Pagination } from 'element-ui'
export default {
  name: 'order-list',
  data() {
    return {
      pageSize:10
    }
  },
  components: {
    OrderHeader,
    [Pagination.name]: Pagination
  },
  methods: {
    sizeChange(pageCount){
      console.log("sizeChange:"+pageCount)
    },
    currentChange(currentPage){
      console.log("currentChange:"+currentPage)
    }
  },
}
</script>

<style lang='scss'>
  @import './../assets/sass/config';
  @import './../assets/sass/mixin';
  .order-list{
    background-color: $colorJ;
    padding:33px 0 110px;
    .order-box{
      .order{
        border:1px solid $colorF;
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child{
          margin-bottom: 0;
        }
        .order-title{
          height: 74px;
          line-height: 74px;
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info{
            span{
              margin: 0 9px;
            }
          }
          .money{
            font-size:26px;
            color:$colorB;
          }
        }
        .order-content{
          padding: 0 43px;
          .good-box{
            width: 88%;
            .good-list{
              display: flex;
              align-items: center;
              height: 145px;
              .good-img{
                width: 112px;
                img{
                  width: 100%;
                }
              }
              .good-name{
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state{
            height: 145px;
            line-height: 145px;
            font-size: 20px;
            color: $colorA;
            a{
              color: $colorA;
            }
          }
        }
      }
      .pagination-right{
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #FF6600;
        color: #FFF;
      }
    }
  }
</style>