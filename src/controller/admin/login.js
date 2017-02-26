/**
 * Created by zhaowei on 17/1/28.
 */
var User=require("./../../models/User");
module.exports = function (req, res) {
    var zw = new User({ name: '孟瑶瓜娃子' });

    var data=User.find({name:"孟瑶瓜娃子"});

    console.log(data);
    res.end('login');
}