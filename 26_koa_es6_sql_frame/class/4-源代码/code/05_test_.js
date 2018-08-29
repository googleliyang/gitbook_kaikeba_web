// 对象的解构赋值
let obj = {a:1,b:2};

// 从obj中获取a
let { a } = obj;  //  对象的解构赋值，关键是key
console.log(a);


// 数组的解构赋值
let arr = [1,2,3,4];

let [n1,,,n4] = arr;  //  数组的解构赋值，关键是顺序
console.log(n1,n4)