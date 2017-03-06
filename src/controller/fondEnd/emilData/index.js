/**
 * Created by zhaowei on 17/1/28.
 */
var fs = require('fs');
var path = require('path');
var el = require("./data6");


module.exports = function (req, res) {
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    for (var k = 0; k < el.edges.length; k++) {
        el.edges[k].data.value = GetRandomNum(1000, 1000000);
        el.edges[k].data.time = GetRandomNum(1482622563014, (new Date()).getTime());
    }

    for (var i = 0; i < el.nodes.length; i++) {
        var id = el.nodes[i].data.id;
        el.nodes[i].data.id = "" + el.nodes[i].data.id.substr(0, 15) + GetRandomNum(1000, 9999);
        el.nodes[i].data.rank = 0;
        el.nodes[i].data.income = 0;
        el.nodes[i].data.pay = 0;

        for (var j = 0; j < el.edges.length; j++) {
            if (id == el.edges[j].data.source) {
                el.edges[j].data.source = el.nodes[i].data.id;
                el.nodes[i].data.pay += el.edges[j].data.value;
                el.nodes[i].data.rank++;
            }
            if (id == el.edges[j].data.target) {
                el.edges[j].data.target = el.nodes[i].data.id;
                el.nodes[i].data.income += el.edges[j].data.value;
            }
        }
    }


    fs.writeFile(path.join(__dirname, 'account.json'), JSON.stringify(el), function (err) {
        if (err) throw err;
        console.log("Export Account Success!");
    });

    debugger
    res.render('index', {title: 'index'});
};