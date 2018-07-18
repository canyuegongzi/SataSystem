///<reference path="localadmin.ts"/>
import * as mockData from './localadmin';
import {AdminUser} from "./class";
function setData() {
  const admin = []
  for (let i = 0; i <= 100;i++) {
    admin[i] = new AdminUser(mockData.get_resach(), mockData.get_resach(), mockData.getMoble(), mockData.get_sta_demerits(), mockData.get_sta_demerits(), mockData.diffId(), mockData.getName(), mockData.get_age(),mockData.get_sex(),'', mockData.getId_no(), mockData.get_data(),mockData.randomWord(false,4,8));
    
  }
  // console.log(admin.length);
  mockData.writeJson(admin, './mockData/adminuser.json', admin.length);
}

setData();
