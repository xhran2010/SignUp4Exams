<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="未缴费">
                <el-table :data="tableData.toPay" style="width:100%">
                    <el-table-column prop="subjectID" label="科目ID" width="100"/>
                    <el-table-column prop="subjectName" label="科目名称" width="300"/>
                    <el-table-column prop="subjectCost" label="报名费用" width="100"/>
                    <el-table-column prop="registerDeadline" label="缴费截止时间" width="200"/>
                    <el-table-column label="状态" width="100"><span style="color:red">待缴费</span></el-table-column>
                    <el-table-column label="操作"><el-button size="small">缴费</el-button></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="待考试">
                <el-table :data="tableData.ready">
                    <el-table-column prop="subjectID" label="科目ID" width="100"/>
                    <el-table-column prop="subjectName" label="科目名称" width="300"/>
                    <el-table-column prop="examTime" label="考试时间" width="200"/>
                    <el-table-column label="状态" width="100"><span style="color:blue">待考试</span></el-table-column>
                    <el-table-column label="操作"><el-button size="small">取消考试</el-button></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已结束">
                <el-table :data="tableData.ended">
                    <el-table-column prop="subjectID" label="科目ID" width="100"/>
                    <el-table-column prop="subjectName" label="科目名称" width="300"/>
                    <el-table-column label="状态" width="100"><span style="color:green">已结束</span></el-table-column>
                    <el-table-column prop="score" label="分数"/>
                </el-table>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData:{
                toPay:[{
                    subjectID:0,
                    subjectName:'test',
                    subjectCost:'0',
                    registerDeadline:'2099-01-01'
                }],
                ready:[{
                    subjectID:0,
                    subjectName:'test',
                    examTime:'2099-01-01',
                }],
                ended:[{
                    subjectID:0,
                    subjectName:'test',
                    score:'0',
                }]
            }

        }
    }
}
</script>
