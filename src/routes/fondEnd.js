/**
 * Created by zhaowei on 17/1/18.
 */
var index= require("../controller/fondEnd/index");
module.exports = function (app) {
    app.get('/', index);
    app.get('/users/detailed/:id', getUserDetailed);
};

function getUserDetailed(req, res) {
    res.end('getUserDetailed' + req.params.id);
}
