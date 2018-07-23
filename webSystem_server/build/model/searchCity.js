"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function SearchCity(name) {
    var code;
    var cityname = name;
    if (!cityname) {
        return false;
    }
    else {
        fs.readFile('mockData/weathercity.json', function (err, data) {
            if (err) {
                console.error(err);
                return false;
            }
            else {
                var city = data.toString();
                city = JSON.parse(city);
                var citydata = (city).filter(function (e) {
                    return e.cityName == cityname;
                });
                code = citydata[0].townID;
            }
            return code;
        });
    }
}
exports.SearchCity = SearchCity;
