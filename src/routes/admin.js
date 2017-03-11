/**
 * Created by zhaowei on 17/1/28.
 */
var admin= require("../controller/admin/admin");
var getArticle = require("../controller/admin/getArticle");

var login = require("../controller/admin/login");
var addUser= require("../controller/admin/addUser");
var addArticle = require("../controller/admin/addArticle");

var url="/rest/admin/";
module.exports = function (app) {
    app.get('/admin', admin);
    app.get(url+'index', index);
    app.get(url+'getArticle', getArticle);


    app.post(url+'login', login);
    app.post(url+'addUser', addUser);
    app.post(url+'addArticle', addArticle);
};

function index(req, res) {
    res.end('getUserDetailed' + req.params.id);
}


