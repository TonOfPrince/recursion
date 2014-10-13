// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch

var getElementsByClassName = function(className){
  // your code here
  var list = [];
  var nodeSearch = function(begin_node) {
 	if (!begin_node) {
		begin_node = document.body;
		list.push(begin_node);
	}
	//console.log(begin_node);
	var node = "";
	for (var i = 0; i < begin_node.childNodes.length; i++) {	
		node = begin_node.childNodes[i];
		if  (node.hasChildNodes()) {
			nodeSearch(node);
		}
		//console.log(node);
		if (node.classList && node.classList.contains(className)) {
			list.push(node);
		}
	}
  };
 nodeSearch();
  
  return list; 
};
