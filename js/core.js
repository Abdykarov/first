/* шапка */

$(window).scroll(function() {
	if($(window).scrollTop() > 200){
		$('.nav_header').addClass('fixed');
	}
	else{
		$('.nav_header').removeClass('fixed');
	}
});

/* вверх */
$(window).scroll(function(){
	if ($(this).scrollTop() > 2500) {
		$('.upper').addClass('upper2');
	} else{
		$('.upper').removeClass('upper2');
	}
});

$('.upper').click(function(){
	$('html,body').animate( { scrollTop: 0} , 700);
});

/* portf */
var containerEl = document.querySelector('.portfolio-img');

	var mixer = mixitup(containerEl);

	var mixer = mixitup(containerEl, {
	    selectors: {
	        target: '.blog-item'
	    },
	    animation: {
	        duration: 300
	    }
});
/* gamburger */

$('#mmenu').click(function(){
	$('#mmenu').hide();
	$('.opacity').show(500);
});
$('#close-btn').click(function close(){
	$('.opacity').hide(500);
	$('#mmenu').show();
});

/* scrollTo */

$('a[href^="#"]').click(function(){
	$('.opacity').hide(500);
	$('#mmenu').show();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	{
	$('html, body').animate({scrollTop: destination}, 1000 );
	}
	return false;
});


/* validation */

function valid(form){
	if (form.text1.value == "") {
		alert("Вы не ввели своё имя");
		return false;
	}
	else if(form.text3.value == ""){
		alert("Вы не ввели свой комментарий");
		return false;
	}
	else if(form.text2.value == "" || form.text2.value.indexOf('@', 0) == -1){
		alert("Вы ввели неправильный email");
		return false;
	}
	else{
		alert("Письмо успешно отправлено!");
	}
}

/* preloader */
function preload(){
	$('.preloader').addClass('done');
}
setTimeout(preload, 1000);