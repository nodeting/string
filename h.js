//console.log("111")
var str='hello nodejs'
var charAt=str.charAt(6)//查找给定下标的字符
console.log(charAt)
var indexOf=str.indexOf('l')//查找指定字符下标从前往后
console.log(indexOf)
var lastIndexOf=str.lastIndexOf('o')//查找指定字符下标从后往前
console.log(lastIndexOf)
var substr=str.substr(2,3)//截取 一个参数 从开始到最后
console.log(substr)
var substring=str.substring(2,3)//截取 一个参数 从2开始到3结束
console.log(substring)
var toLowerCase=str.toLowerCase()//转大写
console.log(toLowerCase)
var toUpperCase=str.toUpperCase()//转小写
console.log(toUpperCase)
var slice=str.slice(2)//截取 一个参数 从开始到最后
console.log(slice)
var split=str.split('a')//分割
console.log(split)
var concat=str.concat()//串接
console.log(concat)
var replace=str.replace('l','o')//替换
console.log(replace)
var length=str.length//长度
console.log(length)
var charCodeAt=str.charCodeAt(0);// 查找指定索引相对的Unicode编码 
console.log(charCodeAt)