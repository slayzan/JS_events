var footerEl = document.querySelector('footer');
var x = 0;

var test = function  () {
	x += 1;
    console.log("tu as cliqué " + x  + " fois");
};
footerEl.addEventListener('click', test);

/////////////////////////////////////////////////////////////////////////////

var menu = document.getElementById('navbarHeader');
var hamburger = document.querySelector('span.navbar-toggler-icon');

var collapse = function (){
	menu.classList.toggle("collapse"); 
};

hamburger.addEventListener('click', collapse);

/////////////////////////////////////////////////////////////////////////////

var card = document.getElementsByClassName('card')[0];
var btn = document.getElementsByClassName('btn')[3];

var reda = function (){
	card.style.color = 'red';
}

btn.addEventListener('click' ,reda);

/////////////////////////////////////////////////////////////////////////////

var secondCard = document.getElementsByClassName('card')[1];
var btn2 = document.getElementsByClassName('btn')[5];

console.log(btn2)
var reda = function (){
	if (secondCard.style.color === 'green')
			secondCard.style.color = '' ; 
	else
		secondCard.style.color = 'green';
}

btn2.addEventListener('click' ,reda);

/////////////////////////////////////////////////////////////////////////////


var navbar2 = document.querySelector("div.navbar")
var link = document.querySelector("link")

function Nucleaire() {
  if (link.disabled !== true) {
  link.disabled = true;
} else {
  link.disabled = false;
}
}

navbar2.addEventListener("dblclick",Nucleaire);