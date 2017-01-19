'use strict';
var isObj = require('is-obj');

module.exports = function (obj) {
	var objToDotNotation = function (obj, result, dotPathArr) {
		result = result || {};
		dotPathArr = dotPathArr || [];
		Object.keys(obj).forEach(function (key) {
			var val = obj[key];
			if (isObj(val)) {
				return objToDotNotation(val, result, dotPathArr.concat(key));
			}
			result[dotPathArr.concat(key).join('.')] = val;
		});
		return result;
	};
	return objToDotNotation(obj);
};
