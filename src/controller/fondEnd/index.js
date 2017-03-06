/**
 * Created by zhaowei on 17/1/28.
 */
var fs = require('fs');
var path = require('path');



module.exports = function (req, res) {
    res.render('index', {title: 'index'});
};