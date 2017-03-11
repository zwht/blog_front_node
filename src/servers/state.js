/**
 * Created by zhaowei on 17/3/5.
 */

module.exports = {
    stateList: [
        {
            key: 401,
            str: '传人参数错误！'
        },
        {
            key: 402,
            str: '用户名密码错误！'
        },
        {
            key: 403,
            str: '用户名重复！'
        },
        {
            key: 404,
            str: '找不到数据！'
        },
        {
            key: 405,
            str: '密码不一致！'
        },
        {
            key: 406,
            str: '用户不存在，不能操作！'
        },
        {
            key: 407,
            str: '文章名字重复了！'
        },
        {
            key: 200,
            str: '成功！'
        },
        {
            key: 501,
            str: '数据查询错误，可能连接数据库出了问题！'
        },
        {
            key: 500,
            str: '后端未知错误，请联系程序猿，1512763623@qq.com'
        }
    ],
    getState: function (state, data) {
        var i = 0, stateObj = {}, newData = {data: data};
        for (i; i < this.stateList.length; i++) {
            if (this.stateList[i].key == state) stateObj = this.stateList[i];
        }
        return Object.assign(stateObj, newData);
    },
    validateParam: function (req, res, params) {
        var body=req.method=='GET'?req.query:req.body;
        for (var i = 0; i < params.length; i++) {
            if (body[params[i]] == undefined||body[params[i]] == 'undefined') {
                res.json(this.getState(401));
                return false;
                break
            }
        }
        return body;
    }
};
