import * as express from 'express';
import * as fun from './mock';
import bodyParser = require('body-parser');
import {DetailMessage, makeArr, SysDetail, SysWriteData, trueFalse} from "./mock";
import * as mockData from '../model/localadmin';
import {SearchCity} from '../model/searchCity';
import * as moment from "moment";
import _quarter = moment.unitOfTime._quarter;
import * as register from './volidMessage';
import * as location from './locationip';
const app = express();
const fs = require('fs');
const request = require('request');

const http = require('http');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/*短信验证的号码*/
let phoneCode: any;
/*在线人数信息*/
const linenumdatas = [
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
]
/*系统信息指标*/
const sysData = fun.Makedata(5);
/*系统警告*/
const systemToke = [
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
const systemdatil: SysDetail[] = [
  new SysDetail(5, 2017, 5, 'A1', true, 'marvin', 'xxx', '我也不知道啥原因', '没查出原因来'),
  new SysDetail(2, 2016, 7, 'A1', true, 'marvin', 'xxx', '你问我我哪儿知道', '没啥意见'),
  new SysDetail(1, 2015, 7, 'A1', true, 'marvin', 'xxx', '不知道', '不知道'),
];
/*系统解析文件配*/
const sysaccount: SysWriteData[] = [
  new SysWriteData('东北', 20, 102, false, 0.2, 0.4, 0.9, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('华北', 32, 402, true, 0.4, 0.58, 0.8, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('西北', 46, 982, true, 0.45, 0.47, 0.5, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('西南', 54, 412, false, 0.89, 0.59, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('华南', 66, 582, true, 0.45, 0.36, 0.2, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('华中', 10, 252, false, 0.14, 0.7, 0.1, 'xxxxxxxxxxxxxxxxxxxxxx'),
  new SysWriteData('华东', 2780, 402, true, 0.258, 0.99, 0.4, 'xxxxxxxxxxxxxxxxxxxxxx'),
]
/*系统的分布的具体信息的配置文件*/
const dataSafeMap = [
  {
    media: [
      {name: '北京', value: 11},
      {name: '天津', value: 11},
      {name: '上海', value: 11},
      {name: '重庆', value: 11},
      {name: '河北', value: 11},
      {name: '河南', value: 11},
      {name: '云南', value: 11},
      {name: '辽宁', value: 11},
      {name: '黑龙江', value: 44},
      {name: '湖南', value: 47},
      {name: '安徽', value: 47},
      {name: '山东', value: 47},
      {name: '新疆', value: 47},
      {name: '江苏', value: 47},
      {name: '浙江', value: 47},
      {name: '江西', value: 47},
      {name: '湖北', value: 47},
      {name: '广西', value: 47},
      {name: '甘肃', value: 47},
      {name: '山西', value: 47},
      {name: '内蒙古', value: 21},
      {name: '陕西', value: 32},
      {name: '吉林', value: 32},
      {name: '福建', value: 32},
      {name: '贵州', value: 32},
      {name: '广东', value: 32},
      {name: '青海', value: 32},
      {name: '西藏', value: 32},
      {name: '四川', value: 32},
      {name: '宁夏', value: 32},
      {name: '海南', value: 32},
      {name: '台湾', value: 32},
      {name: '香港', value: 32},
      {name: '澳门', value: 87}
    ],
    memory: [

      {name: '北京', value: 78},
      {name: '天津', value: 78},
      {name: '上海', value: 78},
      {name: '广东', value: 78},
      {name: '台湾', value: 78},
      {name: '香港', value: 78},
      {name: '澳门', value: 36}
    ],
    service: [
      {name: '北京', value: 47},
      {name: '天津', value: 47},
      {name: '上海', value: 47},
      {name: '重庆', value: 47},
      {name: '河北', value: 47},
      {name: '安徽', value: 47},
      {name: '新疆', value: 47},
      {name: '浙江', value: 47},
      {name: '江西', value: 21},
      {name: '山西', value: 21},
      {name: '内蒙古', value: 30},
      {name: '吉林', value: 41},
      {name: '福建', value: 41},
      {name: '广东', value: 41},
      {name: '西藏', value: 41},
      {name: '四川', value: 41},
      {name: '宁夏', value: 41},
      {name: '香港', value: 39},
      {name: '澳门', value: 39}
    ]
  },
  {
    pie: [
      {value: 355, name: '负载均衡'},
      {value: 200, name: '关系型数据库'},
      {value: 310, name: '对象存储'},
      {value: 235, name: '云磁盘'},
      {value: 200, name: '内容分发'},
      {value: 200, name: '应用引擎'}
    ]
  }
];
/*系统的开发的参数配置文件*/
const sysOption = [
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
]
const zoomData = {time: new Date(), data: makeArr()}
/*用来发送系统夫人具体的参数的函数*/
app.get('/api/data', (req, res) => {
  res.json(sysData);
});
/*用来发送在线人数*/
app.get('/api/linenumber', (req, res) => {
  // noinspection JSIgnoredPromiseFromCall
  res.json(linenumdatas);
})
/*用来发送所有的系统警告的消息*/
app.get('/api/sysmessage', (req, res) => {

  res.send(systemToke);
})
/*根据具体的id来查找对应的系统警告的消息*/
app.get('/api/sysmessage/:id', (req, res) => {
  // console.log(req.params.id);
  // res.send('666666');
  res.json(systemdatil.find((systemdatil) => systemdatil.id == req.params.id));
});
/*用来模拟用户是否对消息进行标记成功*/
app.get('/api/sysmeswrite/:id', (req, res) => {
  console.log(req.params.id);
  res.send(trueFalse());
});
/*用来发送系统的地图部分的数据*/
app.get('/api/sysdatamap', (req, res) => {
  res.json(dataSafeMap)
});
/*发送数据分布部分的系统开发信息*/
app.get('/api/sysdevelope', (req, res) => {
  res.json(sysOption)
});
/*发送数据分析页面的数据*/
app.get('/api/syszoomdata', (req, res) => {
  res.json(zoomData)
});
app.get('/api/accountdata', (req, res) => {
  if (req.query.area) {
    // console.log(req.query.area);
    res.json(sysaccount.find((sysaccount) => sysaccount.area == req.query.area));
  } else {
    console.log('ddd');
  }
});
/*根据条件查询具体的admin的信息*/
app.get('/api/admininfosum', (req, res) => {
  console.log(req.query.id);
  let admindata = []
  let reach = ['策划', '行政', '公关', '研发一', '研发二', '研发三', '研发四', '设计一', '设计二', '市场一', '市场二', '销售一',
    '销售二', '网络', '秘书处'];
  let age = ['20-25', '26-30', '30-35', '35-40', '40-45', '45-50']
  // console.log(req.query);
  fs.readFile('mockData/adminuser.json', function (err, data) {
    if (err) {
      console.error(err);
    } else {
      let admin = data.toString();
      admin = JSON.parse(admin);
      let length = admin.data.length;
      if (req.query.page) {
        // console.log(req.query.page)
        // (s*p,(p+1)*s);
        let pageadmin = admin.data.slice(10 * ((req.query.page) - 1), (((req.query.page) - 1) + 1) * 10);
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
        ]
        res.json(admindata);
      }
      else if (req.query.id) {
        console.log(req.query.id)
        let adminid = (admin.data).filter(function (e) {
          return e.id == req.query.id
        })
        res.json(adminid);
      }
      else if (req.query.name) {
        let adminname = (admin.data).filter(function (e) {
          return e.name == req.query.name;
        })
        res.json(adminname);
      }
      else if (req.query.code) {
        let admincode = (admin.data).filter(function (e) {
          return e.code == req.query.code;
        })
        res.json(admincode);
      }
      else if ((req.query.age) != -1) {
        let first = req.query.age.substr(0, 2);
        let last = req.query.age.substr(3, 2);
        let adminage = (admin.data).filter(function (e) {
          return e.age >= first && e.code <= last
        })
        res.json(adminage);
      }
      else if ((req.query.reach) != -1) {
        let adminreach = (admin.data).filter(function (e) {
          return e.reach == req.query.reach
        })
        res.json(adminreach);
      }
      else if (req.query.data) {
        let datafirst = req.query.data.substr(0, 4);
        let datalast = req.query.data.substr(7, 2);
        let admindata = (admin.data).filter(function (e) {
          return (function () {
          })()
        })
        res.json(admindata);
      }
      else if ((req.query.age) != -1 && (req.query.reach) != -1) {
        let adminagereach = (admin.data).filter(function (e) {
          return e.age == req.query.age && e.reach == req.query.reach
        })
        res.json(adminagereach);
      }
    }
  })
});
/*删除操作*/
app.get('/api/admindelete', (req, res) => {
  // const result = {status: '',time: ''}
  let id = req.query.id;
  fs.readFile('mockData/adminuser.json', function (err, data) {
    if (err) {
      console.error(err);
      res.json({status: false, time: new Date().toDateString()});
    }
    let admin = data.toString();
    admin = JSON.parse(admin);
    //把数据读出来删除
    for (let i = 0; i < admin.data.length; i++) {
      if (id == admin.data[i].id) {
        console.log(admin.data[i])
        admin.data.splice(i, 1);
        //res.json(admin.data[i]);
      }
    }
    admin.total = admin.data.length;
    let str = JSON.stringify(admin);
    //然后再把数据写进去
    fs.writeFile('mockData/adminuser.json', str, function (err) {
      if (err) {
        console.error(err);
        res.json({status: false, time: new Date().toDateString()});
      }
      fs.readFile('mockData/adminuerdetail.json', function (err, data) {
        if (err) {
          res.json({status: false, time: new Date().toDateString()});
          console.error(err);
        }
        let detail = data.toString();
        detail = JSON.parse(detail);
        for (let i = 0; i < detail.data.length; i++) {
          if (id == detail.data[i].id) {
            // console.log(detail.data[i])
            detail.data.splice(i, 1);
            //res.json({status: true, time: new Date().toDateString()});
          }
        }
        detail.total = detail.data.length;
        let strs = JSON.stringify(detail);
        //然后再把数据写进去
        fs.writeFile('mockData/adminuerdetail.json', strs, function (err) {
          if (err) {
            res.json({status: false, time: new Date().toDateString()});
            console.error(err);
          }
          res.json({status: true, time: new Date().toDateString()});
        })

      });
    })
  })
});
/*具体的查询detail*/
app.get('/api/admindetail', (req,res) => {
  // console.log(req.query.id);
  let id = req.query.id;
  if (id) {
    /*读取大致的仍人员信息*/
    fs.readFile('mockData/adminuser.json', function (err, data) {
      if (err) {
        /*读取失败抛出异常*/
        console.error(err)
        res.json({status: false, time: new Date().toDateString()})
      } else {
        /*转化信息为字符串*/
        let admin = data.toString();
        admin = JSON.parse(admin);
        /*具体信息的标题部分*/
        let adminhead = (admin.data).filter(function (e) {
          return e.id == req.query.id
        })
        fs.readFile('mockData/adminuerdetail.json', function (err,data) {
          /*读取具体的信息*/
          if(err) {
            res.json({status: false, time: new Date().toDateString()})
          }else {
            /*查询具体的信息*/
            let admindetail = data.toString();
            admindetail = JSON.parse(admindetail);
            /*过滤信息*/
            let adminde = (admindetail.data).filter(function (e) {
              return e.id == req.query.id;
            })
            // console.log( adminhead[0])
            // console.log( adminde[0])
            /*申明一个对象发送数据*/
            const ress = [adminhead[0],adminde[0]]

            res.json(ress);
          }
        });
      }
    })
  }
})
/*添加操作*/
app.post('/api/addadmin', (req, res) => {
  //console.log(JSON.stringify(req.body))
  /*post转化返回的数据*/
  const params = JSON.parse(JSON.stringify(req.body)).params;
  fs.readFile('mockData/adminuser.json', function (err, data) {

    if(err) {
      res.json({status: false, date: new Date()})
    } else {
      /*转化信息为字符串*/
      let admin = data.toString();
      admin = JSON.parse(admin);
      const id =  mockData.diffId();
      /*声明对象为添加文本做准备*/
      const adminmessage = {
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
        code: mockData.randomWord(false,4,8),

        }
      const admindetail = {
       id: id,
       identity: params.identity,
       address: params.address ,
       express: [{time: '', company: '', item: '', job: ''}],
       demerits: [{time: '', reason: '', way: ''}],
       deal: params.deal,
       fresh: params.fresh,
     }
     /*push数据*/
      admin.data.push(adminmessage);
      admin.total = admin.total +1;
      let  str = JSON.stringify(admin);
      /*把二进制的数据重新写进文本*/
      fs.writeFile('mockData/adminuser.json',str,function(err){
        if (err) {
          res.json({status: false, date: new Date()});
        } else {
          /*读取具体的信息*/
          fs.readFile('mockData/adminuerdetail.json', function (err, data) {
            if(err) {
              res.json({status: false, date: new Date()})
            }else {
              /*转化为二进制信息*/
              let detail = data.toString();
              detail = JSON.parse(detail);
              detail.data.push( admindetail);
              detail.total = detail.total +1;
              let strda = JSON.stringify(detail);
              /*重新写进数据*/
              fs.writeFile('mockData/adminuerdetail.json',strda,function(err){
                if(err) {
                  console.error(err);
                  res.json({status: false, date: new Date()});
                }else {
                  console.log('sssss');
                  res.json({status: true, date: new Date()});
                }
              })
            }
          })
        }
      })
    }
  })





})
/*修改操作*/
app.post('/api/adminedit', (req, res) =>{
  const params = JSON.parse(JSON.stringify(req.body)).params;
  console.log(params);
  fs.readFile('mockData/adminuser.json', function (err, data) {
    if(err) {
      res.json({status: false, date: new Date()})
    } else {
      /*转化信息为字符串*/
      let admin = data.toString();
      admin = JSON.parse(admin);
      for(let i = 0; i < admin.data.length;i++){
        if(params.id == admin.data[i].id){
          console.log('id一样的');
          for(var key in params){
            if(admin.data[i][key]){
              admin.data[i][key] = params[key];
            }
          }
        }
      }
      admin.total = admin.data.length;
      var str = JSON.stringify(admin);
      //console.log(str);
      fs.writeFile('mockData/adminuser.json', str,function(err){
        if(err){
          res.json({status: false, date: new Date()});
          console.error(err);
        }
        // console.log('--------------------修改成功');
        // console.log(admin.data);
        fs.readFile('mockData/adminuerdetail.json', function (err, data) {
          if (err) {
            res.json({status: false, date: new Date()})
          } else{
            let admindetail = data.toString();
            admindetail = JSON.parse(admindetail);
            for(let j = 0; j < admindetail.data.length;j++){
              if(params.id == admindetail.data[j].id){
                // console.log('id一样的');
                for(var key in params){
                  if(admindetail.data[j][key]){
                    admindetail.data[j][key] = params[key];
                  }
                }
              }
            }
            admindetail.total = admindetail.data.length;
            var str1 = JSON.stringify(admindetail);
            //console.log(str);
            fs.writeFile('mockData/adminuerdetail.json', str1,function(err){
              if(err){
                res.json({status: false, date: new Date()});
                console.error(err);
              }
                else {
                res.json({status: true, date: new Date()});
                console.log('ssss');
              }
            })
          }
        })
      })
    }
  })
})
app.post('/api/adminroot', (req, res) => {
  const params = JSON.parse(JSON.stringify(req.body)).params;
  console.log(params);
  fs.readFile('mockData/adminuser.json', function (err, data) {
    if(err) {
      res.json({status: false, date: new Date()})
    } else {
      let admin = data.toString();
      admin = JSON.parse(admin);
      let adminroot = (admin.data).filter(function (e) {
        return e.id == params.id;
      })
      if (adminroot[0].root == params.root) {
        res.json({status: false, date: new Date()});
      }else {
        adminroot[0].root = params.root;
      }
      // console.log(adminroot[0].root);
      let str = JSON.stringify(admin);
      fs.writeFile('mockData/adminuser.json', str,function(err){
        if(err){
          res.json({status: false, date: new Date()});
          console.error(err);
        }
        else {
          res.json({status: true, date: new Date()});
          console.log('权限修改成功');
        }

      })
    }
  })
})
/*获取或有的公司简介*/
app.get('/api/company', (req,res) => {
  fs.readFile('mockData/company.json', function (err, data) {
    if (err) {
      console.error(err);
    } else {
      // console.log('1111')
      let company = data.toString();
      company = JSON.parse(company);
      let length = company.data.length;
      // console.log(company);

      if (req.query.name) {
        console.log(req.query.name);
        let onecompany = (company.data).filter(function (e) {
          return e.name == req.query.name;
        })
        // console.log(req)
        res.send({data:onecompany,total: length});
      } else if (req.query.page) {
        let companys = company.data.slice(10 * ((req.query.page) - 1), (((req.query.page) - 1) + 1) * 10);
        res.send({data: companys, total: length});
      } else {
        res.send({data:company, total: length})
      }
    }
  })
})
/*查询当前登录用户*/
app.get('/api/user', (req,res) =>{

  let id = req.query.id;
  let name= req.query.name;

  if (!id && !name) {
    res.send({status: false, date: new Date()})
  } else {
    fs.readFile('mockData/user.json', function (err, data) {
      if (err) {
        console.error(err);
        res.send({status: false, date: new Date()})
      } else {
        let user = data.toString();
        user = JSON.parse(user);
        let userdetail = (user.data).filter(function (e) {
          return e.name == name && e.id == id;
        })
        res.json(userdetail);
      }
    })
  }

})
/*修改的 登录的用户的信息*/
app.post('/api/edituser', (req,res) => {
  const params = JSON.parse(JSON.stringify(req.body)).params;
  //console.log(params);

  fs.readFile('mockData/user.json', function (err, data) {
    if(err) {
      res.json({status: false, date: new Date()})
    } else {
      let userdetail = data.toString();
      userdetail = JSON.parse(userdetail);
      for(let i = 0; i < userdetail.data.length;i++){
        if(params.id == userdetail.data[i].id){
            //console.log('sssss');
            userdetail.data[i] = params;

            /*不知啥原因，通过遍历共同的对象的方式再次修改的方式行不通*/
          /*for(var key in params){
            // console.log(key)
            if(userdetail.data[i][key]){
              userdetail.data[i].key = params.key;
            }
          }*/
        }
      }
      userdetail.total = userdetail.data.length;
      var str = JSON.stringify(userdetail);
      //console.log(str);
      fs.writeFile('mockData/user.json', str,function(err){
        if(err){
          res.json({status: false, date: new Date()});
          console.error(err);
          } else {
          res.json({status: true, date: new Date()})
        }
      });
    }
  })
  })
/*修改密码*/
app.post('/api/editpass', (req, res) =>{
  const params = JSON.parse(JSON.stringify(req.body)).params;
  console.log(params);
  if (params.oldpass == params.newpass) {
    res.send({status: 'same', date: new Date()})
  } else {
    fs.readFile('mockData/userpassword.json', function (err, data) {
    if(err) {
      res.send({status: false, date: new Date()})
    } else {
      let userpass = data.toString();
      userpass = JSON.parse(userpass);

      for(let i = 0; i < userpass.data.length;i++){
        if(params.id == userpass.data[i].id){

          if (userpass.data[i].password != params.oldpass) {
           return res.send({status: 'different', date: new Date()})
          } else {
            userpass.data[i].password =  params.newpass;
            userpass.data[i].name =  params.name;
          }
        }
      }
      userpass.total = userpass.data.length;
      var str = JSON.stringify(userpass);
      fs.writeFile('mockData/userpassword.json', str,function(err){
        if(err){
          res.send({status: false, date: new Date()});
          console.error(err);
        } else {
          res.send({status: true, date: new Date()})
        }
      });

    }})
  }
});
/*查询天气*/
app.post('/api/weather', (req,res) => {
  const params = JSON.parse(JSON.stringify(req.body)).params;
  // let city = SearchCity(params);
  // console.log(params);
  //console.log(city);
  let citycode: string;
  // console.log(params);
  if (!params) {
    return false;
  } else {

    fs.readFile('mockData/weathercity.json', function (err, data) {
      if (err) {
        console.error(err);
        return false;
      } else {
        let city = data.toString();
        city = JSON.parse(city);
        let citydata = (city).filter(function (e) {
          return e.city == params
        })
        citycode = citydata[0].cityid;


        const e =request(
          {url:'http://aider.meizu.com/app/weather/listWeather?cityIds='+citycode+'',
          method:'GET',
          headers:{'Content-Type':'text/json' }
        },
          function(error,response,body){
          if(!error && response.statusCode == 200){
            // console.log(JSON.parse(body));
            res.send({'data':JSON.parse(body) } );
          }
        });
      }
    })
  }
})

/*处理快递的请求*/
app.get('/api/express',(req,res) => {
  let expressname: string;
  let number: string = req.query.number;
  switch(req.query.name)
  {
    case '顺丰快递':
      expressname = 'shunfeng';
      break;
    case '中通快递':
      expressname = 'zhongtong';
      break ;
    case '邮政快递':
      expressname = 'youzhengguonei';
      break;
    case '优速快递':
      expressname = 'youshuwuliu';
      break;
    case '申通快递':
      expressname = 'shentong';
      break;
    case '圆通快递':
      expressname = 'yuantong';
      break;
    case '韵达快递':
      expressname = 'yunda';
      break;
    default:
  }

  // let url = 'https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury?cb=jQuery110204759692032715892_1499865778178&appid=4001&com=&nu='+number+'';
  let url = 'https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/channel/data/asyncqury?cb=?';
  console.log(expressname);
  const e =request(
    {url: url,
      method:'GET',
      headers:{'Content-Type':'text/json' },
      data: {com:expressname,nu:number,appid:4001}
    },
    function(error,response,body){
      if(!error && response.statusCode == 200){
        console.log(JSON.parse(body));
        // res.json({'data':JSON.parse(body) } );
      }
    });
});
/*处理登录*/
app.post('/api/login', (req,res) =>{
  const params = JSON.parse(JSON.stringify(req.body)).params;
  const ip = location.getClientIp(req);
  console.log(params);
  if (!params.protocol) {
    res.json({status: false, date: new Date()});
  } else {
    fs.readFile('mockData/userpassword.json', function (err, data) {
      if (err) {
        res.json({status: false, date: new Date()});
      }
      let user = data.toString();
      user = JSON.parse(user);
      let loginmes = (user.data).filter(function (e) {
        return e.name == params.phone && e.password == params.password;
      })
      // console.log(loginmes[0].name);
      console.log(loginmes);
      if (loginmes == '') {
        res.json({status: false, date: new Date()});
      } else {

        fs.readFile('mockData/loginlog.json', function (err, data) {

          if(err) {
            res.json({status: false, date: new Date()});
            return;
          } else {
            let loginlog = data.toString();
            loginlog = JSON.parse(loginlog);

            let loginuser = (loginlog.data).filter(function (e) {
              return e.name == params.phone;
            })
            /*dui日志操作*/

            loginuser[0].log.push({ip: ip, desc: "登陆成功", date: new Date() })
            loginuser[0].total = loginuser[0].total + 1;
            // loginlog.total = loginlog.total+1;
            let str3 = JSON.stringify(loginlog);
            fs.writeFile('mockData/loginlog.json',str3,function(err){
              if (err) {
                res.json({status: false, date: new Date()});
                return;
              }else {
                res.json({status: true, date: new Date(), data: loginmes, ip: ip});
              }
            })
          }
        })
      }
    })
  }
})
/*发送短信*/
app.post('/api/regnumber', (req, res) => {
  const params = JSON.parse(JSON.stringify(req.body)).params;
  console.log(params);
  phoneCode = register.makeCode();
  register.sendMessage(params, phoneCode);
})
/*处理注册*/
app.post('/api/register', (req, res) =>{
  const params = JSON.parse(JSON.stringify(req.body)).params;
  //console.log(params);
  //console.log(phoneCode);

  if (phoneCode != params.message) {
    res.json({status: 'message', date: new Date()});
    return;
  } else {
    fs.readFile('mockData/userpassword.json', function (err, data) {

      if(err) {
        res.json({status: false, date: new Date()});
        return;
      } else {
        let newuser = data.toString();
        newuser = JSON.parse(newuser);
        let userid =  mockData.diffId();
        let olduser = (newuser.data).filter(function (e) {
          return e.name == params.phone;
        });
        if (olduser != []) {
          res.json({status: 'same', date: new Date()})
          return;
        } else {
          const userDetail = {
            name: params.phone,
            password: params.password,
            id: userid
          };
          const userdesc = {
            name: params.phone,
            id: userid,
            birthday: "",
            date: "",
            root: 1,
            phone: params.phone,
            address: "",
            desc: "",
            sex: 1,
            job: "",
            headphoto: ""
          };
          /*push数据*/
          newuser.data.push(userDetail);
          newuser.total = newuser.total +1;
          let  str = JSON.stringify(newuser);

          fs.writeFile('mockData/userpassword.json',str,function(err){
            if (err) {
              res.json({status: false, date: new Date()});
              return;
            } else {

              fs.readFile('mockData/user.json', function (err, data) {

                  if(err) {
                    res.json({status: false, date: new Date()});
                    return;
                  }
                  let newuserdesc = data.toString();
                  newuserdesc = JSON.parse(newuserdesc);
                  newuserdesc.data.push(userdesc);
                  newuserdesc.total = newuserdesc.total +1;
                  let  str1 = JSON.stringify(newuserdesc);

                  fs.writeFile('mockData/user.json',str1,function(err){
                    if (err) {
                      res.json({status: false, date: new Date()});
                      return;
                    }
                    res.json({status: true, date: new Date()});
                  })

                }
              )


            }


          })
        }


      }



    })
  }
});
/*获取操作日志的处理*/
app.get('/api/loginlog', (req, res) => {
  /*前台传参格式写成了数组*/
  const  id = req.query[0];
  const  name = req.query[1];
  const page = req.query[2];
  fs.readFile('mockData/loginlog.json', function (err, data) {
    if (err) {
      res.json({status: false, date: new Date()});
    }
      let log = data.toString();
      log = JSON.parse(log);
    let userlog = (log.data).filter(function (e) {
      return e.name == name;
    })
   //console.log(userlog[0].log)
    let loginlogone = userlog[0].log.slice(10 * ((page) - 1), (((page) - 1) + 1) * 10);
    //console.log(loginlogone);
    res.json(loginlogone);
  })

  }
)
const server = app.listen(8000, 'localhost', () => {
});
