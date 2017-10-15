function teste(n) {
	let obj = document.querySelector("#font");
	if (n == 1) {
		obj.innerHTML = "◫◪◫◫◫<br>◫◫◫◪◫";
	} else if (n == 2) {
		obj.innerHTML = "▩▩▩▩▩▩▩<br>▩◪◫◫◪◫▩<br>▩◫◫◫◫◫▩<br>▩▩▩◫▩▩▩<br>▩◫◪◫▩<br>▩▩▩▩▩";
	} else if (n == 3) {
		obj.innerHTML = "▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩<br>▩◫▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩<br>▩◫▩▩▩▩▩◫◪▩◫◪▩▩▩◪◪▩▩◪◪▩▩▩▩<br>▩◫▩▩▩▩▩◫▩▩◫▩▩▩▩◫▩▩▩◫▩▩▩▩▩<br>▩▩▩▩▩▩◫◫◫◫◫◫▩▩▩◫▩▩▩◫▩▩▩▩▩<br>▩▩▩▩▩◫◫◫◫◫◫◫◫▩◫◫◫▩◫◫◫▩▩▩▩<br>▩▩◪▩▩◪◫◫◫◫◫◫◪▩◫◫◫▩◫◫◫▩▩▩▩<br>▩▩◫▩▩▩◫◫◫◫◫◫▩▩◫◫◫◪◫◫◫◪▩▩▩<br>▩▩◫▩▩▩◫◫◫◫◫◫▩▩◫◫◫◪◫◫◫◪▩▩▩<br>▩▩◫▩▩▩◫◫◫◫◫◫▩▩◫◫◫▩◫◫◫▩▩▩▩<br>▩▩◫▩▩▩◫◫◫◫◫◫▩▩◫◫◫▩◫◫◫▩▩▩▩<br>▩▩▩▩▩▩◫◫◫◫◫◫▩▩◫◫◫▩◫◫◫▩▩▩▩<br>▩▩▩▩▩▩▩▩◫◫▩▩▩◫◫◫◫◫◫◫◫▩▩▩▩<br>▩◪◪◪◪◪◫◫◫◫◫◫◫◫◫▩▩▩▩▩▩▩▩▩▩<br>▩▩▩▩▩▩◫◫◫◫◫◫◫◫◫▩◫◫◫◫◫◪▩▩▩<br>▩◪◪◪◪◪◫◫◫◫◫◫◫◫◫◫◫▩◫▩◫◫▩▩▩<br>▩▩▩▩▩▩▩▩◫▩▩▩▩▩◫◫◫▩◫▩◫◫◫◫▩<br>▩▩▩▩▩▩◫◫◫◫◫▩▩▩◫▩◫◫◫◫◫◫▩◪▩<br>▩▩◫▩▩▩◫◫◫◫◫▩▩▩◫▩▩▩▩▩▩▩▩▩▩<br>▩▩◫▩▩◪◪◫◫◫◪◪▩▩◫▩◫◫◫◫◫◫▩▩▩<br>▩▩◫▩▩▩◫◫◫◫◫▩▩▩◫◫◫▩◫▩◫◫▩▩▩<br>▩▩◫▩▩▩▩◫▩◫▩▩▩▩◫◫◫▩◫▩◫◫◫◫▩<br>▩▩◪▩▩▩▩◫▩◫▩▩▩▩▩▩◫◫◫◫◫◪▩◪▩<br>▩▩▩▩▩▩◫◫▩◫◫▩▩▩▩▩▩▩▩▩▩▩▩▩▩<br>▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩";
	}

	if (document.querySelector("#calc").getAttribute("value") == "Parar") {
		document.querySelector("#calc").click();
	}

	document.querySelector("#time").innerHTML = "";
	document.querySelector("#qtdSelect").innerHTML = "";
	document.querySelector("#qtdCovered").innerHTML = "";
}


function insertTextAtCursor(text) {
    var sel, range, textNode;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            textNode = document.createTextNode(text);
            range.insertNode(textNode);

            // Move caret to the end of the newly inserted text node
            range.setStart(textNode, textNode.length);
            range.setEnd(textNode, textNode.length);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.pasteHTML(text);
    }
}

// Converte os caracteres inseridos e impede que outros caracteres sejam inseridos
document.querySelector("#font").addEventListener("keypress", function(event){
	var keycode = event.which || event.keyCode;
	//alert(keycode);
	// 8 -> backspace | 13 -> enter
	// 37 -> left | 38 -> up | 39 -> right | 40 -> down
	// 46 -> delete
	// 97 -> a | 98 -> b | 99 -> c
	// ▩◪◫
	
	switch (keycode) {
		case 97:
			insertTextAtCursor("▩");
			break;
		case 98:
			insertTextAtCursor("◪");
			break;
		case 99:
			insertTextAtCursor("◫");
	}
	
	if ([8, 13, 37, 38, 39, 40, 46].indexOf(keycode) == -1)
		event.preventDefault();
});

document.querySelector("#calc").addEventListener("click", function(){
	if (this.getAttribute("value") == "Calcular") {
		loadinfos();
		this.setAttribute("value", "Parar");
		document.querySelector(".indeterminate").style.display = "inherit";
		document.querySelector("#font").removeAttribute("contenteditable");
		document.querySelector("#font").setAttribute("one-line", "Calculando");
	} else {
		noLoop();
		this.setAttribute("value", "Calcular");
		document.querySelector(".indeterminate").style.display = "none";
		setTimeout(function() {
			document.querySelector("#status").innerHTML = "";
		}, 100);
		document.querySelector("#font").setAttribute("contenteditable", "");
	}
});

document.querySelector("#clean").addEventListener("click", function() {
	if (document.querySelector("#calc").getAttribute("value") == "Parar") {
		document.querySelector("#calc").click();
	}

	document.querySelector("#font").innerHTML = "";

	setTimeout(function() {
		document.querySelector("#time").innerHTML = "";
		document.querySelector("#qtdSelect").innerHTML = "";
		document.querySelector("#qtdCovered").innerHTML = "";
	}, 100);
})


function loadinfos() {
	wantCovered = 0;

	
	/*font = [
		['c', 'b', 'c', 'c', 'c'],
		['c', 'c', 'c', 'b', 'c']
	];*/
	/*font = [
		['a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'b', 'c', 'c', 'b', 'c', 'a'],
		['a', 'c', 'c', 'c', 'c', 'c', 'a'],
		['a', 'a', 'a', 'c', 'a', 'a', 'a'],
		['a', 'c', 'b', 'c', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a']
	];*/
	/*font = [
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'c', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'c', 'a', 'a', 'a', 'a', 'a', 'c', 'b', 'a', 'c', 'b', 'a', 'a', 'a', 'b', 'b', 'a', 'a', 'b', 'b', 'a', 'a', 'a', 'a'],
		['a', 'c', 'a', 'a', 'a', 'a', 'a', 'c', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'a', 'b', 'a', 'a', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'b', 'a', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'b', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'b', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'a'],
		['a', 'b', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'c', 'c', 'c', 'c', 'c', 'b', 'a', 'a', 'a'],
		['a', 'b', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'c', 'a', 'c', 'c', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'a', 'c', 'c', 'c', 'c', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'c', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'b', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'c', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'b', 'b', 'a', 'a', 'c', 'a', 'c', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'a', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'a', 'c', 'c', 'a', 'a', 'a'],
		['a', 'a', 'c', 'a', 'a', 'a', 'a', 'c', 'a', 'c', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'a', 'c', 'a', 'c', 'c', 'c', 'c', 'a'],
		['a', 'a', 'b', 'a', 'a', 'a', 'a', 'c', 'a', 'c', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'c', 'c', 'c', 'b', 'a', 'b', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'c', 'c', 'a', 'c', 'c', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
		['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
	];*/

	font = document.querySelector("#font").innerHTML;
	font = font.replace(/^<br>/gm, "");
	font = font.replace(/<br>$/gm, "");
	if (font.search(/[^▩◪◫<br>\n\r]/g) != -1) {
		font = font.replace(/<\/div><div>|\n/g, "<br>");
		font = font.replace(/<span\s*\w*.*?>|<\/span>/gm, "");
		font = font.replace(/a/gm, "▩");
		font = font.replace(/b(?!r)/gm, "◪");
		font = font.replace(/c/gm, "◫");
		font = font.replace(/<\/?div>/gm, "");
		font = font.replace(/[^▩◪◫\<br\>\n\r]/gm, "");
		//font = font.replace(/<br><br>/gm, "");
		document.querySelector("#font").innerHTML = font;
	}
	font = font.split("<br>")
	for (let i = 0; i < font.length; i++)
		font[i] = font[i].split("");

	area = calcArea();
	for (let i = 0; i < font.length; i++) {
		for (let j = 0; j < font[0].length; j++) {
			if (font[i][j] == '◫')
				wantCovered++;
		}
	}


	popmax = 200;
	mutationRate = 0.01;

	// Create a population with the font phrase, mutation rate, and population max
	population = new Population(font, mutationRate, popmax);

	calc = true;

	loop();
}



function calcArea() {
	let temp = new Array(font.length);
	
	for (let i = 0; i < temp.length; i++) {
		temp[i] = new Array(font[0].length);

		for (let j = 0; j < temp[0].length; j++) {
			temp[i][j] = font[i][j] == '▩' ? 0 : 1;
		}
	}

	return temp.slice();
}


function newBetter(phrase, select, covereds) {
	document.querySelector("#qtdSelect").innerHTML = select+" selecionados";
	document.querySelector("#qtdCovered").innerHTML = covereds.t+" / "+covereds.a+" cobertos";


	let k = 0; // index of phrase
	let data = phrase.split(",");

	let states = new Array(font.length);
	for (let i = 0; i < font.length; i++) {
		states[i] = new Array(font[i].length);
		for (let j = 0; j < font[i].length; j++) { // ▩◪◫
			if (data[k] == 1)
				states[i][j] = 2;
			else
				states[i][j] = 0;
			k++;
		}
	}

	let result = "";
	for (let i = 0; i < states.length; i++) {
		for (let j = 0; j < states[i].length; j++) {
			if (states[i][j] == 1)
				result += "<span style=\"color: green\">"+font[i][j]+"</span>"
			else if (states[i][j] == 2)
				result += "<span style=\"color: orange\">"+font[i][j]+"</span>"
			else if (states[i][j] == 3)
				result += "<span style=\"color: red\">"+font[i][j]+"</span>"
			else if (states[i][j] == 4)
				result += "<span style=\"color: blue\">"+font[i][j]+"</span>"
			else
				result += font[i][j];
		}
		result += "<br>";
	}
	document.querySelector("#font").innerHTML = result;
}