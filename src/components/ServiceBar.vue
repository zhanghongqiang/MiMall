<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <a href="javascript:;">
          <span class="icon-setting"></span>预约维修服务
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="icon-7day"></span>7天无理由退货
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="icon-15day"></span>15天免费换货
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span class="icon-post"></span>满150包邮
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang='scss'>
@import './../assets/sass/mixin';
  .service{
    padding: 33px 0;
    font-size: 16px;
    color: #666;
    li{
      display: inline-block;
      width: 24.9%;
      border-right: 1px solid #e5e5e5;
      text-align: center;
      a{
        display: inline-block;
        color: #666;
        &:hover{
          color: #FF6600;
        }
        span{
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 8px;
          vertical-align: middle;
        }
        .icon-setting{
          @include bgImg(20px,20px,'/img/icon-setting.png')
        }
        .icon-7day{
          @include bgImg(20px,20px,'/img/icon-7day.png')
        }
        .icon-15day{
          @include bgImg(20px,20px,'/img/icon-15day.png')
        }
        .icon-post{
          @include bgImg(20px,20px,'/img/icon-post.png')
        }
      }
    }
  }
</style>