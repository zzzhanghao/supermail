<template>
  <div class="content" ref="aaaa">
    <div>
      <h2>分类</h2>
      <ul>
        <li>11</li>
        <li>21</li>
        <li>31</li>
        <li>41</li>
        <li>51</li>
        <li>61</li>
        <li>71</li>
        <li>81</li>
        <li>91</li>
        <li>101</li>
        <li>111</li>
        <li>121</li>
        <li>131</li>
        <li>141</li>
        <li>151</li>
        <li>161</li>
        <li>171</li>
        <li>181</li>
        <li>191</li>
        <li>201</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }

    },

    mounted() {
      this.scroll = new BScroll(this.$refs.aaaa,{
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
      })
      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
    },
  }
</script>

<style scoped>
  .content {
      height: 150px;
      background-color: red;
      overflow: hidden;
      /*overflow-y: scroll;*/
    }
</style>
