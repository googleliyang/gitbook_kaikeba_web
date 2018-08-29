// 一个参数
// let fn = function(num) {
//     return num;
// }
// let fn1 = (num) => {  // 一个参数可以省略小括号
//     return num;
// }
let fn1 = num => {  // 一个参数可以省略小括号
    return num;
}
// 多个参数
// let fn2 = function(n1,n2) {
//     return n1+n2;
// }
let fn2 = (n1,n2) => {  // 多个参数不能省略小括号
    return n1 + n2;
}
// 一行代码
let fn3 = (n1,n2) => n1 + n2; // 等同return n1 + n2;
// 多行代码

let fn4 = (n1,n2) => {  // 多个参数不能省略小括号
    console.log('多行代码执行')
    return n1 + n2;
}


console.log(fn1(1));  // 1
console.log(fn2(1,2)); // 3
console.log(fn3(3,4)); // 7
console.log(fn4(5,5)); // 10