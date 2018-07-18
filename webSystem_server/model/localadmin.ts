/*本地json操作，所有params均为对象格式*/
const fs = require('fs');
/*对本地json文件的操作*/
const moment = require('moment');
 export function writeJson(params ,path , num){
  //现将json文件读出来
  fs.readFile(path,function(err,data){
    if(err){
      return console.error(err);
    }
    let person = data.toString();//将二进制的数据转换为字符串
    person = JSON.parse(person);//将字符串转换为json对象
    person.data.push(params);//将传来的对象push进数组对象中
    person.total = num;//定义一下总条数，为以后的分页打基础
    console.log(person.data);
    let  str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile(path,str,function(err){
      if(err){
        console.error(err);
      }
      console.log('----------新增成功-------------');
    })
  })
}
/*删除操作*/
export function deleteJson(id, path){
  fs.readFile(path, function(err,data){
    if(err){
      return console.error(err);
    }
    let person = data.toString();
    person = JSON.parse(person);
    //把数据读出来删除
    for(let i = 0; i < person.data.length;i++){
      if(id == person.data[i].id){
        //console.log(person.data[i])
        person.data.splice(i,1);
      }
    }
    console.log(person.data);
    person.total = person.data.length;
    let str = JSON.stringify(person);
    //然后再把数据写进去
    fs.writeFile(path, str,function(err){
      if(err){
        console.error(err);
      }
      console.log("----------删除成功------------");
    })
  })
}
/*修改*/
export function changeJson(id,params, path){
  fs.readFile(path, function(err,data){
    if(err){
      console.error(err);
    }
    var person = data.toString();
    person = JSON.parse(person);
    //把数据读出来,然后进行修改
    for(let i = 0; i < person.data.length;i++){
      if(id == person.data[i].id){
        console.log('id一样的');
        for(var key in params){
          if(person.data[i][key]){
            person.data[i][key] = params[key];
          }
        }
      }
    }
    person.total = person.data.length;
    var str = JSON.stringify(person);
    //console.log(str);
    fs.writeFile(path, str,function(err){
      if(err){
        console.error(err);
      }
      console.log('--------------------修改成功');
      console.log(person.data);
    })
  })
}
/*查找，第一个参数为查询的页数，第二个为每夜的数量*/
export function pagination(p,s, path){
  //p为页数，比如第一页传0，第二页传1,s为每页多少条数据
  fs.readFile(path,function(err,data){
    if(err){
      console.error(err);
    }
    let person = data.toString();
    person = JSON.parse(person);
    //把数据读出来
    //console.log(person.data);
    let length = person.data.length;
    let pagePerson = person.data.slice(s*p,(p+1)*s);
    console.log('------------------------查询成功pagePerson');
    // console.log(pagePerson);
  })
}
/*随机生成不重复的id*/
export function diffId() {
  const date = new Date();
  const num = date.getTime()
  return num;
}
/*随机生产编号*/
/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/

export function randomWord(randomFlag, min, max){
  let str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if(randomFlag){
    range = Math.round(Math.random() * (max-min)) + min;
  }
  for(let  i=0; i<range; i++){
    let pos = Math.round(Math.random() * (arr.length-1));
    str += arr[pos];
  }
  return str;
}
export function getName(){
  let  familyNames = new Array(
    "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
    "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
    "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
    "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
    "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
    "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
  );
  let givenNames = new Array(
    "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
    "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
    "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
    "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
    "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
    "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
    "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
    "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
    "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
    "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
  );
  let m= Math.round(Math.random() * 99 + 1);
  let familyName = familyNames[m];
  let j = Math.round(Math.random() * 109 + 1);
  let givenName = givenNames[j];
  let name = familyName + givenName;
  return name;
}
/*随机产生手机号*/
export function getMoble() {

  const prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
  let m = Math.round(10 * Math.random());
  let prefix = prefixArray[m];

  for (let j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix;
}
/*随机产生省份证*/
export function getId_no(){
  let coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// 加权因子
  let lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// 校验码
  let address = "420101"; // 住址
  let birthday = "19810101"; // 生日
  let s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
  let array = (address + birthday + s).split("");
  var total = 0;
  for(let i in array){
    total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
  }
  let lastNumber = lastNumberArray[Math.round(total%11)];
  let id_no_String = address + birthday + s + lastNumber;
  return id_no_String;
}
/*随机分配所属部门*/
export function get_resach() {
  let reach = ['策划', '行政', '公关', '研发一', '研发二', '研发三','研发四', '设计一', '设计二', '市场一', '市场二', '销售一', 
    '销售二', '网络', '秘书处'];
  let i = Math.round(Math.random()* 14 + 1);
  const res = reach[i];
  return res;
}
/*随机产生日期*/
export function get_data() {
  let res;
  let date = new Date()
  res = moment(date).format("YYYY-MM-DD")
  // console.log(date)
  return res;
}
/*随机产生star*/
export function get_sta_demerits() {
  let res = Math.round(Math.random()*5);
  return res;
}
/*getage*/
export function get_age() {
  let res = Math.round(Math.random() * 30 +20);
  return res
}
/*getsex*/
export function get_sex() {
  let res = Math.round(Math.random());
  console.log(res);
  return res;
}

export function getAdminSum(path) {
  let res: any;
  fs.readFile(path, function(err, data) {
    if(err) {
      console.error(err);
    }else {
      res = JSON.parse(data.toString());
    }
    // console.log(res)
    return res;
  });
  return res;
};
