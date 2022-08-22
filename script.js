'use strict'

window.onload = (event) => {


  const cards = document.querySelectorAll('.card');
  const filterItems = document.querySelectorAll('.filter--item');

  filterItems.forEach((item) => {
    item.addEventListener('click', function(e) {
        console.log(item.id);
      
        cards.forEach((card) => {
          if(card.classList.contains(item.id)){
            card.classList.toggle('show');
            card.classList.toggle('hidden');
          } 
        })
      

    })
  })



  // FAQ ACCORDION

  // const question = document.querySelectorAll('.question');

  // for(let i = 0; i < question.length; i++ ) {
  //   question[i].addEventListener('click', function() {
  //     this.classList.toggle('active--question');
      
  //   })
  // }

  };


