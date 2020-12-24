<template>
  <div id="app">
    <TabBar>
      <Tabbaritems path='/home'>
        <div slot="item-text">首页</div>
        <img slot="item-icon-active" src="~assets/image/home_active.svg" alt="">
        <img slot="item-icon" src="~assets/image/home.svg" alt="">
      </Tabbaritems>
      <Tabbaritems path='/category'>
        <div slot="item-text">分类</div>
        <img slot="item-icon-active" src="~assets/image/category_active.svg" alt="">
        <img slot="item-icon" src="~assets/image/category.svg" alt="">
      </Tabbaritems>
      <Tabbaritems path='/cart'>
        <img slot="item-icon-active" src="~assets/image/shopcart_active.svg" alt="">
        <img slot="item-icon" src="~assets/image/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </Tabbaritems>
      <Tabbaritems path='/profile'>
        <div slot="item-text">我的</div>
        <img slot="item-icon-active" src="~assets/image/profile_active.svg" alt="">
        <img slot="item-icon" src="~assets/image/profile.svg" alt="">
      </Tabbaritems>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar'
import Tabbaritems from 'components/common/tabbar/TabbarItems'
export default {
  name: 'MainTabbar',
  components: {
   TabBar,
   Tabbaritems
  }
}
</script>
<style scoped>
/* 注意的是 style里面的样式是要 @ import导入 */

</style>