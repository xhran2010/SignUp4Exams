<template>
    <div>
        <el-card>
            {{username}}，欢迎您进入考试在线报名系统！
        </el-card>
        <el-card>
            <div slot="header">
                <span>概览</span>
            </div>
            <div>
                <div style="text-align:center;float:left;width:25%;">
                    <p>可报名考试</p>
                    <p class="number">{{count.available}}</p>
                </div>
                <div style="text-align:center;float:left;width:25%;">
                    <p>待缴费考试</p>
                    <p class="number">{{count.topay}}</p>
                </div>
                <div style="text-align:center;float:left;width:25%;">
                    <p>等待考试</p>
                    <p class="number">{{count.ready}}</p>
                </div>
                <div style="text-align:center;float:left;width:25%;">
                    <p>已结束考试</p>
                    <p class="number">{{count.ended}}</p>
                </div>
            </div>
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

