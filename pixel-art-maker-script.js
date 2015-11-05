	var body = document.getElementsByTagName("body") [0];
	var uptick = 0;
	var uptick2 = 144;
	var uptick3 = 10;
	var bkclr; 

	randomNum1 = Math.floor(Math.random()*120);
	randomNum2 = Math.floor(Math.random()*110);
	randomNum3 = Math.floor(Math.random()*200);
	randomNum4 = Math.floor(Math.random()*115);

 	

	for(var i = 0; i<=6463; i++){

		var square = document.createElement("div");
		body.appendChild(square);

		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';

		square.addEventListener("click", function(e){

			e.target.style.background = 'rgb(255,255,255)'; 
		})

		square.addEventListener("mouseenter", function(e){

			e.target.style.background = bkclr; 
		});				
		
	};

	for(var i = 0; i <=10; i++){
		
		var psquare = document.createElement("div");
		body.appendChild(psquare);

		psquare.style.background = "rgb( " + uptick + ", " + uptick + ", " + uptick + ")"; 
		uptick += 8; 
		psquare.style.border= '2px solid  #000000';
		psquare.style.width = '1%';
		psquare.style.float = 'left';
		psquare.style.paddingBottom = '1%';
		psquare.style.margin = '.10%';
		psquare.style.boxShadow = ' 0px 0px 25px #9E8F8F';
 

		psquare.addEventListener("click", function(e){

			bkclr = e.target.style.background; 

		})
		
	};

	for(var i = 0; i <=25; i++){
		
		var psquare = document.createElement("div");
		body.appendChild(psquare);

		psquare.style.background = "rgb( " + uptick2 + ", " + randomNum1 + ", " + randomNum2 + ")"; 
		uptick2 += 8; 
		psquare.style.border= '2px solid  #000000';
		psquare.style.width = '1%';
		psquare.style.float = 'left';
		psquare.style.paddingBottom = '1%';
		psquare.style.margin = '.10%';
		psquare.style.boxShadow = ' 0px 0px 25px #9E8F8F';	

		psquare.addEventListener("click", function(e){

			bkclr = e.target.style.background; 
			
		})	

	};

	for(var i = 0; i <=34; i++){

		var psquare = document.createElement("div");
		body.appendChild(psquare);
		
		psquare.style.background = "rgb( " + uptick3 + ", " + randomNum3 + ", " + randomNum4 + ")"; 
		uptick3 += 10; 
		psquare.style.border= '2px solid  #000000';
		psquare.style.width = '1%';
		psquare.style.float = 'left';
		psquare.style.paddingBottom = '1%';
		psquare.style.margin = '.10%';
		psquare.style.boxShadow = ' 0px 0px 25px #9E8F8F';	

		psquare.addEventListener("click", function(e){

			bkclr = e.target.style.background; 
			
		})				

	};

	



	

