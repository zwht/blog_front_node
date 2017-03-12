/**
 * Created by zhaowei on 17/2/24.
 */
var DB = require("./DB");

var TokenSchema = DB.Schema({
    token: String,
    userId: String,
    createTime:Date
});

//TokenSchema.index({ createTime: 1 },{expireAfterSeconds: (1000*60*2)});//保存2小时
var TokenModel=DB.model('Token',TokenSchema);
module.exports = TokenModel;