<template>
  <div class="notice">
    <h3 class="title" style="text-align: center;">
      <el-link href="#" class="titleClass" :underline="false">全民国家安全教育日</el-link>
    </h3>
    <div class="notice-list">
      <li class="color-type_0" v-for="(item,index) in noticeList" :key="index">
        <el-link :href="item.href" :underline="false" v-if="item.type == 'notice'">
          <i>「</i>资讯<i>」</i>
          {{item.title}}
        </el-link>

        <el-link :href="item.href" :underline="false" class="red" v-else>
          <span class="text">页游</span>
          {{item.title}}
        </el-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeList: [
        { title: "我和浦东30年征文", href: "#", type: "notice" },
        { title: "仙侠神话征文大赛", href: "#", type: "notice" },
        { title: "百名网络作家接力发声", href: "#", type: "notice" },
        { title: "同舟共济，文学力量", href: "#", type: "notice" },
        { title: "嗜魂-国战升军阶", href: "#", type: "page_game" },
        { title: "神将附体天骄无双", href: "#", type: "page_game" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.notice {
  position: relative;
  height: 248px;
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid #e6e6e6;
  background: #fcfcfa;

  .titleClass {
    font: 700 16px/1 PingFangSC-Regular, HelveticaNeue-Light,
      "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
    overflow: hidden;
    width: 160px;
    height: 16px;
    margin: 0 auto 8px;
    padding-top: 12px;
  }
  .notice-list {
    text-align: left;
    .red {
        color: #bf2c24 !important;
      .text {
        font: 12px/18px PingFangSC-Regular, "-apple-system", Simsun;
        display: inline-block;
        width: 38px;
        height: 18px;
        margin: -2px 10px 0 8px;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        background: #bf2c24;
      }
    }
  }
  i {
    font-style: normal;
  }
}
</style>