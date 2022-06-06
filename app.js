const express = require("express");

// 引入外部模块
const index = require("./routes/index");

const app = express();

// 配置模板引擎
app.set("view engine", "ejs");

// 引用静态web目录
app.use(express.static("static"));

// 配置外部路由模块
app.use("/",index);

app.listen(3001);