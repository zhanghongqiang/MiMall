<template>
  <div class="login">
    <div class="container">
      <img src="/img/login-logo.png">
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <div class="title">
            <span class="checked">账号登录</span>
            <span class="sep-line"></span>
            <span>扫码登录</span>
          </div>
          <div class="input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码?</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">主页</a>
        <a href="javascript:;">Vue课程</a>
        <a href="javascript:;">React课程</a>
        <a href="javascript:;">微信支付主页</a>
      </div>
      <p class="copyright">
        Copyright ©2019 mi.futurefe.com All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods: {
    login(){
      let {username,password} = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userid',res.id,{expires:'1h'});
        this.$store.dispatch('saveUserName', res.username);
        this.$router.push('/index');
      })
    },
    register(){

    }
  },
}
</script>

<style lang='scss'>
  .login{
    &>.container{
      height: 113px;
      img{
        width: auto;
        height: 100%;
      }
    }
    .wrapper{
      background: url('/img/login-bg.jpg') no-repeat top center;
      .container{
        height: 576px;
        .login-form{
          box-sizing: border-box;
          padding: 0 31px;
          width: 410px;
          height: 510px;
          background-color: #fff;
          position: absolute;
          right: 0;
          bottom: 29px;
          .title{
            line-height: 23px;
            font-size: 24px;
            margin:40px auto 49px;
            color: #666;
            .checked{
              color:#f60;
            }
            .sep-line{
              width: 1px;
              height: 24px;
              border: 1px solid #e0e0e0;
              background: #e0e0e0;
              margin: 0 32px;
            }
          }
          .input{
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            input{
              border:none;
              height: 100%;
              width: 100%;
              box-sizing: border-box;
              padding: 18px;
            }
          }
          .btn{
            width: 100%;
            line-height: 50px;
            margin-top: 10px;
            font-size: 16px;
          }
          .tips{
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            cursor: pointer;
            .sms{
              color: #f60;
            }
            .reg{
              color: #999;
              span{
                margin: 0 7px;
              }
            }
          }
        }
      }
    }
    .footer{
      height: 100px;
      padding-top: 60px;
      color: #999;
      font-size: 16px;
      text-align: center;
      .footer-link{
        a{
          color: #999;
          display: inline-block;
        }
        span{
          margin: 0 10px;
        }
      }
      .copyright{
        margin-top:13px;
      }
    }
  }
</style>