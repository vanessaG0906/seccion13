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
	console.log(libros);
}