<template>
    <div>
        <el-table :data="examData" style="width:100%">
            <el-table-column prop="subjectID" label="科目ID" width="100"/>
            <el-table-column prop="subjectName" label="科目名称" width="350"/>
            <el-table-column prop="subjectCost" label="报名费用" width="150"/>
            <el-table-column prop="registerDeadline" label="报名截止日期" width="200"></el-table-column>
            <el-table-column prop="examTime" label="考试时间" width="200"></el-table-column>
            <el-table-column label="操作">
                <el-button size="small">报名</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            examData:[{
                subjectID:1,
                subjectName:'科目一',
                subjectCost:'200元',
                registerDeadline:'0',
                examTime:'0'
            }]
        }
    }
}
</script>