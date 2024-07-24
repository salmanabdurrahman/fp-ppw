// ! sticky navbar
window.addEventListener('scroll', function () {
	var navbar = document.querySelector('.navbar');
	if (window.pageYOffset > 45) {
		navbar.classList.add('sticky-top', 'shadow-sm');
	} else {
		navbar.classList.remove('sticky-top', 'shadow-sm');
	}
});

// ! scroll down button
const scrollDownButton = document.getElementById('scrollDownButton');

scrollDownButton.addEventListener('click', () => {
	window.scrollBy({
		top: 1000, // Jarak dalam piksel yang ingin digulirkan
		behavior: 'smooth', // Animasi perlahan saat menggulir
	});
});

// ! search input
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
	if (searchInput.value === '') {
		window.alert('Please enter a city name');
	} else {
		window.alert('I apologize, but what you’re looking for is not available');
	}
});

// ! booking input
// const bookingButton = document.getElementById('bookingButton');

// bookingButton.addEventListener('click', function () {
// 	// Mengambil nilai dari setiap input dan select
// 	const inputName = document.getElementById('inputName').value;
// 	const inputEmail = document.getElementById('inputEmail').value;
// 	const inputDateTime = document.getElementById('inputDateTime').value;
// 	const selectDestination = document.getElementById('selectDestination').value;
// 	const selectPerson = document.getElementById('selectPerson').value;
// 	const selectCategories = document.getElementById('selectCategories').value;
// 	const spesialMessage = document.getElementById('spesialMessage').value;

// 	// Memeriksa apakah ada yang kosong
// 	if (inputName === '' || inputEmail === '' || inputDateTime === '' || selectDestination === '' || selectPerson === '' || selectCategories === '' || spesialMessage === '') {
// 		alert('Please fill out all the forms before making a booking');
// 	} else {
// 		alert('Thank you for booking on our website');
// 	}
// });

// ! subscribe input
// Temukan semua input dan tombol berdasarkan pola ID
for (let i = 1; i <= 5; i++) {
	const subscribeInput = document.getElementById(`subscribeInput${i}`);
	const subscribeButton = document.getElementById(`subscribeButton${i}`);

	// Tambahkan event listener untuk setiap tombol
	subscribeButton.addEventListener('click', function () {
		if (subscribeInput.value === '') {
			window.alert('Please enter a email address');
		} else {
			window.alert('Thank you for subscribing!');
			subscribeInput.value = '';
		}
	});
}

// ! back to top
var backToTopButton = document.querySelector('.back-to-top');
backToTopButton.style.display = 'none';

function toggleBackToTopButton() {
	if (window.scrollY > 300) {
		backToTopButton.style.display = 'flex';
		// backToTopButton.style.opacity = '1';
	} else {
		backToTopButton.style.display = 'none';
		// backToTopButton.style.opacity = '0';
	}
}

window.addEventListener('scroll', toggleBackToTopButton);

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

backToTopButton.addEventListener('click', scrollToTop);
