var env = (function () {

	function Person () {
		this.run = function () {
			return console.log('I can run')
		}
		this.think = function () {
			return  console.log('I can think')
		}
	}

	function Pastor () {
		this.action = function () {
			console.log('I can treat')
		}
	}

	function Women () {
		this.sex = 'women'
		this.special = function () {
			console.log('I can make i baby')
		}
	}

	var person = new Person()
	Women.prototype = person
	var sansa = new Women()

	function test () {
		console.log('can I run ?')
		sansa.run()
		console.log('can I think ?')
		sansa.think()
		console.log('if sansa proto equal person', sansa.__proto__ === person)
	}

	function func_proto () {
		// Attension: if Array call __proto__ mean here Array is a Object, such as all is Object in js.
		// Function also a object that __proto__ assign Function.prototype.
		return Array.__proto__ === Function.prototype
	}


	function main() {
		test()
		console.log('func proto', func_proto())
	}

	main()

})()
