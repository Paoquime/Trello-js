window.addEventListener("load", function (){

	var anidarLista = document.getElementById("anidarLista");
	var formulario = document.getElementById("formulario");
	var inputLista = document.getElementById("inputLista");
	var guardarLista = document.getElementById("btnGuardarLista");


	anidarLista.addEventListener("click", mostrarForm);

	guardarLista.addEventListener("click", function(e){
		e.preventDefault();
		mostrarNameLista(inputLista, this);
		formulario.remove();
	});

	function mostrarForm(e){
		e.preventDefault();
		formulario.classList.remove("form");
		anidarLista.classList.add("ocultar");
		inputLista.focus();
	};

	function mostrarNameLista(inputLista, anidarLista){
		var subContenedor = document.getElementById("subContenedorTrello");
		var contentNameLista = document.createElement("div");
		var anidarTarjeta = document.createElement("button");

		contentNameLista.classList.add("tituloList");
		anidarTarjeta.classList.add("aTarjeta");

		contentNameLista.innerHTML = inputLista.value;
		anidarTarjeta.textContent = "Añadir una tarjeta...";

		var posicionNameLista = anidarLista.parentElement.parentElement;
		posicionNameLista.insertBefore(anidarTarjeta, posicionNameLista.childNodes[0]);
		posicionNameLista.insertBefore(contentNameLista, posicionNameLista.childNodes[0]);
		inputLista.value= "";
	}
	


});