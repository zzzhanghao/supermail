<template>
   <div class="backtop" > 
     <img src="~assets/image/top.png" alt="">
   </div>
</template>

<script>
export default {
   name: 'BackTop',
   data () {
      return {
      };
   },
   components: {},
   computed: {},
   methods: {
   }
}
</script>
<style lang='css' scoped>
    .backtop{
    position: fixed;
    bottom: 50px;
    right: 30px;
  }
  .backtop img{
    width: 44px;
    height: 44px;

  }
</style>