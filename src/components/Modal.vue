<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask">
      </div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('close-cart')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" v-if="btnType == 1" class="btn" @click="$emit('go-to-cart')">{{confirmText}}</a>
          <a href="javascript:;" v-if="btnType == 2" class="btn" @click="$emit('close-cart')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="$emit('go-to-cart')">{{confirmText}}</a>
            <a href="javascript:;" class="btn" @click="$emit('close-cart')">{{cancelText}}</a>
          </div>
        </div>
    </div>
  </div>
  </transition>
  
</template>

<script>
export default {
  name:'modal',
  props:{
    //弹框类型:小small,中middle,大large,表单form
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型：1：确定，2：取消，3：确定取消
    btnType:String,
    confirmText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean
  },
  methods: {
    closeCart(){
      this.showModal = false;
    }
  },
}
</script>

<style lang='scss'>
@import './../assets/sass/mixin';
@import './../assets/sass/config';
@import './../assets/sass/button';
@import './../assets/sass/modal';
</style>