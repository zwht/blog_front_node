/**
 * Created by zhaowei on 17/3/10.
 */
var Article = require("./../../models/Article");
var zw = require("./../../servers/zw");

module.exports = function (req, res) {
    var params=zw.validateParam(req,res,['articleId']);
    if(!params) return;


    init();



    function init() {
        Article.find({_id:params.articleId}, function (err, docs) {
            if (err) {
                res.json(zw.getState(400,err))
            } else {
                res.json(zw.getState(200,docs[0]))
            }
        });
    }

};