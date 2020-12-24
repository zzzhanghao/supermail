<template>
  <div class="tabbar-items" @click = 'isClick'>
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div ><slot name="item-text"></slot></div>
  </div>
</template> 

<script>

export default {
  name: 'TabBaritems',
  props:{
    path:String
  },
  data(){
    return {
      isActive:false,
      }
   } ,
  methods:{
    isClick(){
      // console.log(443);
      this.$router.replace(this.path)
      
    }
  }
  }
</script>
<style scoped>
  .tabbar-items {
    flex:1;
    text-align: center;
    font-size: 14px;
  }
  .tabbar-items img{
    width: 25px;
    height: 25px;
  }
</style>