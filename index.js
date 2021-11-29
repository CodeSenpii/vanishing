//jshint esversion:8
// split text into letters

const text2Letters = document.querySelector('.text');
text2Letters.innerHTML = text2Letters.textContent.replace(/\S/g, "<span>$&</span>");
const letters = document.querySelectorAll('span');

for(var x = 0; x < letters.length; x++){
  addClass(x);
}



function addClass(x){


letters[x].addEventListener('mouseover', function(){


letters[x].classList.add('active');

});


}
