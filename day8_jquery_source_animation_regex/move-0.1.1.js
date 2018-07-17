// IIFE
(function() {
	var pubArr = [],
		push = pubArr.push,
		slice = pubArr.slice;
	// query支持c3选择器
	// 仿制jquery，select函数返回一个伪数组对象，
	//  然后在该伪数组对象上存储dom元素
	function select(query) {
		return new select.prototype.init(query);
	}
	select.prototype = {
		length: 0,
		splice: function () {
			
		}
	}

	var init = select.prototype.init = function (query){
		var doms = document.querySelectorAll(query);
		// {0: dom1, 1: dom2, length: 2, ...}
		// 伪数组对象的定义：1）length 属性为 0。 2）length>0 必须有length-1索引。
		push.apply(this, doms);
	}

	select.fn = init.prototype = select.prototype;
	// select.prototype.init.prototype = select.prototype;

	// 对外暴露接口
	window._S = select;
})();
