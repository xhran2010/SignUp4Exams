<template>
    <div v-if="show">
        <el-card>
            {{username}}欢迎您进入考试在线报名系统！
        </el-card>
        <el-card>
            <div slot="header">
                <span>概览</span>
            </div>
            <div>
                <div style="text-align:center;float:left;width:25%;">
                    <p>所有考试</p>
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
    inject:['reload'],
    data () {
        return {
            username:'',
            count:{
                available:0,
                topay:0,
                ready:0,
                ended:0
            },
            show:false
        }
    },
    beforeMount () {
        let that = this
        let token = this.$cookies.get('token')
        let userID = this.$cookies.get('userID')
        // 查询用户名
        this.$axios.get('http://115.159.211.43:3000/userinfo/' + userID, {
          params: {
            method: '查询用户信息'
          },
          headers: {
            'authorization': 'Bearer ' + token
          }
        }).then(function (r) {
          console.log(r.data)
          that.username = r.data.username + '，'
          that.show = true
        }).catch(function (r) {
            console.log(r)
        })
        /*
        // 查询可报名考试
        this.$axios.get('http://115.159.211.43:3000/userinfo/'+userID+'/subjects', {
          params: {
            method: '查询用户科目',
            userID:userID
          },
          headers: {
            'authorization': 'Bearer ' + token
          }
        }).then(function (r) {
            console.log(r.data)
            that.count.available = r.data.subjects.length
        }).catch(function (r) {
            console.log('连接错误')
        })
        */
       
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

