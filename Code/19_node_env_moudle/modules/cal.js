module.exports = {
  add: (a) => (b) => a + b
}
console.log('cal moudle parent is', module.parent) // ....
console.log('cal module id is', module.id) // /Users/liyang/programmer/project/kaikeba/19_node_env_moudle/modules/cal.js
console.log('cal module loaded is', module.loaded) // false
// 有为了防止 exports 被改变 加一句 exports = module.exports = {}
