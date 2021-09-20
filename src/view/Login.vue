<template>
  <div class="login box">
    <img src="../assets/image/1111.jpg" alt="">
    <div class="login">
      <div class="login-title">
        <img src="../assets/image/logo.png" alt="">
        <p>百知教育给你最优质的学习体验!</p>
      </div>
      <div class="login_box">
        <div class="title">
          <span @click="choice=true" :class="activeClass=choice?'span':''">密码登录</span>
          <span @click="choice=false" :class="activeClass=choice?'':'span'">短信登录</span>
        </div>
        <div class="inp" v-show="choice">
          <label>
            <input type="text"   placeholder="用户名 / 手机号码" v-model="user.name" class="user">
          </label>
          <label>
            <input type="password"  class="pwd" v-model="user.password" placeholder="密码">
          </label>
          <div id="test_captcha"></div>
          <div class="remember">
            <p>
              <label>
                <input type="checkbox" class="no" />
              </label>
              <span>记住密码</span>
            </p>
            <p><router-link to="/forget">忘记密码</router-link></p>
          </div>
          <button class="login_btn btn btn-primary" @click="Login">登录</button>
          <p class="go_login">没有账号
            <router-link to="/register">立即注册</router-link>
          </p>
        </div>
        <div class="inp" v-show="!choice">
          <label>
            <input type="text" placeholder="手机号码" v-model="phone" class="user">
          </label>
          <label>
            <input type="text" class="pwd" v-model="code"  placeholder="短信验证码">
          </label>
          <el-button type="info" style="width: 142px;font-size: 14px"  plain  @click="Captcha">获取验证码</el-button>
          <button class="login_btn" @click="LoginBy" >登录</button>
          <span class="go_login">没有账号
                    <router-link to="/register">立即注册</router-link>
                </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {captcha, login, LoginByPhone} from "../api/login";

export default {
  name: "Login",
  data() {
    return {
      choice: true,
      user:{},
      checked:true,
      phone:"",
      code:"",
      nameValue:"",
      pwdValue:"密码",
    }
  },
  methods:{
    Login(){
      let params={name:this.user.name,password:this.user.password}
      login(params).then(res=>{
        this.$router.push("/home");
        this.token=res.data.token;
        localStorage.username=res.data.username;
        localStorage.token=res.data.token;
      })
    },
    Captcha(){
      captcha(this.phone).then(res=>{})
    },
    LoginBy(){
      let params={phone:this.phone,code:this.code}
      LoginByPhone(params).then(res=>{
        this.$router.push("/home");
        this.token=res.data.token;
        localStorage.username=res.data.username;
        localStorage.token=res.data.token;
      })
    }
  },
  created() {
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.box img {
  width: 100%;
  min-height: 100%;
}

.box .login {
  position: absolute;
  width: 500px;
  height: 400px;
  top: 0;
  left: 0;
  margin: auto;
  right: 0;
  bottom: 0;
  top: -338px;
}

.login .login-title {
  width: 100%;
  text-align: center;
}

.login-title img {
  width: 190px;
  height: auto;
}

.login-title p {
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #fff;
  letter-spacing: .29px;
  padding-top: 10px;
  padding-bottom: 50px;
}

.login_box {
  width: 400px;
  height: auto;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
  border-radius: 4px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.login_box .title {
  font-size: 20px;
  color: #9b9b9b;
  letter-spacing: .32px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  padding: 50px 60px 0 60px;
  margin-bottom: 20px;
  cursor: pointer;
}

/*.login_box .title span:nth-of-type(1) {*/
/*    color: #4a4a4a;*/
/*    border-bottom: 2px solid #84cc39;*/
/*}*/

.inp {
  width: 350px;
  margin: 0 auto;
}

.inp input {
  border: 0;
  outline: 0;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  text-indent: 20px;
  font-size: 14px;
  background: #fff !important;
}

.inp input.user {
  margin-bottom: 16px;
}

.inp .remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 10px;
}

.inp .remember p:first-of-type {
  font-size: 12px;
  color: #4a4a4a;
  letter-spacing: .19px;
  margin-left: 22px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  /*position: relative;*/
}

.inp .remember p:nth-of-type(2) {
  font-size: 14px;
  color: #9b9b9b;
  letter-spacing: .19px;
  cursor: pointer;
}

.inp .remember input {
  outline: 0;
  width: 30px;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  text-indent: 20px;
  font-size: 14px;
  background: #fff !important;
}

.inp .remember p span {
  display: inline-block;
  font-size: 12px;
  width: 100px;
  /*position: absolute;*/
  /*left: 20px;*/

}

#geetest {
  margin-top: 20px;
}

.login_btn {
  width: 100%;
  height: 45px;
  background: #84cc39;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  letter-spacing: .26px;
  margin-top: 30px;
}

.inp .go_login {
  text-align: center;
  font-size: 14px;
  color: #9b9b9b;
  letter-spacing: .26px;
  padding-top: 20px;
}

.inp .go_login span {
  color: #84cc39;
  cursor: pointer;
}

.span {
  color: #4a4a4a;
  border-bottom: 2px solid #84cc39;
}
</style>
