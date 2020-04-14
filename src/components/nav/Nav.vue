<template>
 <div class="main-nav-wrap">
  <div class="main-nav box-center cf">
   <ul class="clear">
    <li class="first">
     <el-dropdown>
      <span class="el-dropdown-link">
       <em class="fa fa-bars"></em>
       作品分类
       <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
      </span>
      
     </el-dropdown>
    </li>
    <li class="nav-li">
     <a href="//www.qidian.com/all" data-eid="qd_A15" class="act">全部作品</a>
    </li>
    <li class="nav-li">
     <a href="#" data-eid="qd_A16">排行</a>
    </li>
    <li class="nav-li">
     <a href="#" data-eid="qd_A17">完本</a>
    </li>
    <li class="nav-li">
     <a href="#" data-eid="qd_A18">免费</a>
    </li>
    <li class="nav-li">
     <a href="#" target="_blank" data-eid="qd_A19">作家专区</a>
    </li>
    <li class="nav-li">
     <a href="#" target="_blank" data-eid="qd_A20">
      <span class="fa fa-mobile"></span>客户端
     </a>
    </li>
    <!-- <li class="game phone" id="game-phone">
     <a class="phone-game" href="http://sy.qidian.com" target="_blank" data-eid="qd_A22">
      <b class="iconfont webgame"></b>手游
     </a>
    </li>
    <li class="game web" id="game-web">
     <a class="web-game" href="http://game.qidian.com/" target="_blank" data-eid="qd_A21">
      <b class="iconfont"></b>页游
     </a>
    </li> -->
   </ul>
  </div>
 </div>
</template>

<script>
export default {
 
};
</script>

<style scope lang="scss">
.main-nav-wrap {
 position: relative;
 z-index: 30;
 margin-bottom: 10px;
 background-color: #3e3d43;
 .main-nav {
  ul {
   margin: 0;
   padding: 0;
  }
  li.first {
   position: relative;
   width: 216px;
   height: 40px;
   margin-right: 30px;
   cursor: pointer;
   background-color: #313035;
   .el-dropdown {
    display: block;
    i {
     float: right;
     margin-top: 12px;
     margin-right: 10px;
    }
   }
   span {
    em {
     font-size: 20px;
     position: relative;
     top: 2px;
     margin-right: 6px;
    }
    font: 16px/38px PingFangSC-Regular, HelveticaNeue-Light,
     "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
    display: block;
    padding: 0 0 0 18px;
    transition: all 0.5s;
    color: #fff;
    background-color: #313035;
   }
  }
  li {
   float: left;
  }
  li.nav-li a.act {
   color: #fff;
   border-bottom: 2px solid #ed4259;
   background-color: #ed4259;
  }
  li a {
   font: 16px/38px PingFangSC-Regular, HelveticaNeue-Light,
    "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
   float: left;
   height: 38px;
   padding: 0 32px;
   color: #fff;
   border-bottom: 2px solid #333;
  }
  li.nav-li a:hover {
   line-height: 34px;
   height: 36px;
   transition: none;
   border-top: 2px solid #ed4259;
   border-bottom: 2px solid #252428;
   background-color: #252428;
  }
 }

 li,
 ol,
 ul {
  list-style: none outside none;
 }
}
dl,
dd {
 margin: 0;
 padding: 0;
}
</style>