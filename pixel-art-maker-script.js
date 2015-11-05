	var body = document.getElementsByTagName("body") [0];
	 

	for(var i = 0; i<=100 *100; i++){

		var square = document.createElement("div");
		body.appendChild(square);

		square.style.border= '2px solid  #000000';
		square.style.width = '.85%';
		square.style.float = 'left';
		square.style.paddingBottom = '.85%';
		square.style.margin = '.10%';
		square.style.boxShadow = ' 0px 0px 15px #9E8F8F';
	};
