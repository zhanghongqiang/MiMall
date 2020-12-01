<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>          
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
              <span>小米手机</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro-img"><img src="/img/item-box-1.png" alt=""></div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <div class="item-menu">
              <span>Redmi红米</span>
          </div>
          <div class="item-menu">
              <span>电视</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
              <input type="text" name="keyword">
              <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
@import './../assets/sass/base';
@import './../assets/sass/config';
@import './../assets/sass/mixin';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container{
        @include flex();
        a{
          display: inline-block;
          color:#b0b0b0;
          margin-right: 17px;
          &:hover{
            color: #fff;
          }
        }
        .my-cart{
          width: 110px;
          background-color: #f60;
          text-align: center;
          color: #fff;
          .icon-cart{
            @include bgImg(16px,12px,'/img/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        @include flex();
        height: 112px;
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #f60;
          overflow: hidden;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &::before{
              content: "";
              @include bgImg(55px,55px,'/img/mi-logo.png');
              transition: margin .2s;
            }
            &::after{
              content: "";
              @include bgImg(55px,55px,'/img/mi-home.png');
              transition: margin .2s;
            }
            &:hover::before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              height: 0;
              opacity: 0;
              width: 1226px;
              border: 1px solid #E5E5E5;
              z-index: 1;
              overflow: hidden;
              transition: all .4s;
              .product{
                position: relative;
                float: left;
                height: 220px;
                width: 16.6%;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                &::before{
                  content: '';
                  position:absolute;
                  top:28px;
                  right:0px;
                  border-left: 1px solid $colorF;
                  width: 1px;
                  height: 80px;
                }
                &:last-child::before{
                  border: none;
                }
                a{
                  display: inline-block;
                }
                .pro-img{
                  height: 117px;
                  img{
                    margin-top: 26px;
                  }
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color:$colorB;
                }
                .pro-price{
                  color: $colorA;
                }
              }
              
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            display: flex;
            align-items: center;
            border: 1px solid #E0E0E0;
            input{
              border: none;
              height: 50px;
              width: 264px;
              box-sizing: border-box;
              padding: 0 10px;
            }
            &:hover{
              border-color: #b0b0b0;
            }
            a{
              @include bgImg(18px,18px,'/img/icon-search.png');
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
</style>