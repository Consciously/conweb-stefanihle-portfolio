import React from 'react';

export const TypeWriter = function (txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
	console.log('Hello');
	setTimeout(() => this.type(), 500);
};

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}


{/* <span
	id='typewriter'
	className='text-secondary txt-type'
	data-wait='3000'
	data-words='["web", "javasScript", "gatsbyjs", "reactjs"]'
>
	<ReactRotatingText items={["web", "javasScript", "gatsbyjs", "reactjs"]} pause="3000" emptyPause="1500" typingInterval="150" deletingInterval="75" />
</span>{' '} */}