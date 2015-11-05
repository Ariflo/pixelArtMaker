	var body = document.getElementsByTagName("body") [0];
	var uptick = 0;
	var uptick2 = 144;
	var uptick3 = 10;
	randomNum1 = Math.floor(Math.random()*120);
	randomNum2 = Math.floor(Math.random()*110);
	randomNum3 = Math.floor(Math.random()*200);
	randomNum4 = Math.floor(Math.random()*115);


	for(var i = 0; i<=6497; i++){

		var square = document.createElement("div");
		body.appendChild(square);

		
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';
	};

	for(var i = 0; i <=10; i++){
		
		square.style.background = "rgb( " + uptick + ", " + uptick + ", " + uptick + ")"; 
		uptick += 8; 
		var square = document.createElement("div");
		body.appendChild(square);
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';	
	};

	for(var i = 0; i <=25; i++){
		
		square.style.background = "rgb( " + uptick2 + ", " + randomNum1 + ", " + randomNum2 + ")"; 
		uptick2 += 8; 
		var square = document.createElement("div");
		body.appendChild(square);
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';	
	};

	for(var i = 0; i <=34; i++){
		
		square.style.background = "rgb( " + uptick3 + ", " + randomNum3 + ", " + randomNum4 + ")"; 
		uptick3 += 10; 
		var square = document.createElement("div");
		body.appendChild(square);
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';	
	};

