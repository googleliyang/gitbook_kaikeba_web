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
		},
		extend: function () {
			var obj;
			if(arguments.length == 0){
				return;
			}
			for(var i = 0,l = arguments.length; i < l; i++){
				obj = arguments[i];
				for(var k in obj){
					if(obj.hasOwnProperty(k)){
						this[k] = obj[k];
					}
				}
			}
		}
	}

	var init = select.prototype.init = function (query){
		// dom元素
		var doms;
		// dom 对象转换为 _S 对象, 对象 | 数组 | id/tag/clas
		if(query.nodeName){
			doms = [query];
		} else if(query instanceof Array ||
			typeof query == 'object'
			// 不随手写的数组，都会满足  Length > 0 情况下，最后一个值有有效值(如 nodeList...)
			// 数组为 可能为间断性数组 完整数组 length - 1 键处都会有有效地值
			&& query.length > 0 && (query.length - 1) in query){
			doms = query;
		} else {
			doms = document.querySelectorAll(query);
		}
		push.apply(this, doms);
	}

	select.fn = init.prototype = select.prototype;

	select.fn.extend({
		// target eg:{left: 400} {left: 400, width: 200}
		moveTo: function (target) {
			this.each(function(el) {
				var speed,
					cur;

				clearInterval(el.timer);
				el.timer = setInterval(function() {
					var flag = true;// 判断是否动画停止
					for(var attr in target){
						cur = parseInt(getComputedStyle(el)[attr]);
						speed = target[attr] - cur;
						speed = speed / 8;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						// if(cur == target[attr]){
						// 	clearInterval(el.timer);
						// 	return
						// }
						// 有一个属性没有到达终点 那么就不能停止动画
						if(cur !== target[attr]){
							flag = false;
						}
						el.style[attr] = cur + speed + 'px';
						if(flag) clearInterval(el.timer);
					}
				}, 30);
			});
		},
    fadeIn: function (time, callBack) {
      this.each(function (el) {
          el.timer && clearInterval(el.timer)
          el.style.opacity = 0
          el.timer = setInterval(function () {
              let opa = parseFloat(el.style.opacity) + parseFloat(1/time*20)
              el.style.opacity = opa > 1 ? ~~opa : opa
              if (el.style.opacity >= 1) {
                clearInterval(el.timer)
                callBack && callBack(el)
              }
          }, 20)
      })
      return this
    },
    fadeOut: function (time, callBack) {
      this.each(function (el) {
          el.timer && clearInterval(el.timer)
          el.style.opacity = 1
          el.timer = setInterval(function () {
              let opa = parseFloat(el.style.opacity) - parseFloat(1/time*20)
              el.style.opacity = opa < 0 ? ~~opa : opa
              if (el.style.opacity <= 0) {
                clearInterval(el.timer)
                callBack && callBack(el)
              }
          }, 20)
      })
      return this
    }
	});
	window._S = select;
})();
