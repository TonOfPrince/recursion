// this is what you would do if you liked things to be easy:
 //var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if (obj === null) {
		return String(obj);
	}
	else if (typeof obj === "number" || typeof obj === "boolean") {
		return String(obj);
	}
	else if (Object.prototype.toString.apply(obj) === '[object Array]') {
		var arr = new Array();
		for (var i = 0; i < obj.length; i++) {
			var str = '';
			str = (typeof obj[i] == "string") ?
			str = str + '"' + obj[i] + '"' :
			str = str + stringifyJSON(obj[i]);
			arr.push(str);
		}
		return "[" + arr.join(",") + "]";
	}
	else if (typeof obj == "object") {

		var arr = new Array();
		for (var k in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, k)) {
				val = stringifyJSON(obj[k]);
				if (val) {
					arr.push('"' + k + '":' + val);
				}
			}
		}
		if (arr[0] == '"functions":function (){}') {return '{}';}
		return arr.length === 0 ? '{}' : '{' + arr.join(',') + '}';
	} 
	else if  (typeof obj === "string") {
		return '"' + obj + '"';
	}
	else {
		return obj;
	}
	
};
