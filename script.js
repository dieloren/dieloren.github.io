document.getElementById('si').addEventListener('click', function() {
	document.getElementById('titulo').innerHTML = "<i class='bx bx-heart-circle'></i> YO TAMBIÉN QUIERO JEJEJE <i class='bx bx-heart-circle'></i>";
	document.getElementsByClassName('botones')[0].innerHTML = "TEQUIEROMUCHO";
	document.getElementById('gatito').src = "img/iiiiii.jpg";
});

document.getElementById('no').addEventListener('click', function() {
	var x = Math.floor(Math.random() * (window.innerWidth - 20));
	var y = Math.floor(Math.random() * window.innerHeight);
	
	this.style.position = 'absolute';
	this.style.left = x + 'px';
	this.style.top = y + 'px';
});
