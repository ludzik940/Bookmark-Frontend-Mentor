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

const contactBtn = document.querySelector('.btn--contact-us');
  


contactBtn.addEventListener('click', (e) => {

  let emailInput = document.querySelector('input[name=newsEmail]').value;

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const warningParagraph = document.querySelector('.warning--p')

  const warningSign = document.querySelector('.fa-triangle-exclamation');

  if(emailInput.match(emailPattern)) {

    warningParagraph.style.display = 'none';
    document.querySelector('input[name=newsEmail]').style.border = 'none';
    warningSign.classList.toggle('hidden');

  } else {

    warningParagraph.style.display = 'block';
    document.querySelector('input[name=newsEmail]').style.border = '3px solid hsl(0, 94%, 66%)';
    warningSign.classList.toggle('hidden');
    
  }
})


};


