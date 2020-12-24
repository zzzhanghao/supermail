
// 这个是定义的推荐信息的模块
<template>
   <div class="recommend">
     <div v-for="item in recommend" :key="item.lable" class="recommend-item">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
   </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },
   props:{
     recommend:{
       type: Array,
       default(){
         return []
       }
     }
   },
   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
  .recommend{
    display:flex;
    text-align: center;
    padding: 5px 0 5px
  }
  .recommend-item{
    flex:1;
    
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
  }
</style>