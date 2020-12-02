<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/img/logo-footer.png" alt="logo-footer">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">主页</a><span>|</span>
      <a href="javascript:;">Vue全栈课程</a><span>|</span>
      <a href="javascript:;">React全家桶课程</a><span>|</span>
      <a href="javascript:;">微信支付专项课程</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
  .footer{
    height: 234px;
    text-align: center;
    background-color: #333;
    color: #999;
    font-size: 16px;
    border-top: 4px solid #FF6600;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      margin-bottom: 13px;
      a{
        color: #999;
        display: inline-block;
        &:hover{
          color: #FF6600;
        }
      }
      span{
        margin: 0 10px;
      }
    }
    .copyright{
      .domain{
        color: #FF6600;
      }
    }
  }
</style>