/**
 * Created by zhaowei on 17/3/10.
 */
var Article = require("./../../models/Article");
var state = require("./../../servers/state");

module.exports = function (req, res) {
    var params=state.validateParam(req,res,['articleId']);
    if(!params) return;


    init();



    function init() {
        Article.find({_id:params.articleId}, function (err, docs) {
            if (err) {
                res.json(state.getState(400,err))
            } else {
                res.json(state.getState(200,docs[0]))
            }
        });
    }

};