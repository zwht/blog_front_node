/**
 * Created by zhaowei on 17/3/5.
 */
var User = require("./../../models/User");
var zw = require("./../../servers/zw");
var crypto = require('crypto');



module.exports = function (req, res) {
    var body = req.body;
    init();

    function init() {
        if (!body.userName || !body.passWord || !body.repeatPassWord) {
            res.json(zw.getState(401));
            return;
        }
        if (body.passWord != body.repeatPassWord) {
            res.json(zw.getState(405));
            return;
        }
        hasUserName();
    }


    function hasUserName() {
        User.find({userName: req.body.userName},
            function (err, docs) {
                if (err) {
                    res.json(zw.getState(501, err))
                } else {
                    if (!docs.length) {
                        addUser();
                    } else {
                        res.json(zw.getState(403));
                    }
                }
            });
    }

    function addUser() {
        var hash = crypto.createHash('md5');
        hash.update(body.passWord);
        var userObj = new User({userName: body.userName, passWord: hash.digest('hex')});
        userObj.save(function (err, data) {
            if (err) {
                res.json(zw.getState(501, err))
            } else {
                res.json(zw.getState(200,data));
            }
        });
    }

};