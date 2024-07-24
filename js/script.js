// ! STICKY NAVBAR
window.addEventListener('scroll', () => {
	var navbar = document.querySelector('.navbar');
	if (window.pageYOffset > 45) {
		navbar.classList.add('sticky-top', 'shadow-sm');
	} else {
		navbar.classList.remove('sticky-top', 'shadow-sm');
	}
});

// ! BACK TO TOP BUTTON
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.classList.add('d-none');

backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 800) {
		backToTopButton.classList.remove('d-none');
	} else {
		backToTopButton.classList.add('d-none');
	}
});

// ! SCROLL DOWN BUTTON
const scrollDownButton = document.getElementById('scrollDownButton');

scrollDownButton.addEventListener('click', () => {
	window.scrollBy({
		top: 1000,
		behavior: 'smooth',
	});
});

// ! SEARCH INPUT
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
	if (searchInput.value === '') {
		window.alert('Please enter a city name');
	} else {
		window.alert('I apologize, but what you’re looking for is not available');
		searchInput.value = '';
	}
});

// ! BOOKING INPUT
const bookingButton = document.getElementById('bookingButton');

function verificationBookingInput() {
	const inputName = document.getElementById('inputName').value;
	const inputEmail = document.getElementById('inputEmail').value;
	const inputDateTime = document.getElementById('inputDateTime').value;
	const selectDestination = document.getElementById('selectDestination').value;
	const selectPerson = document.getElementById('selectPerson').value;
	const selectCategories = document.getElementById('selectCategories').value;
	const spesialMessage = document.getElementById('spesialMessage').value;

	if (inputName === '' || inputEmail === '' || inputDateTime === '' || selectDestination === '' || selectPerson === '' || selectCategories === '' || spesialMessage === '') {
		window.alert('Please fill in all the data on the form and the sentence');
	} else {
		window.alert('Thank you for booking tickets on our website');
		setTimeout(function () {
			location.reload();
		}, 500);
	}
}

// ! SUBSCRIBE INPUT
function verificationEmailInput() {
	const subscribeInput = document.getElementById('subscribeInput');
	let emailInput = subscribeInput.value;

	if (emailInput === '') {
		window.alert('Please enter a email address');
	} else {
		window.alert('Thank you for subscribing to our newsletter');
		subscribeInput.value = '';
	}
}

// ! CONTACT INPUT
function verificationContactInput() {
	const contactName = document.getElementById('contactName').value;
	const contactEmail = document.getElementById('contactEmail').value;
	const contactSubject = document.getElementById('contactSubject').value;
	const contactMessage = document.getElementById('contactMessage').value;

	if (contactName === '' || contactEmail === '' || contactSubject === '' || contactMessage === '') {
		window.alert('Please fill in all the data on the form and the sentence');
	} else {
		window.alert('Thank you for contacting us');
		setTimeout(function () {
			location.reload();
		}, 500);
	}
}
