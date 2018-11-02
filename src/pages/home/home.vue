<template>
    <!--布局I,T，工-->
    <div class="home-wrapper d-brand-page">
        <!--头部-->
        <d-header></d-header>
        <!--轮播-->
        <div class="d-brand-carousel" :style="headerStyle" >
          <img src="https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg" alt="轮播图1" width="100%">
        </div>
        <!--中间内容-->
        <div class="container d-brand-home-content" >
          <div class="d-brand-base">
            <div class="d-brand-main">
              <!--关于框架-->
              <section class="d-brand-section" id="aboutFramework">
                <h3 align="center" class="d-brand-section-title">框架介绍</h3>
                <ul class="row d-brand-intro-list">
                    <li v-for="item in introLists" :class="item.className">
                        <i class="iconfont">{{item.icon}}</i><br/>
                        <h4 align="center" >{{item.name}}</h4>
                        <p align="center">{{item.introduce}}</p>
                    </li>
                </ul>
              </section>
              <!--最新案例-->
              <section class="d-brand-section" id="lastCase">
                <h3 align="center" class="d-brand-section-title">最新案例</h3>
                <ul class="row d-brand-article-list">
                  <li v-for="item in caseLists" :class="item.className">
                    <img :src="item.url" :alt="item.text">
                  </li>
                </ul>
              </section>
              <!--关于我们-->
              <section class="d-brand-section" id="aboutUs">
                <h3 align="center" class="d-brand-section-title">关于我们</h3>
                <p class="d-brand-message" align="center">
                  <!--<img src="" alt="logo">-->
                  <span class="d-brand-logo-name">LightFeather</span>
                  <br/>
                  <span class="iconfont d-brand-icon-address">&#xe60c;</span>
                  <span class="d-brand-address">广东省广州市天河区羊城创意园1-03号本座着</span>
                </p>
                <p align="center" class="d-brand-team-intro">轻羽是一支很优秀的铲屎官队伍，轻羽是一支很优秀的铲屎官队伍轻羽是一支很优秀的铲屎官队伍轻羽是一支很优秀的铲屎官队伍轻羽是一支很优秀的铲屎官队伍轻羽是一支很优秀的铲屎官队伍轻羽是一支很优秀的铲屎官队伍</p>
                <!--轮播-->
                <!--<ul class="d-brand-person-list">-->
                  <!--<li v-for="item in personIntro">-->
                      <!--<img :src="item.pic" class="d-brand-person-img"/>-->
                      <!--<h4 class="d-brand-person-name">{{item.name}}/{{item.position}}</h4>-->
                      <!--<p class="d-brand-person-intro">{{item.info}}</p>-->
                  <!--</li>-->
                <!--</ul>-->
                <div class="swiper-container">
                  <ul class="swiper-wrapper d-brand-person-list">
                    <li class="swiper-slide" v-for="item in personIntro" >
                      <img :src="item.pic" class="d-brand-person-img"/>
                      <h4 class="d-brand-person-name">{{item.name}}/{{item.position}}</h4>
                      <p class="d-brand-person-intro">{{item.info}}</p>
                    </li>
                  </ul>
                  <div class="swiper-pagination"></div>
                </div>
              </section>
              <!--联系我们-->
              <section class="d-brand-section" id="contractUs">
                <h3 align="center" class="d-brand-section-title">联系我们</h3>
                <div class="row d-brand-contract-bg">
                  <p align="center">
                    <img src="http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f16d1de27ac7a684234c15f42172ca8aa73532e5/wechat.jpg" alt="微信公众号"
                      class="d-brand-ercode">
                  </p>
                  <p align="center">
                    <i class="iconfont d-brand-phone">&#xe7ae;</i>
                    <span>13539467759</span>
                  </p>
                  <p align="center">
                      要定制框架的请扫描上述二维码
                  </p>
                  <p align="center">
                      或者搜索公众微信号“LightFeather”
                  </p>
                </div>
              </section>
            </div>
          </div>

        </div>
        <!--脚部-->
        <d-footer></d-footer>
        <!--置顶-->
        <d-top></d-top>
    </div>
</template>

<script type="text/ecmascript-6">
    import dHeader from '../../components/header/header.vue';
    import dFooter from '../../components/footer/footer.vue';
    import dTop from '../../components/top/top.vue';
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: [],
        components:{
          'd-header':dHeader,
          'd-footer':dFooter,
          'd-top':dTop,
        },
        data(){
          return {
             headerStyle:{},
             introLists:[
               {
                 name:"框架",
                 className:"col-xs-12 col-sm-6 col-md-3",
                 icon:"\ue801",
                 introduce:"其实也不是一个框架啦感觉好难啊，真的不是框架，最多就是一个库吧,其实也不是一个框架啦感觉好难啊，真的不是框架，最多就是一个库吧"
               },
               {
                 name:"包装",
                 className:"col-xs-12 col-sm-6 col-md-3",
                 icon:"\ue625",
                 introduce:"其实也不是一个框架啦感觉好难啊，真的不是框架，最多就是一个库吧"
               },
               {
                 name:"广告",
                 className:"col-xs-12 col-sm-6 col-md-3",
                 icon:"\ue600",
                 introduce:"其实也不是一个框架啦感觉好难啊，真的不是框架，最多就是一个库吧"
               },
               {
                 name:"网站",
                 className:"col-xs-12 col-sm-6 col-md-3",
                 icon:"\ue628",
                 introduce:"其实也不是一个框架啦感觉好难啊，真的不是框架，最多就是一个库吧"
               }
             ],
             caseLists:[
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-8"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-8"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
             ],
             personIntro:[
               {
                 name:"dogPerson",
                 pic:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 position:"铲屎官",
                 info:"铲屎官也是一份很牛逼的工作，上得了厅堂，下得了厨房，还能看着小猫小狗一起吃吃饭"
               },
               {
                 name:"dogPerson",
                 pic:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 position:"铲屎官",
                 info:"铲屎官也是一份很牛逼的工作，上得了厅堂，下得了厨房，还能看着小猫小狗一起吃吃饭"
               },
               {
                 name:"dogPerson",
                 pic:"https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg",
                 position:"铲屎官",
                 info:"铲屎官也是一份很牛逼的工作，上得了厅堂，下得了厨房，还能看着小猫小狗一起吃吃饭"
               }
             ],
            //滑动配置[obj]
            sliderinit: {
              currentPage: 0,//当前页码
              thresholdDistance: 500,//滑动判定距离
              thresholdTime: 100,//滑动判定时间
              autoplay:1000,//自动滚动[ms]
              loop:true,//循环滚动
              direction:'vertical',//方向设置，垂直滚动
              infinite:1,//无限滚动前后遍历数
              slidesToScroll:1,//每次滑动项数
            }
          }
        },
        computed:{

        },
        mounted(){
          console.log(this.headerStyle);
          this.$nextTick(()=>{
            this.headerStyle={
              marginTop:($('.d-brand-header').height())+'px'
            }

            var swiper = new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: 'my-bullet-active',
                clickable:true
              },
              loop: true,
              speed: 600,
              autoplay: 4000,
              onTouchEnd: function() {
                swiper.startAutoplay()
              }
            });

          });
        },
        methods:{

        }
    }

</script>
<style lang="scss">
  $themeColor:#ffce3b;
  /*轮播图begin*/
  .swiper-container {
    width: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;

    }
    .swiper-pagination-bullets{
      bottom:0;
    }
    .swiper-pagination .my-bullet-active{
      opacity: 1;
      background:$themeColor!important;

    }
    .swiper-pagination-bullet {
      /*width:0.833rem;*/
      /*height: 0.833rem;*/
      display: inline-block;
      background: #7c5e53;
    }

  }
  /*轮播图 end*/
</style>
<style lang="scss" scoped >
  $themeColor:#ffce3b;
  .d-brand-carousel{
    height:500px;
    overflow:hidden;
  }
  .d-brand-section{
    margin-top:30px;
  }
  .d-brand-section-title{
    position:relative;
    margin-bottom:20px;
    font-size:18px;
    color:#333;
    font-weight:bold;
    &:after{
        position:absolute;
        content:"";
        left:50%;
        bottom:-10px;
        transform:translateX(-50%);
        width:50px;
        height:2px;
        background: $themeColor;

     }
  }

  .d-brand-intro-list li{
      text-align:center;
      i{
        display:inline-block;
        margin-top:20px;
        font-size:36px;
      }
      h4{
        margin-top:10px;
        font-size:18px;
      }
      p{
        margin-top:30px;
        margin-bottom:30px;
        font-size:14px;
      }
  }

  .d-brand-article-list li{
     display:inline-block;
     margin-bottom:15px;
     min-height: 1px;

  }
  .d-brand-article-list li img{
     width:100%;
  }
  .d-brand-message{
    margin-top:10px;
    margin-bottom:20px;
  }
  .d-brand-logo-name{
    display:inline-block;
    margin-top:20px;
    margin-bottom:20px;
    font-size:18px;
    font-weight:bold;
  }
  .d-brand-icon-address{
    font-size:20px;
  }
  .d-brand-address{
    font-size:16px;

  }
  .d-brand-team-intro{
    margin-bottom:20px;
    font-size:14px;
  }
  .d-brand-person-list{
      li{
        text-align:center;
        .d-brand-person-img{
            width:200px;
            height:200px;
            border-radius:50%;
        }
        .d-brand-person-name{
            font-size:16px;
            margin:20px 0;
        }
        .d-brand-person-intro{
            font-size:14px;
            margin-bottom:20px;
        }
      }
  }
  .d-brand-contract-bg{
    /*width:100%;*/
    min-height:300px;
    background:url(https://scontent-hkg3-1.cdninstagram.com/vp/10b78274dd2eae437e62543818732904/5C70C102/t51.2885-15/sh0.08/e35/s640x640/11356586_1636324749989174_1836287826_n.jpg) no-repeat center center;
    padding:20px;
    text-align:center;
    p:not(:first-child){
      margin-top:20px;
      font-size:14px;
      color:#fff;
    }
  }
  .d-brand-ercode{
    width:120px;
    height:120px;
  }
  .d-brand-phone{
    color:#fff;
    font-size:20px;
  }
  @media all and (max-width:938px) {
    .d-brand-carousel{
      height:20rem;
    }
    .d-brand-section{
      margin-top:2rem;
    }
    .d-brand-section-title{
      font-size:1.125rem;
    }
    .d-brand-intro-list li{

      &~li{
          margin-top:1rem;
      }
      i{
        margin-top:1.25rem;
        font-size:2.25rem;
      }
      h4{
        margin-top:1rem;
        font-size:1.125rem;
      }
      p{
        margin-top:2rem;
        margin-bottom:2rem;
        font-size:0.875rem;

      }
    }

    .d-brand-person-list{
      li{
        .d-brand-person-img{
          width:12.5rem;
          height:12.5rem;
        }
        .d-brand-person-name{
          font-size:1rem;
          margin:1.25rem 0;
        }
        .d-brand-person-intro{
          font-size:0.875rem;
          margin-bottom:1.25rem;
        }
      }
    }
    .d-brand-contract-bg{
      /*width:100%;*/
      min-height:18.75rem;
      padding:1.25rem;
      p:not(:first-child){
        margin-top:1.25rem;
        font-size:0.875rem;
      }
    }
    .d-brand-ercode{
      width:7.5rem;
      height:7.5rem;
    }
    .d-brand-phone{
      font-size:1.25rem;
    }



  }

  @media all and (min-width:938px){
    .d-brand-article-list li{
      height:270px;
      overflow:hidden;
    }

  }
</style>
