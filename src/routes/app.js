/**
 * Created by zhaowei on 17/1/18.
 */
var fondEnd = require('./fondEnd');
var admin = require('./admin');


module.exports = function (app,mongoose) {
    fondEnd(app,mongoose);
    admin(app,mongoose);

    app.get('*', function(req, res){
        res.render('404', {title: 'No Found'})
    });
};