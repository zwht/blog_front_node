/**
 * Created by zhaowei on 17/2/24.
 */
var DB = require("./DB");

var User = DB.model('user', {
    userName: String,
    passWord: String,
    token: String
});


module.exports = User;