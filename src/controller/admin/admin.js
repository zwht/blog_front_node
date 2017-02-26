/**
 * Created by zhaowei on 17/1/28.
 */
var User=require("./../../models/User");
module.exports=function (req,res) {


    res.sendfile("src/admin_front_end/views/admin.html");
}
