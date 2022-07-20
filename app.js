// Validator adalah sebuah package yg mempermudah untuk melakukan validasi (verifikasi/pembuktian)
const validator = require("validator");

console.log(validator.isEmail("husnulputeri@gmail.com"));
console.log(validator.isMobilePhone("088276557813", "id-ID"));
console.log(validator.isNumeric("1234567890"));
