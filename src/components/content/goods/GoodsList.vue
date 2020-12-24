// 主要用于获取流行、新款、精选这三个 类别的数据用于展示
<template>
   <div class="goodslist">
     <!-- 使用v-for 先把item 遍历出来，再交给goodslistitem 的props绑定的数据 -->
     <goods-list-item v-for="(item,index) in goodslist" 
     :goodsitems = 'item' 
     :key="index"
     >
     </goods-list-item>
   </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  data () {
      return {

      };
   },
  //定义从
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  computed: {},
  methods: {}
}
</script>
<style lang='css' scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
  }
</style>