<template>
  <div>
    <div class="main">
      <div class="mainin">
        <h1 class="title">考试在线报名系统</h1>
        <div class="mainin1">
          <ul>
            <li><input v-model="username" type="text" placeholder="邮箱" class="SearchKeyword"></li>
            <li><input v-model="password" type="password" placeholder="密码" class="SearchKeyword2"></li>
            <li style="margin-top:-5px">
              <div style="float:left;margin-top:12px;margin-left:3px"><span>验证码：</span></div>
              <div class="code" @click="refreshCode" style="float:left"><s-identify :identifyCode="identifyCode"></s-identify></div>
              <div style="float:left;margin-left:20px;margin-top:13px">
                <input v-model="identify" type="text" placeholder="验证码" class="SearchKeyword3" maxlength="4">
              </div>
            </li>
            <li><button class="tijiao" @click="login">提交</button></li>
            <li><a @click="reg">注册用户</a>&nbsp;&nbsp;<a @click="forgot">忘记密码</a></li>
          </ul>
        </div>
      </div>
    </div>
    <el-dialog title="注册" :visible.sync="regVisible" width="30%">
      <el-input placeholder="邮箱"></el-input>
      <el-input placeholder="密码"></el-input>
      <el-input placeholder="确认密码"></el-input>
      <el-input placeholder="真实姓名"></el-input>
      <el-button style="margin-top:10px">注册</el-button>
    </el-dialog>
    <el-dialog title="找回密码" :visible.sync="forgotVisible" width="30%"></el-dialog>
  </div>
</template>

<script>
import SIdentify from './identify'
export default {
  components: {
    's-identify': SIdentify
  },
  methods: {
    reg(){
      this.regVisible = true
    },
    login: function () {
      if (this.identify != this.identifyCode) {
        this.$message.error('验证码错误')
      } else {
        this.$axios.get('http://rap2api.taobao.org/app/mock/148593/users', {
          params: {
            email: this.username,
            password: this.$md5(this.password)
          },
          withCredentials: true
        }).then(function (r) {
          console.log(r.data.state)
        }).catch(function (r) {
          console.log(r)
        })
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    forgot(){
      this.forgotVisible = true;
    }
  },
  data() {
    return {
      username: '',
      password: '',
      identify: '',
      identifyCodes: "1234567890",
      identifyCode: "",
      regVisible:false,
      forgotVisible:false,
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0;}body,button,input,select,textarea{font-size:12px;  line-height:1.5em;}h1,h2,h3,h4,h5,h6{font-size:100%;}address,cite,dfn,em,var{font-style:normal;}code,kbd,pre,samp{font-family:courier new,courier,monospace;}small{font-size:12px;}ul,ol{list-style:none;}a{text-decoration:none; color:#03329c;}a:hover{text-decoration:underline; color:#cc0000;}sup{vertical-align:text-top;}sub{vertical-align:text-bottom;}legend{color:#000;}fieldset,img{border:0;}button,input,select,textarea{font-size:100%;}table{border-collapse:collapse;border-spacing:0;}
body{background: #006eb0 url(../assets/lgbg.png) center top no-repeat;clear: both;margin: 0 auto;width: 100%;min-width: 960px;}
.main{ margin:0 auto; width:960px; overflow:hidden;}
.mainin{ margin:0 auto; width:381px; overflow:hidden; clear:both; padding-top:109px;}
.mainin h1{ float:left; width:100%; height:22px; text-align:center; padding-bottom:22px; font-size: 30px;color: white;}
.mainin1{ float:left; width:381px; height:324px; background:url(../assets/hj.png) no-repeat;}
.mainin1 ul{ float:left; padding:25px 25px 0px; overflow:hidden; width:331px;}
.mainin1 ul li{ float:left; width:100%; overflow:hidden; padding-bottom:25px;}
.mainin1 ul li span, .mainin1 ul li input{ float:left;}
.mainin1 ul li span{ width:100%; clear:both; color:#6f6f6f; font-family:"Microsoft YaHei"; font-size:14px; line-height:37px;}
.main1 ul li a{font-size:30px}
.SearchKeyword {border:1px solid #c8c8c8;width: 202px;color: #999;font-size:12px; line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
.SearchKeyword2 {border:1px solid #c8c8c8;width: 202px;color: #999;font-size:12px; line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
.SearchKeyword3 {border:1px solid #c8c8c8;width: 202px;color: #999;font-size:12px; line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:100px; padding-left:10px;}

@media screen and (-webkit-min-device-pixel-ratio:0){.SearchKeyword2 {border:1px solid #c8c8c8;width: 202px;color: #999;line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}}
.SearchKeywordonFocus, .SearchKeywordonFocus2{border:1px solid #3c9ae9;width: 202px;line-height:35px;color: #333;font-size:14px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
@media screen and (-webkit-min-device-pixel-ratio:0){.SearchKeywordonFocus2{ font-size:25px;}}
.tijiao{ float:left; margin:0px 0px 0px 70px; height:42px; width:190px; background:none; border:none; background:url(../assets/dl.png) no-repeat; font-weight:bold; text-align:center; color:#fff; font-size:20px;font-family:"Microsoft YaHei"; cursor:pointer;}
.code {
  margin: 10px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
.el-dialog .el-input{
  padding: 5px;
}

</style>