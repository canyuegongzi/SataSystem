"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fun = require("./mock");
var bodyParser = require("body-parser");
var fs = require('fs');
var mock_1 = require("./mock");
var mockData = require("../model/localadmin");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*在线人数信息*/
var linenumdatas = [
    {
        name: '总数',
        xAyisIndex: 1,
        type: 'line',
        data: [200, 120, 236, 350, 220, 250]
    },
    {
        name: '儿童',
        type: 'bar',
        data: [58, 60, 105, 250, 360, 200]
    },
    {
        name: '青年',
        type: 'bar',
        data: [88, 20, 215, 150, 260, 100]
    },
    {
        name: '中年',
        type: 'bar',
        data: [158, 160, 15, 20, 160, 150]
    },
    {
        name: '老年',
        type: 'bar',
        data: [258, 110, 150, 280, 160, 50]
    },
];
/*系统信息指标*/
var sysData = fun.Makedata(5);
/*系统警告*/
var systemToke = [
    {
        id: 5,
        time: 2017,
        degree: 5,
        cure: '是',
        desc: 'A1！',
    },
    {
        id: 2,
        time: 2016,
        degree: 7,
        cure: '否',
        desc: 'A1！',
    },
    {
        id: 1,
        time: 2015,
        degree: 7,
        cure: '否',
        desc: 'A1！',
    }
];
/*系统的详细信息*/
var systemdatil = [
    new mock_1.SysDetail(5, 2017, 5, 'A1', true, 'marvin', 'xxx', '我也不知道啥原因', '没查出原因来'),
    new mock_1.SysDetail(2, 2016, 7, 'A1', true, 'marvin', 'xxx', '你问我我哪儿知道', '没啥意见'),
    new mock_1.SysDetail(1, 2015, 7, 'A1', true, 'marvin', 'xxx', '不知道', '不知道'),
];
/*系统解析文件配*/
var sysaccount = [
    new mock_1.SysWriteData('东北', 20, 102, false, 0.2, 0.4, 0.9, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('华北', 32, 402, true, 0.4, 0.58, 0.8, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('西北', 46, 982, true, 0.45, 0.47, 0.5, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('西南', 54, 412, false, 0.89, 0.59, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('华南', 66, 582, true, 0.45, 0.36, 0.2, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('华中', 10, 252, false, 0.14, 0.7, 0.1, 'xxxxxxxxxxxxxxxxxxxxxx'),
    new mock_1.SysWriteData('华东', 2780, 402, true, 0.258, 0.99, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
];
/*系统的分布的具体信息的配置文件*/
var dataSafeMap = [
    {
        media: [
            { name: '北京', value: 11 },
            { name: '天津', value: 11 },
            { name: '上海', value: 11 },
            { name: '重庆', value: 11 },
            { name: '河北', value: 11 },
            { name: '河南', value: 11 },
            { name: '云南', value: 11 },
            { name: '辽宁', value: 11 },
            { name: '黑龙江', value: 44 },
            { name: '湖南', value: 47 },
            { name: '安徽', value: 47 },
            { name: '山东', value: 47 },
            { name: '新疆', value: 47 },
            { name: '江苏', value: 47 },
            { name: '浙江', value: 47 },
            { name: '江西', value: 47 },
            { name: '湖北', value: 47 },
            { name: '广西', value: 47 },
            { name: '甘肃', value: 47 },
            { name: '山西', value: 47 },
            { name: '内蒙古', value: 21 },
            { name: '陕西', value: 32 },
            { name: '吉林', value: 32 },
            { name: '福建', value: 32 },
            { name: '贵州', value: 32 },
            { name: '广东', value: 32 },
            { name: '青海', value: 32 },
            { name: '西藏', value: 32 },
            { name: '四川', value: 32 },
            { name: '宁夏', value: 32 },
            { name: '海南', value: 32 },
            { name: '台湾', value: 32 },
            { name: '香港', value: 32 },
            { name: '澳门', value: 87 }
        ],
        memory: [
            { name: '北京', value: 78 },
            { name: '天津', value: 78 },
            { name: '上海', value: 78 },
            { name: '广东', value: 78 },
            { name: '台湾', value: 78 },
            { name: '香港', value: 78 },
            { name: '澳门', value: 36 }
        ],
        service: [
            { name: '北京', value: 47 },
            { name: '天津', value: 47 },
            { name: '上海', value: 47 },
            { name: '重庆', value: 47 },
            { name: '河北', value: 47 },
            { name: '安徽', value: 47 },
            { name: '新疆', value: 47 },
            { name: '浙江', value: 47 },
            { name: '江西', value: 21 },
            { name: '山西', value: 21 },
            { name: '内蒙古', value: 30 },
            { name: '吉林', value: 41 },
            { name: '福建', value: 41 },
            { name: '广东', value: 41 },
            { name: '西藏', value: 41 },
            { name: '四川', value: 41 },
            { name: '宁夏', value: 41 },
            { name: '香港', value: 39 },
            { name: '澳门', value: 39 }
        ]
    },
    {
        pie: [
            { value: 355, name: '负载均衡' },
            { value: 200, name: '关系型数据库' },
            { value: 310, name: '对象存储' },
            { value: 235, name: '云磁盘' },
            { value: 200, name: '内容分发' },
            { value: 200, name: '应用引擎' }
        ]
    }
];
/*系统的开发的参数配置文件*/
var sysOption = [
    {
        code: '**sdff555',
        lineTime: '2018-07-02',
        develodTeam: 'Zero',
        evenind: 'Marvin',
        director: 'Marvin',
        status: '良好',
        loophole: '暂无',
        bugTime: '10min'
    }
];
var zoomData = { time: new Date(), data: mock_1.makeArr() };
/*用来发送系统夫人具体的参数的函数*/
app.get('/api/data', function (req, res) {
    res.json(sysData);
});
/*用来发送在线人数*/
app.get('/api/linenumber', function (req, res) {
    // noinspection JSIgnoredPromiseFromCall
    res.json(linenumdatas);
});
/*用来发送所有的系统警告的消息*/
app.get('/api/sysmessage', function (req, res) {
    res.send(systemToke);
});
/*根据具体的id来查找对应的系统警告的消息*/
app.get('/api/sysmessage/:id', function (req, res) {
    // console.log(req.params.id);
    // res.send('666666');
    res.json(systemdatil.find(function (systemdatil) { return systemdatil.id == req.params.id; }));
});
/*用来模拟用户是否对消息进行标记成功*/
app.get('/api/sysmeswrite/:id', function (req, res) {
    console.log(req.params.id);
    res.send(mock_1.trueFalse());
});
/*用来发送系统的地图部分的数据*/
app.get('/api/sysdatamap', function (req, res) {
    res.json(dataSafeMap);
});
/*发送数据分布部分的系统开发信息*/
app.get('/api/sysdevelope', function (req, res) {
    res.json(sysOption);
});
/*发送数据分析页面的数据*/
app.get('/api/syszoomdata', function (req, res) {
    res.json(zoomData);
});
app.get('/api/accountdata', function (req, res) {
    if (req.query.area) {
        // console.log(req.query.area);
        res.json(sysaccount.find(function (sysaccount) { return sysaccount.area == req.query.area; }));
    }
    else {
        console.log('ddd');
    }
});
/*根据条件查询具体的admin的信息*/
app.get('/api/admininfosum', function (req, res) {
    console.log(req.query.id);
    var admindata = [];
    var reach = ['策划', '行政', '公关', '研发一', '研发二', '研发三', '研发四', '设计一', '设计二', '市场一', '市场二', '销售一',
        '销售二', '网络', '秘书处'];
    var age = ['20-25', '26-30', '30-35', '35-40', '40-45', '45-50'];
    // console.log(req.query);
    fs.readFile('mockData/adminuser.json', function (err, data) {
        if (err) {
            console.error(err);
        }
        else {
            var admin = data.toString();
            admin = JSON.parse(admin);
            var length = admin.data.length;
            if (req.query.page) {
                // console.log(req.query.page)
                // (s*p,(p+1)*s);
                var pageadmin = admin.data.slice(10 * ((req.query.page) - 1), (((req.query.page) - 1) + 1) * 10);
                admindata = [
                    {
                        data: pageadmin
                    },
                    {
                        total: length
                    },
                    {
                        reach: reach
                    },
                    {
                        ages: age
                    }
                ];
                res.json(admindata);
            }
            else if (req.query.id) {
                console.log(req.query.id);
                var adminid = (admin.data).filter(function (e) {
                    return e.id == req.query.id;
                });
                res.json(adminid);
            }
            else if (req.query.name) {
                var adminname = (admin.data).filter(function (e) {
                    return e.name == req.query.name;
                });
                res.json(adminname);
            }
            else if (req.query.code) {
                var admincode = (admin.data).filter(function (e) {
                    return e.code == req.query.code;
                });
                res.json(admincode);
            }
            else if ((req.query.age) != -1) {
                var first_1 = req.query.age.substr(0, 2);
                var last_1 = req.query.age.substr(3, 2);
                var adminage = (admin.data).filter(function (e) {
                    return e.age >= first_1 && e.code <= last_1;
                });
                res.json(adminage);
            }
            else if ((req.query.reach) != -1) {
                var adminreach = (admin.data).filter(function (e) {
                    return e.reach == req.query.reach;
                });
                res.json(adminreach);
            }
            else if (req.query.data) {
                var datafirst = req.query.data.substr(0, 4);
                var datalast = req.query.data.substr(7, 2);
                var admindata_1 = (admin.data).filter(function (e) {
                    return (function () {
                    })();
                });
                res.json(admindata_1);
            }
            else if ((req.query.age) != -1 && (req.query.reach) != -1) {
                var adminagereach = (admin.data).filter(function (e) {
                    return e.age == req.query.age && e.reach == req.query.reach;
                });
                res.json(adminagereach);
            }
        }
    });
});
/*删除操作*/
app.get('/api/admindelete', function (req, res) {
    // const result = {status: '',time: ''}
    var id = req.query.id;
    fs.readFile('mockData/adminuser.json', function (err, data) {
        if (err) {
            console.error(err);
            res.json({ status: false, time: new Date().toDateString() });
        }
        var admin = data.toString();
        admin = JSON.parse(admin);
        //把数据读出来删除
        for (var i = 0; i < admin.data.length; i++) {
            if (id == admin.data[i].id) {
                console.log(admin.data[i]);
                admin.data.splice(i, 1);
                //res.json(admin.data[i]);
            }
        }
        admin.total = admin.data.length;
        var str = JSON.stringify(admin);
        //然后再把数据写进去
        fs.writeFile('mockData/adminuser.json', str, function (err) {
            if (err) {
                console.error(err);
                res.json({ status: false, time: new Date().toDateString() });
            }
            fs.readFile('mockData/adminuerdetail.json', function (err, data) {
                if (err) {
                    res.json({ status: false, time: new Date().toDateString() });
                    console.error(err);
                }
                var detail = data.toString();
                detail = JSON.parse(detail);
                for (var i = 0; i < detail.data.length; i++) {
                    if (id == detail.data[i].id) {
                        // console.log(detail.data[i])
                        detail.data.splice(i, 1);
                        //res.json({status: true, time: new Date().toDateString()});
                    }
                }
                detail.total = detail.data.length;
                var strs = JSON.stringify(detail);
                //然后再把数据写进去
                fs.writeFile('mockData/adminuerdetail.json', strs, function (err) {
                    if (err) {
                        res.json({ status: false, time: new Date().toDateString() });
                        console.error(err);
                    }
                    res.json({ status: true, time: new Date().toDateString() });
                });
            });
        });
    });
});
/*具体的查询detail*/
app.get('/api/admindetail', function (req, res) {
    console.log(req.query.id);
    var id = req.query.id;
    if (id) {
        /*读取大致的仍人员信息*/
        fs.readFile('mockData/adminuser.json', function (err, data) {
            if (err) {
                /*读取失败抛出异常*/
                console.error(err);
                res.json({ status: false, time: new Date().toDateString() });
            }
            else {
                /*转化信息为字符串*/
                var admin = data.toString();
                admin = JSON.parse(admin);
                /*具体信息的标题部分*/
                var adminhead_1 = (admin.data).filter(function (e) {
                    return e.id == req.query.id;
                });
                fs.readFile('mockData/adminuerdetail.json', function (err, data) {
                    /*读取具体的信息*/
                    if (err) {
                        res.json({ status: false, time: new Date().toDateString() });
                    }
                    else {
                        /*查询具体的信息*/
                        var admindetail = data.toString();
                        admindetail = JSON.parse(admindetail);
                        /*过滤信息*/
                        var adminde = (admindetail.data).filter(function (e) {
                            return e.id == req.query.id;
                        });
                        // console.log( adminhead[0])
                        // console.log( adminde[0])
                        /*申明一个对象发送数据*/
                        var ress = [adminhead_1[0], adminde[0]];
                        res.json(ress);
                    }
                });
            }
        });
    }
});
/*添加操作*/
app.post('/api/addadmin', function (req, res) {
    //console.log(JSON.stringify(req.body))
    /*post转化返回的数据*/
    var params = JSON.parse(JSON.stringify(req.body)).params;
    fs.readFile('mockData/adminuser.json', function (err, data) {
        if (err) {
            res.json({ status: false, date: new Date() });
        }
        else {
            /*转化信息为字符串*/
            var admin = data.toString();
            admin = JSON.parse(admin);
            var id = mockData.diffId();
            /*声明对象为添加文本做准备*/
            var adminmessage = {
                job: params.job,
                reach: params.reach,
                phone: params.phone,
                star: params.star | 0,
                demerits: params.demerits | 0,
                id: id,
                name: params.name,
                age: params.age | 0,
                sex: params.sex | 0,
                headphoto: params.headphoto,
                Id_no: params.identity,
                date: params.date,
                code: mockData.randomWord(false, 4, 8),
            };
            var admindetail_1 = {
                id: id,
                identity: params.identity,
                address: params.address,
                express: [{ time: '', company: '', item: '', job: '' }],
                demerits: [{ time: '', reason: '', way: '' }],
                deal: params.deal,
                fresh: params.fresh,
            };
            /*push数据*/
            admin.data.push(adminmessage);
            admin.total = admin.total + 1;
            var str = JSON.stringify(admin);
            /*把二进制的数据重新写进文本*/
            fs.writeFile('mockData/adminuser.json', str, function (err) {
                if (err) {
                    res.json({ status: false, date: new Date() });
                }
                else {
                    /*读取具体的信息*/
                    fs.readFile('mockData/adminuerdetail.json', function (err, data) {
                        if (err) {
                            res.json({ status: false, date: new Date() });
                        }
                        else {
                            /*转化为二进制信息*/
                            var detail = data.toString();
                            detail = JSON.parse(detail);
                            detail.data.push(admindetail_1);
                            detail.total = detail.total + 1;
                            var strda = JSON.stringify(detail);
                            /*重新写进数据*/
                            fs.writeFile('mockData/adminuerdetail.json', strda, function (err) {
                                if (err) {
                                    console.error(err);
                                    res.json({ status: false, date: new Date() });
                                }
                                else {
                                    console.log('sssss');
                                    res.json({ status: true, date: new Date() });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});
/*修改操作*/
app.post('/api/adminedit', function (req, res) {
    var params = JSON.parse(JSON.stringify(req.body)).params;
    console.log(params);
    fs.readFile('mockData/adminuser.json', function (err, data) {
        if (err) {
            res.json({ status: false, date: new Date() });
        }
        else {
            /*转化信息为字符串*/
            var admin = data.toString();
            admin = JSON.parse(admin);
        }
    });
});
var server = app.listen(8000, 'localhost', function () {
    //console.log(systemdatil);
});
