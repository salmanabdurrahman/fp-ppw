// ! sticky navbar
window.addEventListener('scroll', function () {
	var navbar = document.querySelector('.navbar');
	if (window.pageYOffset > 45) {
		navbar.classList.add('sticky-top', 'shadow-sm');
	} else {
		navbar.classList.remove('sticky-top', 'shadow-sm');
	}
});

// ! back to top
var backToTopButton = document.querySelector('.back-to-top');

function toggleBackToTopButton() {
	if (window.scrollY > 300) {
		// backToTopButton.style.display = 'flex';
		backToTopButton.style.opacity = '1';
	} else {
		// backToTopButton.style.display = 'none';
		backToTopButton.style.opacity = '0';
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
