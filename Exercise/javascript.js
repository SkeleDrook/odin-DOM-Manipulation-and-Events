// place them like document.body.appendChild() and they're placed as children of the <body> element. 
// Place them as document.head.appendChild(), and you're adding head content.
// Place them as document.appendChild() and expect some truly funky behavior, as the root
//  only understands a head and body node.

// const container = document.querySelector('#container') <= Also for existing divs

const paragraph = document.createElement('p')
paragraph.textContent = "Hey I'm red!"
paragraph.style.color = 'red'
document.body.appendChild(paragraph)

const header3 = document.createElement('h3')
header3.textContent = "I'm blue h3!"
header3.style.color = 'blue'
document.body.appendChild(header3)

const div = document.createElement('div')
div.style.borderColor = 'black'
div.style.backgroundColor = 'pink'
// container.appendChild(div) <= This is for when you want to append to existing divs

const header1 = document.createElement('h1')
header1.textContent = "I'm in a div"
div.appendChild(header1)

const nested_paragraph = document.createElement('p')
nested_paragraph.textContent = "ME TOO!"