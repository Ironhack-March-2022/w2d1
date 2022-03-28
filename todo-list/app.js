console.log('start of the script')
// list of browser events
// https://developer.mozilla.org/de/docs/Web/Events
// register an event listener to the button
// document.querySelector('button').onclick = function () {
// 	// document.querySelector('h1').style.backgroundColor = 'red'

// }
// another way to do the same
// document.querySelector('button').addEventListener('click', function () {
// 	console.log('click')
// })

document.querySelector('button').addEventListener('click', addTodo)

// register an event listener on all the list items

document.querySelectorAll('ul > li').forEach(function (todo) {
	console.log(todo)
	todo.addEventListener('click', toggleTodo)
})

// this listens for a keyup event in the input field
// document.querySelector('input').addEventListener('keyup', function () {
// 	console.log('you added a character')
// })

function toggleTodo(event) {
	// console.log('toggle')
	// identify the li item that was clicked
	console.log(event.target)
	// toggle the class checked
	event.target.classList.toggle('checked')

	// if you want to remove the element from the list
	// use removeChild()
	// const list = document.querySelector('ul')
	// you can use .parentNode to go up one or more node(s) in the dom structure
	// const list = event.target.parentNode
	// console.log(list)
	// list.removeChild(event.target)

	// alternative to using removeChild() is to use remove()
	// event.target.remove()
}

function addTodo() {
	// retrieve the value from the input field
	const input = document.querySelector('input')
	// access the value
	console.log(input.value)
	// create a new li element
	const todo = document.createElement('li')
	todo.innerText = input.value

	// add the event listener to toggle the class
	todo.addEventListener('click', toggleTodo)

	console.log(todo)
	// add this li element to the dom list
	// using appendChild()
	const list = document.querySelector('ul')
	console.log(list)
	list.appendChild(todo)
	input.value = ''
}
console.log('end of the script')