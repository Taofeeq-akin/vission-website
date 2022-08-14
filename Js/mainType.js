"use strict";

// Initializer
const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // Current Index of word
  const currentIndexOfWord = this.wordIndex % this.words.length;
  //   console.log(currentIndexOfWord);

  //   Get full text of current word 
  const fullText = this.words[currentIndexOfWord];

  //   Check if Deleting
  if (this.isDeleting) {
    // Remove character
    this.txt = fullText.substring(0, this.txt.length - 1);
  } else {
    // Add character
    this.txt = fullText.substring(0, this.txt.length + 1);
  }

  //   INSERT txt into our HTML
  this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

  //   Type Speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //   If a word is complete, it should move
  if (!this.isDeleting && this.txt === fullText) {
    // make a pause at the end
    typeSpeed = this.wait;

    // set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;

    // move to next word
    this.wordIndex++;

    // pause before typing
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init Function
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Initialize typewriter
  new TypeWriter(txtElement, words, wait);
}
