<template>
 <div class="carousel">
  <el-carousel trigger="click" :interval="6000" height="250px">
   <el-carousel-item v-for="item in carouselObj" :key="item.name">
    <img :src="item.pic" alt="">
   </el-carousel-item>
  </el-carousel>
 </div>
</template>

<script>
export default {
 data() {
  return {
   carouselObj: [{
     name:"1",
     pic:require("./img/1.jpg")
   },{
     name:"2",
     pic:require("./img/2.jpg")
   },{
     name:"3",
     pic:require("./img/3.jpg")
   },{
     name:"4",
     pic:require("./img/4.jpg")
   }]
  };
 }
};
</script>

<style scope lang="scss">
.carousel{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>