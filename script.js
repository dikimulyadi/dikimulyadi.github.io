const txtElement = ['I am a Junior Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 300);

});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.name', {delay: 200})
sr.reveal('.ring', {origin:'top', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about_text', {delay: 400})
sr.reveal('.about_subtitle', {delay: 200})
sr.reveal('.about_profesi', {delay: 300})
sr.reveal('.about_model', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {interval: 100})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 200})
sr.reveal('.bar', {interval: 200})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_subtitle', {delay: 300})
sr.reveal('.portfolio_img', {interval: 400})

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle', {delay: 150})
sr.reveal('.text', {delay: 300})
sr.reveal('.media', {delay: 300})
///sr.reveal('.contact__button', {delay: 600})

