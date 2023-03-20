// Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
// This is a little better.We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.

// Method 3

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
	alert("Hello World");
});
// Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises.
// Method 3 is much more flexible and powerful, though it is a bit more complex to set up.


// Note that all 3 of these methods can be used with named functions like so:
// Method 1 
// the JavaScript file
function alertFunction() {
	alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);