<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ">
            </div>
            <div class="order-info">
              <h2>订单提交成功! 去付款咯~</h2>
              <p>请在<span>30分</span>内完成支付,超时后将取消订单</p>
              <p>收货信息:Admin 183****0972 北京 北京市 朝阳区 望京西街 望京(地铁站)</p>
            </div>
            <div class="order-total">
              <p>应付总额:<span>2599</span>元</p>
              <p>订单详情<em class="icon-down" :class="{up:showDetail}" @click="showDetail = !showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号:</div>
              <div class="detail-info theme-color">5190702816411009</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息</div>
              <div class="detail-info">Admin 183****0972 北京 北京市 朝阳区 望京街道 望京(地铁站)</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称:</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item, index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage">{{item.productName}}
                  </li>
                  <li><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png" alt="">小米8 青春 全网通版 6GB内存 深空灰 64GB</li>
                  <li><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png" alt="">小米8青春版 标准高透贴膜 高透</li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息:</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" :class="{checked:payType == 1}" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{checked:payType == 2}" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code v-if="showPay" @close="closePayModal" :img="payImg"></scan-pay-code>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import QRCode from 'qrcode'
import ScanPayCode from '../components/ScanPayCode.vue'
export default {
  name: 'order-pay',
  data() {
    return {
      showDetail: false,
      showPay: false,
      payType: 1,
      orderNo: this.$route.query.orderId,
      payImg: ''
    }
  },
  components: {
    OrderHeader,
    ScanPayCode
  },
  mounted() {
    this.orderNo = "12334343"
  },
  methods: {
    paySubmit(payType){
      this.payType = payType
      if(payType == 1){
        window.open('/#/order/alipay?orderId='+this.orderNo,'_blank')
      }else{
        console.log('payType = 2')
        
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName: 'Vue高仿小米',
          amount: 0.01,
          payType: 2
        }).then( res => {
          this.content = res.content;
          QRCode.toDataURL(res.content)
          .then(url => {
            console.log(url)
            this.showPay = true
            this.payImg = url
          })
          .catch(() => {
            this.$message.error('微信二维码生成失败，请稍后重试')
          })
        })
        
      }
    },
    closePayModal() {
      this.showPay = false
    }
  },
}
</script>

<style lang='scss'>
  .order-pay{
    .wrapper{
      background-color: #F5F5F5;
      padding: 30px 0 16px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background:url('/img/icon-gou.png') #80c58a no-repeat center;
            background-size: 60px;
            margin-right: 40px;
          }
          .order-info{
            margin-right: 248px;
            h2{
              font-size: 24px;
              color: #333;
              margin-bottom: 20px;
            }
            p{
              color:#666;
              span{
                color:#FF6700;
              }
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom: 30px;
            }
            span{
              font-size:28px;
              color:#FF6700;
            }
            .icon-down{
              display: inline-block;
              width: 14px;
              height: 10px;
              background: url('/img/icon-down.png') no-repeat center;
              background-size: contain;
              margin-left: 9px;
              transition: all .5s;
              cursor: pointer;
              &.up{
                transform: rotate(180deg);
              }
            }
            .icon-up{
              transform: rotate(180deg);
            }
          }
        }
        .item-detail{
          border-top:1px solid #d7d7d7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom: 19px;
            .detail-title{
              float: left;
              width:100px;
            }
            .detail-info{
              display: inline-block;
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay{
        padding:26px 50px 72px;
        background-color: #fff;
        color:#333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color:#333;
          padding-bottom: 24px;
          border-bottom: 1px solid #d7d7dd;
          margin-bottom: 26px;
        }
        .pay-way{
          font-size: 18px;
          .pay{
            display: inline-block;
            width:188px;
            height: 64px;
            border:1px solid #d7d7d7;
            cursor: pointer;
            &:last-child{
              margin-left: 20px;
            }
            &.checked{
              border:1px solid #ff6700;
            }
          }
          .pay-ali{
            background:url('/img/pay/icon-ali.png') no-repeat center;
            background-size: 103px 38px;
            margin-top: 19px;
          }
          .pay-wechat{
            background:url('/img/pay/icon-wechat.png') no-repeat center;
            background-size: 103px 38px;
          }
        }
      }
    }
  }
</style>