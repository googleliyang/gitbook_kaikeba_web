const cal = require('./modules/cal')
let sum = cal.add(2)
console.log(`sum is ${sum(2)}`)
// console.log('__main__ is', __main__)
console.log('filename is', __filename) // /Users/liyang/programmer/project/kaikeba/19_node_env_moudle/app.js
console.log('dirname is', __dirname) // /Users/liyang/programmer/project/kaikeba/19_node_env_moudle
console.log('module id is', module.id)  // .
console.log('module loaded is', module.loaded) // false
console.log('module parent is', module.parent) // null
