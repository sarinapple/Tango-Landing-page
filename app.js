// Test js script with alert method below
// alert('page working test 1-2-3');

const shoesBtn = document.querySelector("#shoesBtn");

const cultureBtn = document.querySelector("#cultureBtn");

const dancingBtn = document.querySelector("#dancingBtn");

const musicBtn = document.querySelector("#musicBtn");

const tangoBtn = document.querySelector("#tangoBtn");



// shoes button scroll
shoesBtn.addEventListener('click', function(){

	window.scrollTo({

		top: 3895,
		left: 0, 
		behavior:'smooth'
		
	});

});

// culture button scroll
cultureBtn.addEventListener('click', function(){

	window.scrollTo({
		
		top: 3010,
		left: 0, 
		behavior:'smooth'
		
	});

});

// dancing button scroll
dancingBtn.addEventListener('click', function(){

	window.scrollTo({
		
		top: 2125,
		left: 0, 
		behavior:'smooth'
		
	});

});

//  music button scroll
musicBtn.addEventListener('click', function(){

	window.scrollTo({
		
		top: 1200,
		left: 0, 
		behavior:'smooth'
		
	});

});


//  tango button scroll
tangoBtn.addEventListener('click', function(){

	window.scrollTo({
		
		top: 0,
		left: 0, 
		behavior:'smooth'
		
	});

});


const tangoDiv = document.querySelector('.tango');

const musicDiv = document.querySelector('.music');

const dancingDiv = document.querySelector('.dancing');

const cultureDiv = document.querySelector('.culture');

const shoesDiv = document.querySelector('.shoes');



// change color of each section when mouse hovers


// this code worked but not what I wanted
// shoesDiv.addEventListener("onmouseover", function(event){
// event.target.style.backgroundcolor = "black";

// })


document.addEventListener ('DOMContentLoaded', init);

function init(){

	let query = matchMedia("(min-width: 768px)");

	if(query.matches){

	musicBtn.addEventListener('click', function(){

		window.scrollTo({
			
			top: 700,
			left: 0, 
			behavior:'smooth'
			
		});
	
	});

	dancingBtn.addEventListener('click', function(){

		window.scrollTo({
			
			top: 1350,
			left: 0, 
			behavior:'smooth'
			
		});
	
	});

	cultureBtn.addEventListener('click', function(){

		window.scrollTo({
			
			top: 2010,
			left: 0, 
			behavior:'smooth'
			
		});
	
	});


	shoesBtn.addEventListener('click', function(){

		window.scrollTo({
	
			top: 2400,
			left: 0, 
			behavior:'smooth'
			
		});
	
	})

	} ;









