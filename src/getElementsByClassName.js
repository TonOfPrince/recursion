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
		//begin_node = $('body');
	}
	/*if (begin_node.classList && begin_node.classList.contains(className)) {
			list.push(begin_node);
	}*/
	console.log(begin_node);
	var node = "";
	for (var i = 0; i < begin_node.childNodes.length; i++) {
		
		node = begin_node.childNodes[i];
		if  (node.hasChildNodes()) {
			nodeSearch(node);
			//arguments.callee(node);
		}
		/*if (node.className && node.className.indexOf(className) >= 0) {
			list.push(node);
		}*/
		console.log(node);
		if (node.classList && node.classList.contains(className)) {
			list.push(node);
		}
		/*
		if (node.hasAttribute && node.hasAttribute(className)) {
			list.push(node);
		}*/
	}
  };
 nodeSearch();
  
  return list; 
  /*
  var node, first;
  if (node == null && 
  
  if (document.hasAttribute && document.hasAttribute(className)) {
	list.push(document)
  }
  
  var childNodes = document.childNodes;
  if (childNodes && childNodes.length > 0) {
	for (var i = childNodes.length; i>0; i--) {
		getElementsByClassName(className);
	}
  }
  
	
  if (!node) {
	return;
  }
  if (var node == null) {
	node = document;
  }
  if (node.hasAttribute && node.hasAttribute(className)) {
	list.push(node);
  }
  
  */
};
