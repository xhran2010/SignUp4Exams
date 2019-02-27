const express = require('express');
const router = express.Router();
const knex = require('../tools/knex');
const uuid = require('uuid');
const utility = require("utility");
const jwt = require('jsonwebtoken');

const PrivateKey = "skey";

// 查询科目列表
router.get('/', async function(req, res, next) {
  console.log(JSON.stringify(req.params));
  let toBack = {
    state: false,
    message: ""
  }

  await knex('subjects').select('*').then(e =>{
    console.log(`课目列表情况为 ${JSON.stringify(e)}`);
    toBack.subjects = e;
    toBack.state = true;
    toBack.message = '查询成功';
  })

  res.json((toBack));
});

// 科目报名
router.post('/:subjectID/singup', async function(req, res, next){
  console.log(JSON.stringify(req.params));
  console.log(JSON.stringify(req.body));

  toBack = {
      state: false,
      message: "报名失败"
  }
  if(!('subjectID' in req.params && 'userID' in req.body)){
    toBack.message = "参数错误";
  } else{
    subjectID = req.params.subjectID;
    userID = req.body.userID;
    await knex('subjects')
        .where('subjectID', '=', subjectID)
        .select('subjectName')
        .then(async e =>{
            if(e.length>0){
                console.log(`报名的科目是 ${JSON.stringify(e)}`);
                subjectName = e[0].subjectName;
                await knex(subjectName + 'Subject')
                    .where('userID', '=', userID)
                    .count()
                    .then(async n =>{
                        if(n>0){
                            toBack.message = '已报名';
                        } else{
                            await knex(subjectName + 'Subject')
                                .insert({
                                    userID: userID,
                                    payment: false,
                                    score: null
                                }).then(res =>{
                                    console.log(`报名的结果为 ${res}`);
                                    toBack.state = true;
                                    toBack.message = '报名成功';
                                })
                        }
                    })
            } else{
                toBack.message = '科目不存在';
            }
    })
  }

  res.send(toBack);
});


// 分数查询


module.exports = router;
