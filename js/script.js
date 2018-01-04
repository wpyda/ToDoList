function AddElement(){}



AddElement.prototype.init = function() {

    var content = document.getElementById('textArea')

    // add content to localStorage
    var counter = 1
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

		// remove content from localStorage
		localStorage.removeItem(' Thing to do')
	}

	deleteSingleElement.addEventListener('click', removeSingleElement)
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
}

var clearListButton = document.getElementById('clearList')
clearListButton.addEventListener('click', clearList)