<template>
 <div id="app" class="loaded">
  <!-- <div id="nav">
						<router-link to="/">Home</router-link> |
						<router-link to="/about">About</router-link>
  </div>-->
  <!-- <router-view/> -->
  <el-container>
   <el-header height="36px;">
    <m-header></m-header>
   </el-header>

   <top-search></top-search>
   <m-nav></m-nav>
   <el-main style="
    width: 1200px;
    margin: 0 auto;
    padding: 0px;
   ">
    <el-row>
     <el-col :span="16">
      <book-list style="padding:10px"></book-list>
     </el-col>
    </el-row>
   </el-main>
  </el-container>
 </div>
</template>
<script>
import mHeader from "./components/header/Header";
import BookList from "./components/book/BookList";
import TopSearch from "./components/topSearch/TopSearch";
import mNav from "./components/nav/Nav";
export default {
 name: "app",
 components: {
  mHeader,
  BookList,
  TopSearch,
  mNav
 }
};
</script>
<style lang="scss" scope>
#app {
 background: red;
 .el-header {
  padding: 0 0px;
 }
}
</style>
