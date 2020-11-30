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

        </div>
        <div class="header-search">

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
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url('/img/icon-cart-checked.png') no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #f60;
          a{
            display: inline-block;
            width: 55px;
            height: 55px;
            overflow: hidden;
            &::before{
              content: "";
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/img/mi-logo.png') no-repeat center;
              background-size: contain;
              transition: margin .4s;
            }
            &::after{
              content: "";
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/img/mi-home.png') no-repeat center;
              background-size: contain;
            }
            &:hover::before{
              margin-left: -55px;
              transition: margin .4s;
            }
          }
        }
      }
    }
  }
</style>