var parent = document.querySelector(".chat");
var child = parent.getElementsByTagName('div');

parent.onclick = function(){
	for (var i = 0; i < child.length; i++){
		child[i].classList.toggle("active");
	}
}