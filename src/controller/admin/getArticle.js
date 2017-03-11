/**
 * Created by zhaowei on 17/3/10.
 */
var Article = require("./../../models/Article");
var User = require("./../../models/User");
var state = require("./../../servers/state");

module.exports = function (req, res) {
    var params=state.validateParam(req,res,['userId']);
    if(!params) return;


    init();



    function init() {
        Article.find({userId:params.userId}, function (err, docs) {
            if (err) {
                res.json(state.getState(406))
            } else {
                res.json(state.getState(200,docs))
            }
        });
    }

};