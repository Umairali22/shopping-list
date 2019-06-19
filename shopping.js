var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}
function createListElements(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
 input.value="";
}
function afterClick(){
	if(inputLength()>0){
		createListElements();

	}

}
function afterKeyPressed(event){
	if(inputLength()>0 && event.keyCode=== 13){
		createListElements();
	}
}

button.addEventListener("click",afterClick);
input.addEventListener("keypress",afterKeyPressed);