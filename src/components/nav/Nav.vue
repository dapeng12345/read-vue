<template>
 <div class="main-nav-wrap">
  <div class="main-nav box-center cf">
   <ul class="clear">
    <li class="first">
     <el-dropdown>
      <span class="el-dropdown-link">
       <em class="fa fa-bars"></em>
       作品分类
       <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="width:216px;">
       <dl class="cf classify-list">
        <dd class v-for="(item,index) in classifyList" :key="index">
         <a :href="item.href">
           <em :class="item.icon"></em>
           <span class="info">
            <i>{{item.name}}</i>
            <b>{{item.num}}</b>
           </span>
         </a>
        </dd>
       </dl>
      </el-dropdown-menu>
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
 data() {
  return {
   classifyList: [
    {
     name: "玄幻",
     num: 721722,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "奇幻",
     num: 159241,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "武侠",
     num: 45378,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "仙侠",
     num: 236460,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "都市",
     num: 374244,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "现实",
     num: 43492,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "军事",
     num: 20623,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "历史",
     num: 77225,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "游戏",
     num: 108311,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "体育",
     num: 9109,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "科幻",
     num: 157333,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "悬疑",
     num: 66996,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "女生网",
     num: 800370,
     icon: "fa fa-adjust",
     href: "#"
    },
    {
     name: "轻小说",
     num: 113490,
     icon: "fa fa-adjust",
     href: "#"
    }
   ]
  };
 }
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
.classify-list dd {
 float: left;
 width: 50%;
 height: 60px;
 background: #f7f6f2;
 a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  &:hover {
   color: #ed4259;
   b {
    color: #ed4259;
   }
  }
  
  em {
   font-size: 24px;
   width: 24px;
   height: 24px;
   margin: 2px 8px 0 0;
   transition: margin ease-out 0.3s;
  }
  .info {
   max-width: 42px;
  }
  i {
   font-size: 14px;
   white-space: nowrap;
  }
  b {
   font-size: 12px;
   transition: color 0.2s;
   color: #999;
  }
 }
}
.book-list-wrap .book-list li,
.classify-list dd {
 overflow: hidden;
}
</style>