
// 这个就是推荐栏
// 在 home 界面就是流行、新款、精选这三个，实现的效果就是点击那个那个变为 红色

<template>
   <div class="tab">
     <div v-for="(item,index) in title" :key="item" 
     class="tab-item"
     :class='{active: index == currentindex}'
     @click="clickitem(index)"
>   
       <span>{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
   name: 'TabControl',
   data () {
      return {
        currentindex: 0
      };
   },
   props:{
     title:{
       type: Array,
       default(){
         return []
       }
     }
   },
   components: {},

   computed: {},

   methods: {
     clickitem(index){
       this.currentindex = index
       //点击的那个栏，将这个栏的index传出去，这个就是子集向父级传送数据
       this.$emit('tabindex', index);
     }
   }
}
</script>
<style lang='css' scoped>
  .tab{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color:white;
  }
  .tab-item{
    flex:1;
    text-align: center;
    
    
  }
  .tab-item span{
    padding: 10px;
  }
  .active{ 
    color: white;
  }
  
  .active span{
    border-bottom:1px solid pink;
    
  }
</style> 