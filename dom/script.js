console.log(document)

// dom - document object model

// retrieve elements from the page

// getElementsBy...

// querySelector() / querySelectorAll()

// this returns always an HTMLCollection
const divs = document.getElementsByTagName('div')
// can be accessed like an array
console.log(divs[0])

// get element by id
const sectionWithId = document.getElementById('container')
console.log(sectionWithId)
console.clear()
const boxes = document.getElementsByClassName('box')
console.log(boxes)

// console.clear()
// querySelector (get's the first) 
// querySelectorAll (get's all)

const container = document.querySelector('#container')
console.log(container)

const firstDiv = document.querySelector('div')
console.log(firstDiv)
// querySelectorAll - returns always a so called node list
// you could also use forEach()
const allDivs = document.querySelectorAll('div')
console.log(allDivs[0])

const thirdItem = document.querySelector('body > ul > li:nth-child(3)')
console.log(thirdItem)
// console.clear()

// read the text from the section
const val = document.querySelector('section').innerText
console.log(val)
const html = document.querySelector('section').innerHTML
console.log(html)

// console.clear()
// document.querySelector('h1').innerText = 'sth else'

// changing values in the dom
// document.querySelector('section').innerHTML = '<h3>Hello</h3>'

// document.querySelector('h1').innerText = '<h3>Hello</h3>'

// uppercase all letters in the list
// get the list
const list = document.querySelectorAll('li')
console.log(list)

list.forEach(function (element) {
	// element.innerText = '🙈'
	console.log(typeof element)
	element.innerText = element.innerText.toUpperCase()
})

// document.body.innerHTML = '<h1>changed</h1>'

// change the styling of an element
const h1 = document.querySelector('h1')
h1.style.backgroundColor = 'red'
console.log(h1)

// access the classlist of an element
// see the classlist of the first box

console.log(boxes[0].classList)
// we can add or remove a class
boxes[0].classList.add('box-2')

// you can also add attributes
document.querySelector('h1').setAttribute(
	'id',
	'heading'
)

// you can also call the methods on a dom node
// and not only on the whole document
const section = document.querySelector('section')
const heading = section.querySelector('h1')
console.log(heading)