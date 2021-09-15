<template>
  <div>
    <!--触发添加的弹出框-->
    <el-button type="primary" @click="centerDialogVisible = true">添加类别</el-button>
    <template>
      <el-table
        :data="data"
        border
        style="width: 100%">

        <el-table-column
          prop="id"
          label="编号"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          @click="delCategory"
          label="删除">
          <el-button type="text" size="mini">删除</el-button>
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="修改类型">
          <el-button type="text" size="mini">修改操作</el-button>
        </el-table-column>
      </el-table>
    </template>


    <el-row style="margin-bottom: 10px;">

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
                        <el-button type="primary" @click="add">确 定</el-button>
                    </span>
        </el-dialog>
      </el-col>


    </el-row>
  </div>
</template>
<script>
import {addCategory, categorys} from "../api/category";

export default {
    name: "Category",
  data() {
    return {
      centerDialogVisible: false,
      centerDialog: false,
      defaultOptions: {label: 'name', value: 'id', checkStrictly: true, leaf: 'children', disable: 'status'},
      data: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      category: {},
    }
  }
  ,

  methods: {

    getCategory() {
      //  请求
      categorys().then(res => {
        console.log(res.data);
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
    delCategory(id) {
      console.log(id);
      this.$http.get("http://localhost:8989/admin/delete?id"+id).then(res => {
        if (res.data.success) {
          alert(res.data.msg + "点击刷新当前数据")
          this.findAll();
        }
      })
    }
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
}

.demonstration {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
