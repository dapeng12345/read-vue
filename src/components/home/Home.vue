<template>
 <div class="home">
  <div class="classify">
   <classify-list></classify-list>
  </div>
  <div class="content" style="padding-left: 10px;">
   <el-row :gutter="10">
    <el-col :span="19">
     <home-carousel></home-carousel>
    </el-col>
    <el-col :span="5">
     <div style="background:#123456">2</div>
    </el-col>
   </el-row>
  </div>
 </div>
</template>

<script>
// @ is an alias to /src
import ClassifyList from "@/components/common/ClassifyList"
import HomeCarousel from "./_source/Carousel"
export default {
 name: "Home",
 components: {
  ClassifyList,
  HomeCarousel
 }
};
</script>

<style lang="scss" scoped>
.home {
 display: flex;
 // flex-direction: column;
}
.content{
 flex: 1;
}
</style>