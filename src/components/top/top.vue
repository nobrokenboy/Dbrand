<template>
  <div class="d-brand-toTop" v-if="isShowTop">
      <a class="d-brand-top" @click="toTop">
        <!--<i class="iconfont icon-to-top">到顶</i>-->
        <i class="iconfont icon-to-top">&#xe678;</i>
      </a>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: [],
    data(){
      return {
        isShowTop:false,
//        scrollTopDistance:0,
      }
    },
    computed:{

    },
    watch:{

    },
    mounted(){
      let self=this;
      $(window).scroll(function(){
         var $this=$(this),
           scrollTop=$this.scrollTop(),
           screenHeight=$this.height();
        var contentHeight=$('html,body').height();
        if(scrollTop>200){
          self.isShowTop=true;
        }else{
          self.isShowTop=false;
        }
      });
    },
    methods:{
      toTop(){
          $('html,body').animate({
            scrollTop:0
          },500);
      }
    }
  }
</script>
<style lang="scss" scoped>
  $themeColor:#ffd433;
  .d-brand-toTop{
    position:fixed;
    right:50px;
    bottom:100px;
    z-index:99;
  }
  .d-brand-top{
     display:inline-block;
     width:60px;
     height:60px;
     line-height:60px;
     background:$themeColor;
     border-radius:50%;
     text-align:center;
     cursor: pointer;
     color:#fff;
  }
  @media all and (max-width:938px){
    .d-brand-toTop{
      right:1rem;
      bottom:1rem;
    }
    .d-brand-top{
      width:3rem;
      height:3rem;
      line-height:3rem;
    }
  }
</style>
