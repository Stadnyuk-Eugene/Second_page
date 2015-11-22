var contacts = document.querySelector('.contacts'),
	elements = document.querySelectorAll('.contacts > div');

for(var i = 0; i < elements.length; i++){
	elements[i].onclick = function(){
		var colActive = this.getElementsByTagName('div');
		for(var j = 0; j < colActive.length; j++){
			colActive[j].classList.toggle('active');
		}
	}
}