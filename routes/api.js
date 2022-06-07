const express = require("express");

var router = express.Router();

router.get("/",(req,res)=>{
    // req.query 获取get传值
    res.send("api接口")
})

module.exports = router