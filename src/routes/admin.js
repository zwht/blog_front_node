/**
 * Created by zhaowei on 17/1/28.
 */

var login = require("../controller/admin/login");
var admin= require("../controller/admin/admin");

module.exports = function (app) {
    app.get('/admin', admin);
    app.get('/rest/admin/index', index);
    app.get('/rest/admin/login', login);
};

function index(req, res) {
    res.end('getUserDetailed' + req.params.id);
}


