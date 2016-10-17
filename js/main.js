window.addEventListener("load", function (){

	var anidarLista = document.getElementById("anidarLista");
	var formulario = document.getElementById("formulario");
	var inputLista = document.getElementById("inputLista");
	var guardarLista = document.getElementById("btnGuardarLista");

	anidarLista.addEventListener("click", mostrarForm);

	function mostrarForm(e){
		e.preventDefault();
		formulario.classList.remove("form");
		anidarLista.classList.add("ocultar");
		inputLista.focus();
	};

});