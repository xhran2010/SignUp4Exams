<template>
    <div>
        <el-card>
            欢迎您进入后台系统
        </el-card>
        <el-card>
            <div align="center">
                <el-button>退出系统</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username:'辛浩然',
            count:{
                available:0,
                topay:0,
                ready:0,
                ended:0
            }
        }
    }
}
</script>
<style>
.el-card{
    margin-bottom: 10px;
}
.number{
    font-size:25px;
    font-weight: bold;
    color:#0f7fd2;
}
</style>

