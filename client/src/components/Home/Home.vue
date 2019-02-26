<template>
  <div>
    <el-container class="all">
      <el-header>
            <div class="title"><span>考试在线报名系统</span></div>
      </el-header>
      <el-container>
        <el-aside width="12%">
            <el-menu router=true default-active="1" background-color="#f0f8fc">
                <el-menu-item index="/home/default">
                    <i class="el-icon-location" style="margin-bottom:3px"></i>首页
                </el-menu-item>
                <el-menu-item index="/home/profile">
                  <i class="el-icon-edit" style="margin-bottom:3px"></i>我的信息
                </el-menu-item>
                <el-menu-item index="/home/signup"><i class="el-icon-document" style="margin-bottom:3px"></i>考试报名</el-menu-item>
                <el-menu-item index="/home/myexams"><i class="el-icon-date" style="margin-bottom:3px"></i>我的考试</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.all{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #2a83cf;
}
.el-header{text-align: left;float: left;}
.el-aside{background-color:#f0f8fc;}
.el-main{background-color:#fafafa;text-align: left;}
.el-menu{padding: 5px}
.el-submenu .el-menu-item{font-size:10px;}
.title{font-size: 20px;color:white;line-height: 60px;display: inline;}

</style>
