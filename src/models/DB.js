/**
 * Created by zhaowei on 17/2/24.
 */

var mongoose = require("mongoose"); //引入mongoose
var db=mongoose.connect('mongodb://localhost/zw');

module.exports = db;