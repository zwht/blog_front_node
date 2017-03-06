/**
 * Created by zhaowei on 17/3/6.
 */

var DB = require("./DB");

var Visitor = DB.model('visitor', {
    articleId:String,
    ip: String,
    createTime: Int8Array,
    bower: String,
    system: String
});

module.exports = Visitor;