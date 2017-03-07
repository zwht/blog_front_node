/**
 * Created by zhaowei on 17/3/6.
 */

var DB = require("./DB");

var Discuss = DB.model('discuss', {
    name: String,
    content: String,
    createTime: Date,
    articleId: String,
    email: String,
    isShow: Boolean
});

module.exports = Discuss;