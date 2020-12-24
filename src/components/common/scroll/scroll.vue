<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
   name: 'scroll',
   data () {
      return {
        scroll: null,
       
      };
   },
   props:{
      probeType: {
        type: Number,
        default: 0
        },
      pullUpLoad: {
        type: Boolean,
        default:false
      }
   },
   mounted() {
    //  创建scroll对象
     this.scroll = new BScroll(this.$refs.wrapper,{
       click: true,
       taps: true,
       probeType: this.probeType,
      //  这个属性是控制上拉加载更多的
       pullUpLoad: this.pullUpLoad,
     }),
     //这个可以实时的检测position
     this.scroll.on('scroll',(position)=>{
        this.$emit('distance', position);
     })
    //  监听上拉加载更多
     this.scroll.on('pullingUp',() => {
        this.$emit('pull');
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
   },
   components: {},

   computed: {},

   methods: {
     finishPullUp(){
       this.scroll.finishPullUp()
     }
   }
}
</script>
<style lang='css' scoped>

</style>