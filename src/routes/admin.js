/**
 * Created by zhaowei on 17/1/28.
 */
var admin= require("../controller/admin/admin");
var login = require("../controller/admin/login");
var addUser= require("../controller/admin/addUser");

module.exports = function (app) {
    app.get('/admin', admin);
    app.get('/rest/admin/index', index);
    app.post('/rest/admin/login', login);
    app.post('/rest/admin/addUser', addUser);
};

function index(req, res) {
    res.end('getUserDetailed' + req.params.id);
}


