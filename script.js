'use strict'

window.onload = (event) => {



  const cards = document.querySelectorAll('.card');
  const filterItems = document.querySelectorAll('.filter--item');

  filterItems.forEach((item) => {
    item.addEventListener('click', function(e) {


// Add active class to clicked tab.
        filterItems.forEach(f => f.classList.remove('active'));
        e.target.classList.toggle('active');


// Display card depend on clicked tab.
        cards.forEach((card) => {
          if(card.classList.contains(item.id)){
            card.classList.toggle('show');
            card.classList.toggle('hidden');
            } else {
              card.classList.add('hidden');
            }

        })
    })
  })



// FAQ ACCORDION

  const question = document.querySelectorAll('.question');

  question.forEach((q) => {
    q.addEventListener('click', () => {
      // Show answer for clicked question
      q.nextElementSibling.classList.toggle('show--answer');
      // Rotate the arrow in question
      q.children[1].classList.toggle('rotate');
    })
  })



// Email Verification

  const contactBtn = document.querySelector('')
  const emailInput = document.getElementById('email').value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if(emailInput.match(emailPattern)) {
    console.log('tak')
  } else {
    console.log('nie')
  }



};


