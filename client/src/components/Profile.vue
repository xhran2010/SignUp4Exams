<template>
    <div>
        <el-card>
            <div class = 'info'>
                <div><span style="font-size:13px;">用户ID：{{user.id}}</span></div>
                <div><span style="font-size:13px;">真实姓名：{{user.name}}</span><el-button size="small">修改</el-button></div>
                <div><span style="font-size:13px;">性别：{{user.gender}}</span><el-button size="small">修改</el-button></div>
                <div><span style="font-size:13px;">年龄：{{user.age}}</span><el-button size="small">修改</el-button></div>
                <div><span style="font-size:13px;">电话号码：{{user.phone}}</span><el-button size="small">修改</el-button></div>
                <div><span style="font-size:13px;">密码：</span><el-button size="small">修改密码</el-button></div>
            </div>
            
        </el-card>
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
            }
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
</style>


