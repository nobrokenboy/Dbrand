<template>
    <header>
       <div class="d-brand-header" :style="navStyle" ref="header">
           <div class="container" >
             <div class="d-brand-logo fl">
               <!--<img src="../../assets/logo-1.png" alt="萌豆瓜儿">-->
               <span class="d-brand-logo-name">LightFeather</span>
             </div>
             <!--收缩按钮-->
             <div class="wrapper hide" >
               <input type="checkbox" id='more'  class="checkbox" @click="toggleMenu"/>
               <span class="line first-line"></span>
               <span class="line second-line"></span>
               <span class="line three-line"></span>
               <label for="more" class="btn-more"> </label>
             </div>
             <transition name="fade">
               <div class="d-brand-menu-toggle fr" v-if="!isShowMenu" >
                 <!--菜单-->
                 <nav class='d-brand-menu-item'>
                   <ul class="d-brand-menu">
                     <li v-for="i in navArrLists"><a :class="{'is-active':i.isActive}" @click="goToLink(i.link)">{{i.name}}</a></li>
                   </ul>
                 </nav>
                 <nav class="d-brand-menu-item">
                   <!--搜索栏-->
                   <div class="d-brand-search">
                     <span class="d-brand-search-line">|</span>
                     <i class="iconfont icon-search">&#xe62e;</i>
                   </div>
                 </nav>
               </div>
             </transition>

           </div>
       </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          navTheme:{
            type:Object,
            default: function () {
              return {
                backgroundColor:"#000"
              }
            }
          }
        },
        data(){
          return {
            navArrLists:[
              {
                name:'框架介绍',
                link:"#aboutFramework",
                isActive:true
              },
              {
                name:'最新案例',
                link:"#lastCase",
                isActive:false
              },
              {
                name:'关于我们',
                link:"#aboutUs",
                isActive:false
              },
              {
                name:'联系我们',
                link:"#contractUs",
                isActive:false
              },
            ],
            isPhone:!!window._.testPhone(),
            isShowMenu:false,
          }
        },
        computed:{
          navStyle(){
            return this.navTheme;
          }
        },
        watch:{
          isPhone(nVal,oVal){//检测移动端以及手机端的转化
              if(!nVal){
                  this.isShowMenu=true;
              }
          }
        },
        mounted(){
          this.dealWidthScroll();
          this.isShowMenu=this.isPhone;
        },
        methods:{
          goToLink(arg){//跳转
            $(arg)[0].scrollIntoView({
              behavior: "smooth",
              block: "center",

              inline: "nearest"
            });
          },
          toggleMenu(){
            this.isShowMenu=!this.isShowMenu;
            $('.d-brand-menu-toggle').slideToggle('3000s');
          },
          dealWidthScroll(){
            $(window).scroll(function() {
              var $this = $(this);
              var scrollTop = $this.scrollTop();
              if (scrollTop > 0) {
                $('.d-brand-header').addClass('to-top');
              } else {
                $('.d-brand-header').removeClass('to-top');
              }
            })
          }
        }
    }
</script>

<style lang="scss" scoped>
  $themeColor:#000;
  .d-brand-header{
      position:fixed;
      top:0;
      z-index:9;
      width:100%;
      height:60px;
      transition:all .3s ease-in-out;
      transform:translate3d(0,0,0);
  }
  .d-brand-header.to-top{
    transform:translate3d(0,-100%,0);
  }
  .d-brand-logo{
      height:100px;
      line-height:60px;
      margin-right:200px;
  }
  .d-brand-logo-name{
    font-family:"Harlow Solid Italic";
    font-size:24px;
    color:#fff;
  }
  .d-brand-search{
      transition:all ease-in .5s;
  }
  .icon-search{
      display:inline-block;
      margin-left:20px;
      font-size:24px;
      color:#fff;
      vertical-align:middle;
      cursor:pointer;
  }

  .d-brand-menu{
      height:100%;
      transition:all ease-in .5s;
  }
  .d-brand-menu li{
      display:inline-block;
      height:100%;
      line-height:60px;
      margin-right:50px;
      /*padding:0 10px;*/
  }
  .d-brand-menu li a{
      font-size:14px;
      color:#fff;
  }
  .d-brand-menu li a.is-active{
      color:#fff;
  }

  /*媒体查询*/
  @media all and (max-width:938px){
    .d-brand-logo-name{
      font-size:1.4rem;
    }
    .d-brand-header{
      height:4rem;
    }

    .d-brand-content{
      width:100%;
    }
    .d-brand-logo{
      float:none;
      width:100%;
      height:100%;
      line-height:4rem;
      padding-left:2rem;
      text-align:left;
    }
    .d-brand-logo img{
      vertical-align: middle;
    }
    .d-brand-menu-toggle{
      float:none;
      position:absolute;
      left:0;
      top:4rem;
      width:100%;
      padding:1rem 2rem;
      /*background:#000;*/
      background:$themeColor;

    }
    .d-brand-menu li{
      height:2rem;
      line-height:2rem;
      display:block;
    }
    .d-brand-menu-item{
      display:block;
    }
    .d-brand-menu-item~.d-brand-menu-item{
       margin-top:10px;
    }
    .d-brand-search-line{
      display:none;
    }
    .icon-search{
      margin-left:0;
      font-size:1.5rem;
    }
    .wrapper{
      display:block;
      position:absolute;
      right:2rem;
      top:50%;
      -webkit-transform:translateY(-50%);
      transform:translateY(-50%);
    }
    .line{
      display:block;
      width:30px;
      height:2px;
      background:#fff;
      border-radius:30px;
      transition: all 0.3s ease-out;
    }
    .second-line{
      margin:7px 0;
    }
    .checkbox{
      display:none;
    }
    .checkbox:checked~span:nth-of-type(1){
      transform: rotate(45deg) translate3d(6px,6px,0);
      transform-origin: center;
    }

    .checkbox:checked~span:nth-of-type(2){
      transform: scale3d(0,1,1);
    }

    .checkbox:checked~span:nth-of-type(3){
      transform: rotate(-45deg) translate3d(6px,-6px,0);
      transform-origin: center;
    }
    .btn-more{
      position:absolute;
      left:0;
      top:0;
      width:50px;
      height:100%;
      background:transparent;

    }
    /*.fade-enter-active, .fade-leave-active {*/
      /*transition: opacity .5s;*/
    /*}*/
    /*.fade-enter-active{*/
      /*opacity:1;*/
    /*}*/
    /*.fade-leave-active{*/
      /*opacity:0;*/
    /*}*/

  }

  @media all and (min-width:938px){
    .d-brand-header{
      min-width:1600px;
    }
    .d-brand-menu-toggle{
      display:block;
    }
    .d-brand-menu-item{
      display:inline-block;
    }
  }

</style>
