<template>
  <div class="home">
    <div class="classify">
      <classify-list></classify-list>
    </div>
    <div class="content" style="padding-left: 10px;">
      <el-row :gutter="10">
        <el-col :span="18">
          <home-carousel></home-carousel>
          <card></card>
        </el-col>
        <el-col :span="6">
          <notice></notice>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassifyList from "@/components/common/ClassifyList";
import HomeCarousel from "./_source/Carousel";
import Card from "./_source/Card";
import Notice from "./_source/Notice";
export default {
  name: "Home",
  components: {
    ClassifyList,
    HomeCarousel,
    Card,
    Notice
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  // flex-direction: column;
}
.content {
  flex: 1;
}
</style>