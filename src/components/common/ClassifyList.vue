<template>
  <div style="width:216px;"> 
    <dl class="cf classify-list">
     <dd :class="[index%4<2 ? 'odd': 'even']" v-for="(item,index) in classifyList"  :key="index">
      <a :href="item.href">
        <em :class="item.icon"></em>
        <span class="info">
         <i>{{item.name}}</i>
         <b>{{item.num}}</b>
        </span>
      </a>
     </dd>
    </dl>
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
}
</script>

<style scope lang="scss">

.classify-list  {
 dd{
  float: left;
  width: 50%;
  height: 60px;
  background: #f7f6f2;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .even{
  background: #fff;
 }
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