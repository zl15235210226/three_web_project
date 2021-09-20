<template>
  <div class="footer">
    <ul >
      <li v-for="nav in navs" v-if="nav.position===0"  >{{nav.title}}</li>
    </ul>
  </div>
</template>

<script>
import {queryNav} from "../api/header";

export default {
  name: "Footer",
  data(){
    return{
      navs:[],
    }
  },
  methods:{
    queryNavAll(){
      queryNav().then(res=>{
        this.navs=res.data;
      })
    }
  },
  created() {
    this.queryNavAll();
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 128px;
  background: #25292e;
  color: #fff;
}

.footer ul {
  margin: 0 auto 16px;
  padding-top: 38px;
  width: 810px;
}

.footer ul li {
  float: left;
  width: 112px;
  margin: 0 10px;
  text-align: center;
  font-size: 14px;
}

.footer ul::after {
  content: "";
  display: block;
  clear: both;
}

.footer p {
  text-align: center;
  font-size: 12px;
}
</style>
