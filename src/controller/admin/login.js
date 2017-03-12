/**
 * Created by zhaowei on 17/1/28.
 */
var User = require("./../../models/User");
var Token = require("./../../models/Token");
var zw = require("./../../servers/zw");
var crypto = require('crypto');
var jwt = require("jsonwebtoken");


module.exports = function (req, res) {
    if (!req.body.userName || !req.body.passWord) {
        res.json(zw.getState(401));
        return;
    }
    var hash = crypto.createHash('md5');
    hash.update(req.body.passWord);
    var passWord = hash.digest('hex');
    User.findOne({userName: req.body.userName, passWord: passWord},['_id'],
        function (err, docs) {
            if (err) {
                res.json(zw.getState(501, err))
            } else {
                if (docs.errors) {
                    res.json(zw.getState(402));
                } else {
                    var token=jwt.sign({ foo: docs._doc._id.id, iat: Date.now()+(1000*60*60) },"zw");
                    var oneToken=new Token({
                        token:token,
                        userId:docs._doc._id.id,
                        createTime:new Date()
                    });
                    oneToken.save(function (err,data) {
                        if(!err){
                            res.json(zw.getState(200,{
                                _id:docs._id,
                                token: token
                            }));
                        }else {
                            res.json(zw.getState(501));
                        }
                    });

                }
            }
        });
};