<template>
    <div>
        <el-card>
            <div class = 'info'>
                <div><span style="font-size:13px;">用户ID：{{user.id}}</span></div>
                <div>
                    <span style="font-size:13px;">真实姓名：{{user.name}}</span>
                    <el-popover>
                        <div>
                            <span>新姓名：</span>
                            <el-input maxlength="4" v-model="newInfo.newName" size="small" style="width:100px"></el-input>
                            <el-button size="small" @click="submitNewName">确认</el-button>
                        </div>
                        <el-button size="small" slot="reference">修改</el-button>
                    </el-popover>
                </div>
                <div><span style="font-size:13px;">性别：{{user.gender}}</span><el-button size="small" @click="genderEdit">修改</el-button></div>
                <div>
                    <span style="font-size:13px;">年龄：{{user.age}}</span>
                    <el-popover>
                        <el-slider v-model="newInfo.newAge"></el-slider>
                        <el-button size="small">确认</el-button>
                        <el-button size="small" slot="reference">修改</el-button>
                    </el-popover>
                </div>
                <div>
                    <span style="font-size:13px;">电话号码：{{user.phone}}</span>
                    <el-popover>
                        <span>新电话号码：</span>
                        <el-input onkeyup="value=value.replace(/[^0-9]/g,'')" maxlength="11" v-model="newInfo.newPhone" size="small" style="width:150px"></el-input>
                        <el-button size="small">确认</el-button>
                        <el-button size="small" slot="reference">修改</el-button>
                    </el-popover>
                </div>
                <div><span style="font-size:13px;">密码：</span><el-button size="small" @click="pwdEditVisible = true">修改密码</el-button></div>
            </div>
        </el-card>
        <el-dialog title="修改密码" :visible.sync="pwdEditVisible" width="30%">
            <el-input type="password" placeholder="新密码（6-16位非纯字母和数字）"></el-input>
            <el-input type="password" placeholder="确认新密码"></el-input>
            <el-button style="margin-left:35%">确认修改</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                id:0,
                name:'张三',
                gender:'男',
                age:'10',
                phone:'13700000000'
            },
            newInfo:{
                newName:'',
                newAge:20,
                newPhone:''
            },
            pwdEditVisible:false
        }
    },
    methods: {
        genderEdit(){
            this.$confirm('确定要修改性别吗？','确认',{
                confirmButtonText:'确认',
                cancelButtonText:'取消',
                type:'warning'
            }).then(function(){
                // 修改性别
            })
        },
        submitNewName(){
            // 提交新姓名
        }
    }
}
</script>
<style>
.info div{
    float:left;
    width:100%;
    margin:10px;
}
.info{
    margin-bottom: 5px;
}

.info div .el-button{
    margin-left:20px;
}

.el-dialog .el-input{
    padding:6px;
}
</style>


