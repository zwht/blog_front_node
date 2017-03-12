/**
 * Created by zhaowei on 17/3/10.
 */
var Article = require("./../../models/Article");
var zw = require("./../../servers/zw");

module.exports = function (req, res) {
    var params=zw.validateParam(req,res,['userId']);
    if(!params) return;



    init();

    function init() {
        Article.find({userId:params.userId},['_id','createTime','title'], function (err, docs) {
            if (err) {
                res.json(zw.getState(400,err))
            } else {
                res.json(zw.getState(200,docs))
            }
        });
    }

};