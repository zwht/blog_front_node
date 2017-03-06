/**
 * Created by zhaowei on 17/3/6.
 */
var DB = require("./DB");

var Article = DB.model('article', {
    title: String,
    content: String,
    createTime: Int8Array,
    authorId: String
});

module.exports = Article;
