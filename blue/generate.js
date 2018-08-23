function* show(param) {
  console.log(`get the param is ${param}`)
  let res  = yield 10
  console.log(`res is ${res} in generate`)
  let res1 = yield 100
  console.log(`res1 is ${res1} in generate`)
  return 1000
}

let gen = show()
let r = gen.next(20)
console.log(`get res from generate is`, r)
let r1 = gen.next(30)
console.log(`get res from generate is`, r1)
let r2 = gen.next()
console.log(`generate return is`, r2)


function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
