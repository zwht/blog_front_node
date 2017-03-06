/**
 * Created by zhaowei on 17/1/28.
 */
var User = require("./../../models/User");
var state = require("./../../servers/state");
var crypto = require('crypto');


module.exports = function (req, res) {
    if (!req.body.userName || !req.body.passWord) {
        res.json(state.getState(401));
        return;
    }
    var hash = crypto.createHash('md5');
    hash.update(req.body.passWord);
    var passWord = hash.digest('hex');
    User.find({userName: req.body.userName, passWord: passWord},
        function (err, docs) {
            if (err) {
                res.json(state.getState(501, err))
            } else {
                if (!docs.length) {
                    res.json(state.getState(402));
                } else {
                    res.json(state.getState(200, docs));
                }
            }
        });
};