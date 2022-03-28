
var express = require("express");
var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors())
const path = require('path');

/** 初始化数据库 */
let dbPath = path.normalize(__dirname+"/../src/backend_src/assets/db.json");//electron bind
// let dbPath = path.normalize(__dirname+"/../../src/backend_src/assets/db.json");//node test
let FakerDb = require('./utils/fakedb').Fakedb;
let fakedb = new FakerDb(dbPath)
fakedb.readData();

/** 初始化后台服务器*/
app.get("/", function (req, res) {
  console.log(req);
  res.send("Hello World");
});
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


/** 路径设置 - mocks*/
app.post("/JQCX/ISSCSMainPlat_00_BussinessReqServlet", function (req, res) {
  let txCode = req.query.TXCODE;
  // console.log(req)
  let returnData = { SUCCESS: "true" };
  console.log("post txcode:" + txCode);
  console.log("收到" + txCode + "请求：", req.body.CCBJsonParam);
  returnData = fakedb.data[txCode]||{};
  returnData.SUCCESS = "true";
  res.send(returnData);
});

app.post("/JQCX/ISSCSMainPlat_00_ISSCSFileExt", function (req, res) {
  console.log("upload file request");
  console.log("收到请求：", req.body);
  let returnData = { SUCCESS: "true" };
  returnData.SUCCESS = "true";
  res.send(returnData);
});

/** 路径设置 - systems*/
app.post("/mockSystem", function (req, res) {
  console.log(req.query.TXCODE);
  console.log("收到请求：", req.body);
  let returnData = { SUCCESS: "true" };
  returnData.SUCCESS = "true";
  switch (req.query.TXCODE) {
   case  'MK002':{
      returnData.dbData = fakedb.data;
      break;
    }
    case  'MK003':{
      let updateData = req.body;
      fakedb.changeValue(updateData.hycode,updateData.json)
      break;
    }
    case 'MK004':{
      let updateData = req.body;
      fakedb.appendKV(updateData.hycode,updateData.json)
      break;
    }
    case 'MK005':{
      let updateData = req.body;
      fakedb.delete(updateData.hycode)
      break;
    }
  }
  res.send(returnData);
});
