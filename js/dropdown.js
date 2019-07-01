document.addEventListener('click', function(e) {
	if(e.target.classList.contains('droplink')) {
		let target = e.target.getAttribute('data-drop');
		document.querySelectorAll('.dropdown-menu').forEach((menu) => menu.classList.remove('active'));
		document.querySelectorAll('[data-drop] img').forEach((image) => image.classList.remove('active'));



		document.querySelector('.dropdown-menu' + target).classList.toggle('active');
		document.querySelector('[data-drop="' + target + '"] img').classList.toggle('active');
	}
	else {
		document.querySelectorAll('.dropdown-menu').forEach((menu) => menu.classList.remove('active'));
		document.querySelectorAll('[data-drop] img').forEach((image) => image.classList.remove('active'));
	}
})