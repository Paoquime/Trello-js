	
window.addEventListener("load", function (){

	var anidarLista = document.getElementById("anidarLista");
	var formulario = document.getElementById("formulario");
	var inputLista = document.getElementById("inputLista");
	var guardarLista = document.getElementById("btnGuardarLista");
	var subContenedor = document.getElementById("subContenedorTrello");


	anidarLista.addEventListener("click", mostrarForm);

	guardarLista.addEventListener("click", function(e){
		e.preventDefault();
		mostrarNameLista(this);
		agregarContenedorHijo();
	});

	function mostrarForm(e){
		e.preventDefault();
		anidarLista.classList.add("ocultar");
		formulario.classList.remove("form");
		formulario.classList.remove("ocultar");
		inputLista.focus();
	}


	function mostrarNameLista(boton){
		var contentNameLista = document.createElement("div");
		var anidarTarjeta = document.createElement("button");
		var contenedorPadre = boton.parentElement.parentElement;
		
		contentNameLista.classList.add("tituloList");
		anidarTarjeta.classList.add("aTarjeta");

		contentNameLista.innerHTML = inputLista.value;
		anidarTarjeta.textContent = "Añadir una tarjeta...";

		contenedorPadre.insertBefore(anidarTarjeta, contenedorPadre.childNodes[0]);
		contenedorPadre.insertBefore(contentNameLista, contenedorPadre.childNodes[0]);
		inputLista.value = "";

		anidarTarjeta.addEventListener("click", function(e){
				e.preventDefault();
				agregarTarjeta(this.parentNode);
				anidarTarjeta.remove();
		});
	}

	function agregarContenedorHijo(){
		var newSubContenedor = document.createElement("div");
		contenedorTrello.appendChild(newSubContenedor);
		newSubContenedor.classList.add("newSubContenedor");

		newSubContenedor.insertBefore(anidarLista, newSubContenedor.childNodes[0]);
		newSubContenedor.insertBefore(formulario, newSubContenedor.childNodes[1]);

		anidarLista.classList.remove("ocultar");
		formulario.classList.add("ocultar");
	}

	function agregarTarjeta(contenedorPadre){
		var formTarjeta = document.createElement("form");
		contenedorPadre.appendChild(formTarjeta);
		formTarjeta.classList.add("formTarjeta");

		var textareaForm = document.createElement("textarea");
		formTarjeta.appendChild(textareaForm);
		textareaForm.classList.add("textareaF");
		textareaForm.focus();

		var btnTarjeta = document.createElement("button");
		btnTarjeta.setAttribute("type", "button");
		formTarjeta.appendChild(btnTarjeta);
		btnTarjeta.classList.add("botonFormTar");
		btnTarjeta.innerText = "Añadir";
	}
		
});

