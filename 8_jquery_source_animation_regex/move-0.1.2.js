// IIFE
(function() {
	var pubArr = [],
		push = pubArr.push,
		slice = pubArr.slice,
		forEach = pubArr.forEach;

	function select(query) {
		return new select.prototype.init(query);
	}

	select.prototype = {
		length: 0,
		splice: function () {	
		},
		get: function (index) {
			index = (index + this.length) % this.length;
			return this[index]; // 返回值为dom
		},
		eq: function (index) {
			return select(this.get(index));
		},
		each: function (callback) {
			forEach.call(this, callback);
			return this; // 链式编程
		}
	}

	var init = select.prototype.init = function (query){
		// dom元素
		var doms;
		if(query.nodeName){
			doms = [query];
		} else if(query instanceof Array || 
			typeof query == 'object' 
			&& query.length > 0 && (query.length - 1) in query){
			doms = query;
		} else {
			doms = document.querySelectorAll(query);
		}
		push.apply(this, doms);
	}

	select.fn = init.prototype = select.prototype;
	window._S = select;
})();
