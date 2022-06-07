const express = require("express");

// 引入外部模块
const frontend = require("./routes/frontend");
const backend = require("./routes/backend");
const api = require("./routes/api");

const app = express();

// 配置模板引擎
app.set("view engine", "ejs");

// 引用静态web目录
app.use(express.static("static"));

// 配置外部路由模块
app.use("/",frontend);
app.use("/admin",backend);
app.use("/api",api);

app.listen(3000);