const fs = require('fs');
export function  SearchCity(name: string) {
  let code: string;
  let cityname: string = name;
  if (!cityname) {
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
          return e.cityName == cityname
        })

       code = citydata[0].townID;

      }
      return code;
    })
  }
}
