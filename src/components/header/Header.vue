<template>
 <div class="top-nav">
  <div class="box-center">
   <div class="nav-link fl">
    <a class="act" href="//www.qidian.com" data-eid="qd_A01">起点中文网</a>
    <a href="//www.qdmm.com" target="_blank" data-eid="qd_A02">起点女生网</a>
    <em>|</em>
    <a href="http://chuangshi.qq.com" target="_blank" data-eid="qd_A03">创世中文网</a>
    <em>|</em>
    <a href="http://yunqi.qq.com" target="_blank" data-eid="qd_A04">云起书院</a>
    <em>|</em>
    <a href="javascript:" id="switchEl" data-eid="qd_A182">繁体版</a>
    <!--<em>|</em>
    <a class="black" id="back-old" href="javascript:" data-eid="qd_A05">返回旧版</a>-->
   </div>
   <div class="login-box fr">
    <div class="sign-in hidden">
     <span>你好，</span>
     <a class="black" id="user-name" href="//me.qidian.com" target="_blank" data-eid="qd_A08"></a>
     <em>|</em>
     <a
      class="black"
      id="msg-btn"
      href="//me.qidian.com/msg/systems.aspx?page=1"
      target="_blank"
      data-eid="qd_A09"
     >
      消息
      <cite id="msg-box">
       (
       <i></i>)
      </cite>
     </a>
     <em>|</em>
     <a id="exit-btn" href="javascript:" data-eid="qd_A10">退出</a>
    </div>
    <div class="sign-out">
     <a id="login-btn" class="black" href="javascript:" data-eid="qd_A06">登录</a>
     <em>|</em>
     <a id="reg-btn" href="#" target="_blank" data-eid="qd_A07">注册</a>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   activeIndex: "1",
   activeIndex2: "1"
  };
 },
 methods: {
  handleSelect(key, keyPath) {
   console.log(key, keyPath);
  }
 }
};
</script>

<style lang="scss" scope >
.top-nav {
 height: 35px;
 border-bottom: 1px solid #e5e5e5;
 background: #f7f7f7;
 a.act {
  position: relative;
  width: 80px;
  max-width: 80px;
  height: 36px;
  margin-right: 10px;
  margin-bottom: -1px;
  text-align: center;
  color: #575757;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  background: #fff;
 }
 a {
  font: 12px/35px PingFangSC-Regular, "-apple-system", Simsun;
  overflow: hidden;
  height: 35px;
  color: grey;
  &:hover {
   color: #ed4259;
  }
 }

 em {
  font: 12px/35px Arial;
  margin: 0 10px;
  color: #d9d9d9;
 }
 a,
 em {
  float: left;
 }

 .login-box {
  a.black {
   color: #262626;
  }
  a i,
  a:hover {
   color: #ed4259;
  }
 }
}
.box-center {
 width: 1200px;
 margin-right: auto;
 margin-left: auto;
}
</style>