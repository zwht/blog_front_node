/**
 * Created by zhaowei on 17/3/7.
 */
var Article = require("./../../models/Article");
var User = require("./../../models/User");
var zw = require("./../../servers/zw");


module.exports = function (req, res) {

    var body = req.body;
    init();
    function init() {
        if (!body.title || !body.content || !body.userId) {
            res.json(zw.getState(401));
            return;
        }
        hasUser();
    }


    function hasUser() {
        User.findById(body.userId, function (err, docs) {
            if (err) {
                res.json(zw.getState(406))
            } else {
                if (docs.length) {
                    res.json(zw.getState(406))
                } else {
                    hasArticleTitle();
                }
            }
        });
    }

    function hasArticleTitle() {
        Article.find({title:body.title,userId:body.userId}, function (err, docs) {
            if (err) {
                res.json(zw.getState(406))
            } else {
                if (!docs.length) {
                    addArticle()
                } else {
                    res.json(zw.getState(407))
                }
            }
        });
    }

    function addArticle() {

        var articleObj = new Article({
            title: body.title,
            content: body.content,
            createTime: new Date,
            userId: body.userId
        });

        articleObj.save(function (err, data) {
            if (err) {
                res.json(zw.getState(501, err))
            } else {
                res.json(zw.getState(200, data));
            }
        });
    }

};