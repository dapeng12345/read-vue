<template>
  <el-row>
    <el-col :span="8" v-for="(o,index) in adObj" :key="index">
      <el-card :body-style="{ padding: '0px'}" class="radius_0 pointer" :class="o.class" shadow="hover" >
        <img :src="o.pic" class="image" />
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.pointer{cursor: pointer}
.radius_0{
    border-radius: 0px !important;
}
.image {
  display: block;
  margin: 20px auto 0;
  border: none;
}
.bg_gray {
  background: #f7f6f2;
}
</style>

<script>
export default {
  data() {
    return {
      adObj: [
        {
          pic: require("./img/ad/guanggao1.png")
        },
        {
          class: "bg_gray",
          pic: require("./img/ad/guanggao2.png")
        },
        {
          pic: require("./img/ad/guanggao3.png")
        }
      ]
    };
  }
};
</script>