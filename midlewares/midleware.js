/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/

let clientInfo = {};
//New

const saver = require('../utils/json');
const verifyModel = require('../models/verifyModel');
var atob = require('atob');

let imagePath = '';
exports.resData = async (proxyRes,req,res) => {
    let test = ''

 
 let resArr = [];
    proxyRes.headers.callback= atob(saver.get().callback);
    proxyRes.headers.registerCallback =atob(saver.getRegister().callback);
    proxyRes.headers.deleteCallback = atob(saver.getDelete().callback);
}
exports.requestData = (proxyReq,req,res) => {
console.log('redgds df')
    //console.log(req)
}