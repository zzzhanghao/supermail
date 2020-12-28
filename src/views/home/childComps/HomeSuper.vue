<template>
     <swiper>
      <swiper-item v-for="item in banners" :key="item.label" >
        <a :href="item.link">
         <img :src="item.image" alt="" @load="imageLoad">
      </a>
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
   name: 'HomeSuper',
   data () {
      return {
        isLoad: false
      };
   },
   props:{
     banners: {
       type: Array,
       default(){
         return []
       }
     }
   },
   components: {
     Swiper,
     SwiperItem
   },

   computed: {},

   methods: {
     //监听图片的加载完成
     imageLoad(){
       if(!this.isLoad){
         this.$emit('swiperimageLoad')
         this.isLoad = true
       }
       
     }
   }
}
</script>
<style lang='css' scoped>

</style>

