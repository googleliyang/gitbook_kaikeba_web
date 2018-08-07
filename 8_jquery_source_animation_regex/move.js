// IIFE
(function() {
	var pubArr = [],
		push = pubArr.push,
		slice = pubArr.slice;
	// query支持c3选择器
	// 仿制jquery，select函数返回一个伪数组对象，
	//  然后在该伪数组对象上存储dom元素
	function select(query) {
		return new init(query);
	}
	function init(query){
		var doms = document.querySelectorAll(query);
		// {0: dom1, 1: dom2, length: 2, ...}
		// 伪数组对象的定义：1）length 属性为 0。 2）length>0 必须有length-1索引。
		push.apply(this, doms);
	}

	init.prototype = {
		constructor: init,
		length: 0,
		splice: function () {
			
		}
	}

	// 对外暴露接口
	window._S = select;
})();
