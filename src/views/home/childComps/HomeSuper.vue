<template>
     <swiper>
      <swiper-item v-for="item in banners" :key="item.label" >
        <a :href="item.link">
        <img :src="item.image" alt="">
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

   methods: {}
}
</script>
<style lang='css' scoped>

</style>

