/**
 * Created by zhaowei on 17/2/24.
 */

var mongoose = require("mongoose"); //引入mongoose
mongoose.connect('mongodb://localhost/zw');

module.exports = mongoose;