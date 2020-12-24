<template>
   <div class="goods-item">
     <img :src="goodsitems.show.img" alt="">
     <div class="describe">
       <span>{{goodsitems.title}}</span>
       <span>{{goodsitems.price}}</span>
       <span>{{goodsitems.cfav}}</span>
     </div>
   </div>
</template>

<script>
export default {
   name: 'GoodsListItem',
   data () {
      return {
      };
   },
   props:{
     goodsitems:{
       type:Object,
       default(){
         return {}
       }
     }
   },
   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
  .goods-item {
    position: relative;
    width: 50%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
</style>