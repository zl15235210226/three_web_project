<template>
  <div>
    <el-row style="margin-bottom: 10px;">
      <!--触发添加的弹出框-->
      <el-button type="primary" @click="centerDialogVisible = true">添加类别</el-button>
    </el-row>

    <el-table
      :data="data"
      border
      style="width: 100%">
      <el-table-column prop="id" label="编号" align="center" width="500%"></el-table-column>
      <el-table-column prop="name" label="用户名" align="center" width="500%"></el-table-column>
      <el-table-column fixed="right" label="操作" width="500%">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="delCategory(scope.row)">删除</el-button>
          <el-button type="text" size="small"  @click="updCategoryfirst(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row>
      <el-col :span="24">
        <!--添加类别框-->
        <el-dialog title="添加类别" :visible.sync="centerDialogVisible" width="30%" center>
          <div style="display: flex;justify-content: center;margin-bottom: 10px;">
            <span class="demonstration">类别名称</span>
            <el-input style="width: 300px;" v-model="category.name"></el-input>
          </div>
          <!--添加弹出框-->
          <span slot="footer" class="dialog-footer">
                        <el-button @click="clearDialog">取 消</el-button>
                        <el-button type="primary" @click="add">确 定</el-button>
                    </span>
        </el-dialog>
      </el-col>

      <el-col :span="24">
        <!--修改-->
        <el-dialog title="修改类别" :visible.sync="centerDialog" width="30%" center>
          <div style="display: flex;justify-content: center;margin-bottom: 10px;">
            <span class="demonstration">类别名称</span>
            <el-input style="width: 300px;"></el-input>
          </div>
          <!--添加弹出框-->
          <span slot="footer" class="dialog-footer">
                        <el-button @click="clearDialog">取 消</el-button>
                        <el-button type="primary">确 定</el-button>
                    </span>
        </el-dialog>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-dialog title="修改类别信息" center width="30%" :visible.sync="userDialogFormVisible">
          <el-input v-model="row1.name" placeholder="请输入内容"></el-input>
          <div slot="footer" class="dialog-footer">
            <el-button @click="userDialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="updCateorySecond">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {addCategory, categorys, deleteCategory, updateCategory} from "../api/category";

export default {
  name: "Category",
  data() {
    return {
      formLabelWidth: '120px',
      userDialogFormVisible: false,
      centerDialogVisible: false,
      centerDialog: false,
      defaultOptions: {label: 'name', value: 'id', checkStrictly: true, leaf: 'children', disable: 'status'},
      data: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      category: {},
      row1:"",
    }
  }
  ,
  methods: {

    //修改回显
    updCategoryfirst(row){
      this.row1 =row
      this.userDialogFormVisible = true;
    },

    //修改
    updCateorySecond(){
      console.log(this.row1)
      this.userDialogFormVisible = false;
      updateCategory(this.row1).then(res=>{
        this.getCategory()
      }).catch(error=>{
        console.log(error);
      })
    },

    //删除
    delCategory(row){
      deleteCategory(row.id).then(res => {
        this.getCategory()
      }).catch(error => {
        console.log(error);
      })

    },
    // 获取类别列表
    getCategory() {
      //  请求
      categorys().then(res => {
        this.data = res.data
      })
    },
    // 保存类别
    add() {
      if (this.category.name) {
        addCategory(this.category).then(res => {
          console.log(res.data);
          // 清空文本框
          this.category.name = ""
          // 保存成功后关闭添加框
          this.centerDialogVisible = false
          // 获取插入成功的数据
          this.getCategory()
        }).catch(error => {
          console.log(error);
        })
      }
    },

    clearDialog() { //取消保存
      this.category = {};
      this.centerDialogVisible = false;
      this.centerDialog = false;
    },
  },
  created() {
    this.getCategory()
  }
}
</script>


<style scoped>

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding-right: 8px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.demonstration {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
}
/*主表的样式 */
el-table{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-table .warning-row {
  background: oldlace;

}

.el-table .success-row {
  background: #f0f9eb;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
