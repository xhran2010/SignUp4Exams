const express = require('express');
const router = express.Router();
const knex = require('../tools/knex');
const uuid = require('uuid');
const utility = require("utility");
const jwt = require('jsonwebtoken');

const PrivateKey = "skey";

// 用户信息查询
router.get('/:userID', async function(req, res, next) {
  console.log(JSON.stringify(req.params));
  let toBack = {
    state: false,
    message: ""
  }
  if('userID' in req.params){
    await knex('userinfo')
          .where('userID', '=', req.params.userID)
          .select('*').then(e=>{
            console.log(`用户信息查询结果为 ${JSON.stringify(e)}`);
            if(e.length>0){
              toBack.state = true;
              toBack = Object.assign(toBack, e[0]);
            } else {
              toBack.message = '用户不存在';
            }
    })
  } else {
    toBack.message = "参数错误";
    toBack.req = {};
    toBack.req.params = req.params;
    toBack.req.body = req.body;
    toBack.req.query = req.query;
    toBack.req.headers = req.headers;
  }
  res.json((toBack));
});

// 更新用户信息
router.put('/:userID', async function(req, res, next) {
    console.log(JSON.stringify(req.body));
    let toBack = {
      state: false,
      message: ""
    }
    let newInfo = req.body;
    if('method' in newInfo){
        delete newInfo.method;
    }

    let userID = req.params.userID;
    await knex('userinfo')
        .where('userID', '=', userID)
        .select('*').then(async e=>{
            console.log(`用户信息查询结果为 ${JSON.stringify(e)}`);
            if(e.length>0){
                await knex('userinfo')
                    .where('userID', '=', userID)
                    .update(newInfo)
                    .then(n=>{
                        console.log(`更新的行数为 ${n}`);
                        if(n>0){
                            toBack.state = true;
                            toBack.message = '更新成功';
                            toBack.userinfo = Object.assign(e[0], newInfo);
                        }
                    })
            } else {
                toBack.message = '更新失败';
            }
    })
    
    res.json((toBack));
  });


module.exports = router;
