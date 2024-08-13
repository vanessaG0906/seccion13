window.onload = function(){
	let libro = [];
	let i = 0;
	let xhttp = new XMLHttpRequest();
	//
	xhttp.open("GET","libros.xml");
	xhttp.send();
	xhttp.onreadystatechange= function(){
		if (xhttp.readyState==4 && xhttp.status==200) {
			crearTabla(xhttp.responseXML);
		}
	}
}
//
function crearTabla(xmlDoc) {
	let libros = xmlDoc.documentElement.childNodes;
	let datos = [];
	//
	for (var i = 0; i < libros.length; i++) {
		if (libros[i].nodeType==1) {
			libro = libros[i].childNodes;
			datos.push({
				titulo:libro[1].childNodes[0].nodeValue,
				autor:libro[3].childNodes[0].nodeValue,
				editorial:libro[5].childNodes[0].nodeValue,
				precio:libro[7].childNodes[0].nodeValue,
				fecha:libro[9].childNodes[0].nodeValue,
				tipo:libro[11].childNodes[0].nodeValue
			});
		}
	}
	delete libros, libro;
	let tabla = document.getElementById("tabla");
	//
	datos.forEach(a =>{
		let r = document.createElement("tr");
		let td = document.createElement("td");
		td.innerText = a.titulo;
		r.appendChild(td);

		td = document.createElement("td");
		td.innerText = a.autor;
		r.appendChild(td);

		td = document.createElement("tipo");
		td.innerText = a.tipo;
		r.appendChild(td);

		tabla.appendChild(r);

	});
}