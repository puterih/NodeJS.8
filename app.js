// Validator adalah sebuah package yg mempermudah untuk melakukan validasi (verifikasi/pembuktian)
const validator = require("validator");
// Npm chalk(kapur) untuk mewarnai terminal/ menghias terminal sehingga menjadi warna warni.
const chalk = require("chalk");

// console.log(validator.isEmail("husnulputeri@gmail.com"));
// console.log(validator.isMobilePhone("088276557813", "id-ID"));
// console.log(validator.isNumeric("1234567890"));

// console.log(chalk.black.bgBlue("Hello World!"));
const nama = "Puteri Hsunul";
const pesan = chalk`Lorem ipsum dolor {bgCyan.white.bold sit amet} consectetur {bgYellow.italic.black adipisicing} elit. Nama saya : ${nama}`;
console.log(pesan);
