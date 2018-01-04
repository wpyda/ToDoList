function AddElement(){}

// counter from addToLocalStorage function - when it's inside of the prototype, it fails
var counter = 1

AddElement.prototype.init = function() {

    var content = document.getElementById('textArea')

    // add content to localStorage
    function addToLocalStorage() {
        localStorage.setItem(counter + ' Thing to do', content.value)
        counter++
    }
    addToLocalStorage()

	// new div which contains single element of the list
    var newPosition = document.createElement('div')
 	newPosition.className = 'newElement'
 	document.getElementById('myList').appendChild(newPosition)

	// div which takes value from textArea (typed by user) and puts it inside brand new div inside newPosition
    var elementText = document.createElement('div')
 	elementText.innerHTML = content.value
	content.value = ''
	newPosition.appendChild(elementText)

	// button which deletes current element of the list
    var deleteSingleElement = document.createElement('button')
	deleteSingleElement.className = 'deleteSingleElementBtn'
	deleteSingleElement.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'
	deleteSingleElement.style.textAlign = 'center'
	newPosition.appendChild(deleteSingleElement)

	function removeSingleElement () {
		newPosition.remove()
	}

	deleteSingleElement.addEventListener('click', removeSingleElement)

    // remove content from local storage
    function removeFromLocalStorage() {
        localStorage.removeItem((counter-1) + ' Thing to do')
        counter--
    }

    deleteSingleElement.addEventListener('click', removeFromLocalStorage)
}

// add list element (button)
function createListElement() {
	var el = new AddElement
	el.init()
}

var addButton = document.getElementById('addListPos')
addButton.addEventListener('click', createListElement)

// clear list (button + function)
function clearList() {
	var content = document.getElementById('myList')
	content.innerHTML = ''
    localStorage.clear()
    counter = 1
}

var clearListButton = document.getElementById('clearList')
clearListButton.addEventListener('click', clearList)