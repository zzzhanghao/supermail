<template>
  <!-- template只包含一个根元素,所以用一个 div括起来 -->
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroll 
      class="content" 
      ref="scroll" 
      :probeType='3' 
      @distance = 'contentScroll'
      :pullUpLoad = 'true'
      @pull = 'pageUpdate'>
        <home-super :banners = 'banners' class="home-super"></home-super>
        <recommend-view :recommend="recommends"/>
        <adver-tising/>
        <!-- 注意的是 所有的$emit传来的方法都需要用 v-on来进行监听 -->
        <tab-control :title="['流行','新款','精选']" class="tab-control" @tabindex="tabindex"/>
        <goods-list :goodslist="showGoods"></goods-list>
      </scroll>
      <back-top @click.native="btnclick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {
  getHomeMultidata,
  getHomeGoods
} from "network/home"
import HomeSuper from './childComps/HomeSuper'
import RecommendView from './childComps/RecommendView.vue'
import AdverTising from './childComps/Advertising'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import scroll from 'components/common/scroll/scroll'
import BackTop from 'components/common/backTop/BackTop'

  export default {
    name: "Home",
    components: { 
      NavBar,
      HomeSuper,
      RecommendView,
      AdverTising,
      TabControl,
      GoodsList,
      scroll,
      BackTop
      },
    data(){
      return {
        banners: [],
        recommends: [],
        //最后 把请求的数据加入到这个list中
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
                },
        currentType:'pop',
        isShowBackTop: false
       }}, 
    computed:{
      //抽象出 这个本来绑定在 监听事件里面的方法
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    methods: {
      //将本来是creat里执行的逻辑放在 methods里，这是项目习惯
      /**
       * 网络请求的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          console.log(res.data);
          this.recommends = res.data.recommend.list;
          
      })},
      getHomeGoods(type){
        //动态的定义他的 page
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          //将取出来的 list 添加到 goods 的list里面
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
          })
          
      },
       tabindex(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      btnclick(){
        this.$refs.scroll.scroll.scrollTo(0,0,300)
      },
      contentScroll(position){
        this.isShowBackTop = -position.y > 700

      },
      //上拉加载更多
      pageUpdate(){
        console.log(333)
        this.getHomeGoods(this.currentType)
        
        }
      },
      /**
       * 事件监听相关的方法
       */
     
  }
</script>

<style scoped>
  .home-nav{
    background-color: pink;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  #home{
    /* viewpoint height 就是视口高度 */
    height: 100vh;
    position: relative;
  
  }
  .tab-control{
     position: sticky;
     background-color: pink;
     top: 44px;
     z-index: 9;
  }
  .content{
   position: absolute;
   top: 44px;
   bottom: 44px;
   left: 0;
   right: 0;
  }

</style>










































