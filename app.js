
    

var list = document.getElementById('list');
console.log(list);
function todo(){
	var item = document.getElementById('item');	
	if(!item.value == ""){
		

	var li = document.createElement('li');
	var text = document.createTextNode(item.value);
	li.appendChild(text);
	li.setAttribute("class","text-left py-3 font-weight-bold")
	list.setAttribute("class","list")
	
	
	// Edit Button
	var editBtn = document.createElement('Button');
	var editText = document.createTextNode('Edit');
	editBtn.appendChild(editText);
	editBtn.setAttribute("onclick", "editItem(this)");
	editBtn.setAttribute("class", "btn btn-outline-success ml-5 ")
	li.appendChild(editBtn)

	
	// Delete Button
	var delBtn = document.createElement('Button');
	var delText = document.createTextNode('Delete');
	delBtn.setAttribute("class", "btn btn-outline-danger ")
	delBtn.setAttribute("onclick", "deleteItem(this)")  
	delBtn.appendChild(delText);	
	li.appendChild(delBtn);
	


    list.appendChild(li);
    item.value = "";
	}else{
		alert("Enter something First");
	}
	
}

function deleteItem(e){
	e.parentNode.remove();
}

function deleteAll(){
	list.innerHTML = "";
	// console.log(list);
}
 
function editItem(e){
	var inputValue = e.parentNode.firstChild;
	var editValue = prompt("Enter Edit Value", inputValue);
	e.parentNode.firstChild.nodeValue = editValue ;
}
