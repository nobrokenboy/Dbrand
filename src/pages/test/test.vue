<template>
    <!--布局I,T，工-->
    <div class="home-wrapper d-brand-page">
        <!--头部-->
        <d-header></d-header>
        <!--中间内容-->
        <div class="container d-brand-home-content" :style="headerStyle">
          <div class="d-brand-hasleft">
            <div class="d-brand-left">
              <h2 class="mr-l d-brand-big">侧栏相关文章</h2>
              <p class="mr-b-l">1.2222222</p>
              <p class="mr-b-l">1.2222222</p>
              <p class="mr-b-l">1.2222222</p>
              <p class="mr-b-l">1.2222222</p>
              <div class="testWrapper"></div>
            </div>
            <div class="d-brand-main">
              <ul class="d-brand-article-list">
                <li v-for="item in imageArrs" :class="item.className">
                  <img :src="item.url" :alt="item.text">
                </li>
              </ul>
            </div>
          </div>
          <!--<div class="d-brand-main">-->
            <!--&lt;!&ndash;主要内容&ndash;&gt;-->
            <!--<div class="d-brand-left">-->
              <!--<ul class="d-brand-article-list">-->
                <!--<li v-for="item in imageArrs" :class="item.className">-->
                  <!--<img :src="item.url" :alt="item.text">-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--&lt;!&ndash;侧栏&ndash;&gt;-->
            <!--<div class="d-brand-right">-->
              <!--<h2 class="mr-l d-brand-big">侧栏相关文章</h2>-->
              <!--<p class="mr-b-l">1.2222222</p>-->
              <!--<p class="mr-b-l">1.2222222</p>-->
              <!--<p class="mr-b-l">1.2222222</p>-->
              <!--<p class="mr-b-l">1.2222222</p>-->
              <!--<div class="testWrapper"></div>-->
            <!--</div>-->
          <!--</div>-->
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
    export default {
        props: [],
        components:{
          'd-header':dHeader,
          'd-footer':dFooter,
          'd-top':dTop
        },
        data(){
          return {
             headerStyle:{},
             imageArrs:[
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-8"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-8"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
               {
                 url:"https://cdn-isux.qq.com/upload/covers/219_a_src.jpg",
                 text:"测试",
                 className:"col-xs-12 col-sm-6 col-md-4"
               },
             ],
          }
        },
        computed:{

        },
        mounted(){
          console.log(this.headerStyle);
          this.$nextTick(()=>{
              if(!window._.testPhone()){
                this.headerStyle={
                  marginTop:($('.d-brand-header').height()+30)+'px'
                }
              }else{
                this.headerStyle={
                  marginTop:$('.d-brand-header').height()+'px'
                }
              }

                console.log(this.headerStyle);
          });
        },
        methods:{

        }
    }

</script>

<style scoped >
  .d-brand-home-content{
     min-height:798px;
     /*margin-top:30px;*/
     margin-bottom:30px;

  }
  .d-brand-left,.d-brand-right{
    /*background:#fff;*/
  }
  .d-brand-right{
     padding:20px;
     background:#fff;
  }
  .d-brand-article-list{
     width:100%;

  }
  .d-brand-article-list li{
     display:inline-block;
     margin-bottom:15px;
     min-height: 1px;

  }
  .d-brand-article-list li img{
     width:100%;
  }
  @media all and (max-width:938px) {
    .d-brand-home-content{
      min-height:500px;
      margin-top:0;
      margin-bottom:0;
    }
    .d-brand-content{
      width:100%;
    }
    .d-brand-main{
      width:100%;
      padding:2rem;
    }
    .d-brand-left{

    }
    .d-brand-right{
       text-align:left;
       display:none;
    }
  }

  @media all and (min-width:938px){
    .d-brand-article-list li{
      height:270px;
      overflow:hidden;
    }
    .d-brand-article-list li~li{
       /*margin-left:10px;*/
    }
  }
</style>
