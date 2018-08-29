//  声明变量
let num  = 1; 

// 变更num
num = 3;
num = 5;
console.log(num); // 5
// 与var的区别在于 如果let声明在 {}里面， 他就是{}的作用域。外部拿不到
// 
// 
const PI = 3.14;
console.log(PI);
// 改变PI的值是不可以的
// PI = 3.15; // Assignment to constant variable.
console.log(PI);


// 常量是一个对象
const obj = { name:'jack'};

// A: Obj本身改变
obj = { name: 'rose'};

// B: obj里面的属性改变
obj.name = 'rose';