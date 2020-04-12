<template>
 <div style="background:#fff;">
  <el-row style="padding-top:15px;">
   <el-col :span="10">
    <el-input placeholder="请输入内容" v-model="searchValue">
     <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
   </el-col>
  </el-row>
  <el-table :data="tableData.tableList" stripe size="mini" style="width: 100%">
   <el-table-column prop="tag" label="类型" width="180">
    <template slot-scope="scope">{{"["+scope.row.tag+"]"}}</template>
   </el-table-column>
   <el-table-column prop="name" label="书名/章节"></el-table-column>
   <el-table-column prop="authorName" label="作者" width="180" align="center" header-align="center"></el-table-column>
  </el-table>
  <el-pagination
   style="margin-top:10px;"
   @size-change="handleSizeChange"
   @current-change="handleCurrentChange"
   :current-page="tableData.currentPage"
   :page-sizes="[10, 20, 50, 100]"
   :page-size="10"
   layout="prev, pager, next, jumper, sizes, total"
   :total="tableData.total"
   small
  ></el-pagination>
 </div>
</template>

<script>
export default {
 data() {
  return {
   searchValue: "",
   tableParam: {
    params: {
     page: 1,
     size: 10
    }
   },
   tableData: {
    currentPage: 0,
    total: 0,
    tableList: [
     {
      tag: "王",
      name: "123",
      authorName: "王小虎"
     }
    ]
   }
  };
 },
 created() {
  // this.getBookData();
 },
 methods: {
  getBookData() {
   this.axios.get("/book/page", this.tableParam).then(res => {
    console.log(res);
    const {
     data: {
      data: { list: listData, total: listTotal }
     },
     status
    } = res;
    if (status !== 200) {
     return this.$message.error("获取数据失败！");
    }
    this.tableData.tableList = listData;
    this.tableData.total = listTotal;
   });
  },
  handleSizeChange(val) {
   this.tableParam.params.size = val;
   this.getBookData();
  },
  handleCurrentChange(val) {
   this.tableParam.params.page = val;
   this.getBookData();
  }
 }
};
</script>

<style>
</style>