/**
 * Created by zhaowei on 17/1/28.
 */
var fs = require('fs');
var path = require('path');
var Article = require("./../../models/Article");



module.exports = function (req, res) {

    var articleList=[];
    Article.find({},function (err,doc) {

        for(var i=0;i<doc.length;i++){
            articleList.push(doc[i]._doc);
        }
        res.render('index', {title: 'fuck',articleList:articleList});
    });
};