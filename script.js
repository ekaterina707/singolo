
// Header

// navigation menu position sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("home");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// active menu
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('navbar_active'));
	event.target.classList.add('navbar_active');
});

// active tags

const TAGS = document.getElementById('tags');

TAGS.addEventListener('click', (event) => {
	TAGS.querySelectorAll('button').forEach(elem => elem.classList.remove('portfolio_active'));
	event.target.classList.add('portfolio_active');
});

// input message
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

BUTTON.addEventListener('click', () => {
	const subject = document.getElementById('subject').value.toString();
	document.getElementById('message-subject').innerText = subject;
	document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
	document.getElementById('message-subject').innerText = '';
	document.getElementById('message-block').classList.add('hidden');
});
