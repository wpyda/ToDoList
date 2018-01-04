function createListElement() {
	var content = document.getElementById('textArea')

	// ADD CONTENT TO LOCAL STORAGE

	localStorage.setItem('What To Do', content.value);

	// NEW DIV WHICH CONTAINS TEXT + REMOVE SINGLE ELEMENT BTN

	var newPosition = document.createElement('div')
	newPosition.className = 'newElement'
	document.getElementById('myList').appendChild(newPosition)

	// e.preventDefault()    + e jako argument funckji || button w form jako default przeladowuje strone na action 
	// 					 	 		(a jak nie ma action, to przeladowuje strone), wiec trzeba dodac preventa 
	// 					 	 		lub wyjac buttona z form


	// TEXT DIV

	var elementText = document.createElement('div')
	elementText.innerHTML = content.value
	content.value = ''

	newPosition.appendChild(elementText)

// REMOVE SINGLE ELEMENT BUTTON AND FUNCTION

	var deleteSingleElement = document.createElement('button')
	deleteSingleElement.className = 'deleteSingleElementBtn'
	deleteSingleElement.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'
	deleteSingleElement.style.textAlign = 'center'
	newPosition.appendChild(deleteSingleElement)

	function removeSingleElement () {
		newPosition.remove()
		localStorage.removeItem('What To Do')
	}

	deleteSingleElement.addEventListener('click', removeSingleElement)
}

// ADD LIST ELEMENT BUTTON

var addButton = document.getElementById('addListPos')
addButton.addEventListener('click', createListElement)

// CLEAR LIST FUNCTION AND BUTTON

function clearList() {
	var content = document.getElementById('myList')
	content.innerHTML = ''
}

var clearListButton = document.getElementById('clearList')
clearListButton.addEventListener('click', clearList)