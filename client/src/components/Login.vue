<template>
  <div>
    <div class="main">
      <div class="mainin">
        <h1 class="title">考试在线报名系统</h1>
        <div class="mainin1">
          <ul>
            <li><span>用户名：</span><input v-model="username" name="loginName" type="text" id="loginName" placeholder="登录名" class="SearchKeyword"></li>
            <li><span>密码：</span><input v-model="password" type="password" name="Possword" id="Possword" placeholder="密码" class="SearchKeyword2"></li>
            <li><button class="tijiao" @click="login">提交</button></li>
            <li><a href="#">注册用户</a>&nbsp;&nbsp;<a href="#">忘记密码</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        login:function(){
            alert('login test')
        }
    },
    data(){
        return{
            username:'',
            password:'',
        }
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
.SearchKeyword {border:1px solid #c8c8c8;width: 202px;color: #999;font-size:12px; line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
.SearchKeyword2 {border:1px solid #c8c8c8;width: 202px;color: #999;font-size:12px; line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
@media screen and (-webkit-min-device-pixel-ratio:0){.SearchKeyword2 {border:1px solid #c8c8c8;width: 202px;color: #999;line-height:35px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}}
.SearchKeywordonFocus, .SearchKeywordonFocus2{border:1px solid #3c9ae9;width: 202px;line-height:35px;color: #333;font-size:14px; background:url(../assets/srbg.png) no-repeat; height:35px; width:317px; padding-left:10px;}
@media screen and (-webkit-min-device-pixel-ratio:0){.SearchKeywordonFocus2{ font-size:25px;}}
.tijiao{ float:left; margin:13px 0px 0px 70px; height:42px; width:190px; background:none; border:none; background:url(../assets/dl.png) no-repeat; font-weight:bold; text-align:center; color:#fff; font-size:20px;font-family:"Microsoft YaHei"; cursor:pointer;}

</style>