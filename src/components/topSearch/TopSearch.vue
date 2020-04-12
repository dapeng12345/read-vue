<template>
 <div class="search">
  <el-row>
   <el-col :span="8">
    <div class="logo">
     <a href="#" data-eid="qd_A11"></a>
    </div>
   </el-col>
   <el-col :span="8">
    <div class="input-wrap">
     <el-input placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
     </el-input>
    </div>
   </el-col>
   <el-col :span="8">
    <div class="book-shelf fr">
     <a href="#" data-eid="qd_A14" id="numero2">
      <em class="el-icon-collection-tag"></em>
      <span>我的书架</span>
     </a>
    </div>
   </el-col>
  </el-row>
 </div>
</template>

<script>
export default {};
</script>

<style scope lang="scss">
.search {
 .el-row {
  display: flex;
  align-items: center;
  height: 100%;
 }
 background: chocolate;
 height: 84px;
 //  display: flex;
 //  justify-content: space-between;
 //  align-items: center;
 .logo {
  width: 218px;
  height: 55px;
  a {
   display: block;
   width: 100%;
   height: 100%;
   background: url("~@/assets/img/logo.png") no-repeat;
  }
 }

 .input-wrap {
  width: 390px;
  .el-input-group__append {
   border: 0px solid #dcdfe6;
   background-color: #bf2c24;
   i {
    font-size: 22px;
    color: #fff;
   }
   &:hover {
    background-color: #ed4259;
   }
  }
 }
}

.search {
 width: 1200px;
 margin: 0 auto;
 .book-shelf {
   margin-right:30px ;
  overflow: hidden;
  width: 120px;
  height: 40px;
  background: #fff;
  span {
   line-height: 38px;
   overflow: hidden;
   width: 56px;
   height: 38px;
   margin-right: 3px;
   font-style: initial;
   font-size: 14px;
  }
  a {
   font: 14px/1 PingFangSC-Regular, "-apple-system", Simsun;
   display: block;
   width: 118px;
   height: 38px;
   text-align: center;
   border: 1px solid #e6e6e6;
   &:hover {
    color: #fff;
    border: 1px solid #ed4259;
    background: #ed4259;
   }
  }
  em{
    font-size: 16px;
  }
  a,
  em,
  span {
   display: inline-block;
   vertical-align: middle;
  }
 }
 a {
  transition: color 0.3s, background-color 0.3s;
 }
}
</style>