<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="wrap-menu">
            <li class="item-menu">
              <a href="javascript:;" class="click-menu">
                手机 电话卡
              </a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a href="javascript:;">
                      <img :src="sub?sub.img:'/img/item-box-1.png'">
                      {{sub? sub.name:"小米10"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                电视 盒子
              </a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a href="javascript:;">
                      <img :src="sub?sub.img:'/img/item-box-1.png'">
                      {{sub? sub.name:"小米10"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                笔记 本显示器
              </a>
              <div class="children">
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                家电 插线板
              </a>
              <div class="children">
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                出行 穿戴
              </a>
              <div class="children">
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                智能 路由器
              </a>
              <div class="children">
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;">
                电源 配件
              </a>
              <div class="children">
              </div>
            </li>
            <li class="item-menu">
              <a href="javascript:;"> 
                生活 箱包
              </a>
              <div class="children">
              </div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <a href="javascript:;">
              <img :src="item.img">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      </div>
      <div class="ads-box">
        <a href="javascript:;" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="javascript:;">
          <img src="/img/banner-1.png" alt="">
        </a>
      </div>
      
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="javascript:;">
                <img src="/img/mix-alpha.jpg">
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr,i) in phoneList" :key="i">
                <div class="item" v-for="(item,j) in arr" :key="j">
                  <span :class="{'new-pro':j%2==0,'kill-pro':j%2==1} ">新品</span>
                  <div class="item-img">
                    <img src="/img/phone-box-1.webp" alt="">
                  </div>
                  <div class="item-info">
                    <h3>小米10</h3>
                    <p>骁龙855</p>
                    <p class="price">1999元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation ,EffectFade,EffectCoverflow,EffectCube} from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.min.css'
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
SwiperClass.use([Pagination, Mousewheel, Autoplay,Navigation,EffectFade,EffectCoverflow,EffectCube])

import ServiceBar from './../components/ServiceBar'
export default {
  name: 'index',
  components:{
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions:{
        loop:true,
        autoplay:true,
        effect : 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        }
      },
      swiperList:[
        {
          id:'1',
          img:'/img/slider/slide-1.jpg'
        },
        {
          id:'2',
          img:'/img/slider/slide-2.jpg'
        },
        {
          id:'3',
          img:'/img/slider/slide-3.jpg'
        },
        {
          id:'4',
          img:'/img/slider/slide-4.jpg'
        },
        {
          id:'5',
          img:'/img/slider/slide-5.jpg'
        }
      ],
      menuList:[
        [
          {
            id:30,
            img:'/img/item-box-1.png',
            name:'小米CC9',
          },{
            id:31,
            img:'/img/item-box-2.png',
            name:'小米8青春版',
          },{
            id:32,
            img:'/img/item-box-3.jpg',
            name:'Redmi K20 Pro',
          },{
            id:33,
            img:'/img/item-box-4.jpg',
            name:'移动4G专区',
          }
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList:[
        {
          id:31,
          img:'/img/ads/ads-1.png'
        },
        {
          id:32,
          img:'/img/ads/ads-2.jpg'
        },
        {
          id:33,
          img:'/img/ads/ads-3.png'
        },
        {
          id:34,
          img:'/img/ads/ads-4.jpg'
        }
      ],
      phoneList:[
        [
          1,1,1,1
        ],
        [
          1,1,1,1
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
@import './../assets/sass/mixin';
@import './../assets/sass/config';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        z-index: 2;
        height: 461px;
        width: 264px;
        background-color: #69656599;
        box-sizing: border-box;
        padding: 26px 0;
        font-size: 16px;
        .item-menu{
          height: 50px;
          line-height: 50px;
          padding-left: 30px;
          & > a{
            position: relative;
            display: block;
            color: #fff;
            &::before{
              @include bgImg(10px,15px,'/img/icon-arrow.png');
              content: '';
              position: absolute;
              top:0;
              bottom: 0;
              right: 30px;
              margin: auto 0;
            }
          }
          &:hover{
            background-color: #FF6600;
            .children{
              display: block;
            }
          }
          .children{
            position: absolute;
            width:962px;
            border: 1px solid #e0e0e0;
            background-color: #fff;
            top:0;
            left: 264px;
            display: none;
            ul{
              display: flex;
              justify-content: space-between;
              height: 76px;
              li{
                line-height: 76px;
                height: 76px;
                flex: 1;
                padding-left: 23px;
                img{
                  width: 42px;
                  height: 35px;
                  margin-right: 15px;
                  vertical-align: middle;
                }
                a{
                  font-size: 14px;
                  color: #333333;
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 460px;
        .swiper-button-prev{
          left: 274px;
        }
        a{
          display: inline-block;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .ads-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 170px;
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner{
      margin-bottom: 50px;
      a{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .product-box{
      padding: 30px 0 50px;
      background-color: $colorJ;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
          img{
            width: 224px;
            height: 619px;
          }
        }
      }
      .list-box{
        .list{
          @include flex();
          width:986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span{
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color:$colorG;
              &.new-pro{
                background-color: #7ecf68;
              }
              &.kill-pro{
                background-color: #e82626;
              }
            }
            .item-img{
              img{
                height: 195px;
              }
            }
            .item-info{
              h3{
                font-size: $fontJ;
                line-height: $fontJ;
                color:$colorB;
                font-weight: bold;
              }
              p{
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price{
                color:#f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &::after{
                  content:'';
                  vertical-align: middle;
                  @include bgImg(22px,22px,'/img/icon-cart-hover.png');
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>