import * as express from 'express';
import * as fun from './mock';
const app = express();
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
        data: [58,60,105,250,360,200]
    },
    {
        name: '青年',
        type: 'bar',
        data: [88,20,215,150,260,100]
    },
    {
        name: '中年',
        type: 'bar',
        data: [158,160,15,20,160,150]
    },
    {
        name: '老年',
        type: 'bar',
        data: [258,110,150,280,160,50]
    },
]
const sysstatusdata =  [
  {
    name: '在线人数',
    type: 'line',
    xAyisIndex: 2,
    data: (function (){
       return fun.mockData(500, 0, 9);
    })()
  },
  {
    name: '系统负载',
    type: 'line',
    data: (function (){
      return fun.mockData(80, 30, 9);
    })()
  },
  {
    name: '相应率',
    type: 'line',
    data: (function (){
      return fun.mockData(80, 30, 9);
    })()
  },
  {
    name: '吞吐量',
    type: 'line',
    data: (function (){
      return fun.mockData(80, 30, 9);
    })()
  },
  {
    name: '资源使用',
    type: 'line',
    data: (function (){
      return fun.mockData(80, 30, 9);
    })()
  }
]
app.get('/',(req,res) => {
    res.send('ssssss');
});
app.get('/api/linenumber',(req,res) => {
    res.send(linenumdatas);
})
app.get('/api/stausnumber', (req,res) => {
    res.send(sysstatusdata);
})
const server = app.listen(8000,'localhost',() => {
    // console.log('服务器已启动。地址是localhost:8000')
})
