const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');

login = localStorage.getItem('login');

function toggleModalAuth() {
	modalAuth.classList.toggle("is-open");
}

function authorized() {
	console.log('Authorized');
	console.log(login);
	buttonAuth.style.display = 'none';


	function logOut() {
		login = null;
		userName.textContent = null;
		localStorage.removeItem('login');
		userName.style.display = 'none';
		buttonOut.style.display = 'none';
		buttonAuth.style.display = 'block';
		checkAuth();
	}
	let userName = document.querySelector('.user-name');
	let buttonOut = document.querySelector('.button-out');

	userName.textContent = login;
	buttonAuth.style.display = 'none';
	userName.style.display = 'inline';
	buttonOut.style.display = 'block';

	buttonOut.addEventListener('click', logOut);
}

function notAthorized() {
	console.log('Not authorized');

	function logIn(event) {
		if (loginInput.value) {
			event.preventDefault();
			alert("Строка 'логин' пуста");
		} else {
			event.preventDefault();
			login = loginInput.value;

			localStorage.setItem('login', login);

			toggleModalAuth();

			buttonAuth.removeEventListener("click", toggleModalAuth);
			closeAuth.removeEventListener('click', toggleModalAuth);
			logInForm.removeEventListener('submit', logIn);

			checkAuth();
		}
	}
	buttonAuth.addEventListener("click", toggleModalAuth);
	closeAuth.addEventListener('click', toggleModalAuth);
	logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
	if(login) {
		authorized()
	} else {
		notAthorized();
	}
}

checkAuth();
