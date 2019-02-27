const express = require('express');
const router = express.Router();
const knex = require('../tools/knex');
const uuid = require('uuid');
const utility = require("utility");
const jwt = require('jsonwebtoken');

const PrivateKey = "skey";

// 用户登录
router.get('/', async function(req, res, next) {
  console.log(JSON.stringify(req.query));
  const query = req.query;
  let toBack = {
    "state": false,
    "message": ""
  }
  await knex("users").where("email", "=", query.email).then(async e=>{
    console.log(JSON.stringify(e));

    if(utility.md5(query.password)==e[0].password){
      toBack.state = true;
      toBack.userID = e.userID;
      toBack.message = "登录成功";
      toBack.token = jwt.sign({
          userID: e[0].userID, 
          email: e[0].email
        },
        PrivateKey,
        {expiresIn: 60 * 60
      });
    } else {
      toBack.message = "密码错误"
    }
  })
  res.json(toBack);
});

// 用户注册
router.post('/', async function(req, res, next) {
  console.log(JSON.stringify(req.body));
  const body = req.body;

  // 测试数据库是否连接成功
  // knex("subjects").select("*").then(async e=>{
  //   console.log(`select result is ${JSON.stringify(e)}`);
  // })

  let toBack = {
    state:false,
    userID:""
  }

  await knex("users").havingIn("email", body.email).then(async e=>{
    if(e.length>0){
      console.log(`register failure: ${e}`);
      // res.send('post with failure');
    } else {
      let userID = uuid.v1();
      
      knex("users").insert({
        "userID": userID,
        "email": body.email,
        "activation": false,
        "password": utility.md5(body.password)
      }).then(async e=>{
        if(e!=0){
          console.log(`Insert Result is ${e}`);
        }
      })

      knex("userinfo").insert({
        userID: userID,
        username: body.username,
        gender: "m",
        age: 1,
        phone: ""
      }).then(async e=>{
        if(e!=0){
          console.log(`Insert Result is ${e}`);
        }
      })
      
      toBack.state = true;
      toBack.userID = userID;
    }    
  })
  console.log(`toBack: ${JSON.stringify(toBack)}`);
  res.send(toBack);
});


module.exports = router;
