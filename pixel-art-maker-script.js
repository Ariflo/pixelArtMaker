	var body = document.getElementsByTagName("body") [0];
	var abcArray = ["abcdefghijklmnopqrstuvwxyz"].toString();
	var numArray = ["123456789"].toString();


	for(var i = 0; i<=6496; i++){

		var square = document.createElement("div");
		body.appendChild(square);

		
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';
	};

	for(var i = 0; i <=72; i++){
		var uptick = 0;
		uptick.toString(); 


		var square = document.createElement("div");
		body.appendChild(square);
		square.style.border= '2px solid  #000000';
		square.style.width = '1%';
		square.style.float = 'left';
		square.style.paddingBottom = '1%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 25px #9E8F8F';

		square.style.background = "rgb(0, 0, 0)";
		uptick += 8; 
		

		
	};

