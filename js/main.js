window.addEventListener("load", function (){

    var anidarLista = document.getElementById("anidarLista");
    var formulario = document.getElementById("formulario");
    var inputLista = document.getElementById("inputLista");
    var guardarLista = document.getElementById("btnGuardarLista");
    var subContenedor = document.getElementById("subContenedorTrello");

    anidarLista.addEventListener("click", mostrarForm);

    guardarLista.addEventListener("click", function(e){
        e.preventDefault();
        mostrarNameLista();
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

        contentNameLista.classList.add("tituloList");
        anidarTarjeta.classList.add("aTarjeta");

        contentNameLista.innerHTML = inputLista.value;
        anidarTarjeta.textContent = "Añadir una tarjeta...";

        anidarLista.parentElement.appendChild(anidarTarjeta);
        anidarLista.parentElement.insertBefore(contentNameLista, anidarLista.parentElement.childNodes[0]);
        inputLista.value = "";

        anidarTarjeta.addEventListener("click", function(e){
                e.preventDefault();
                anidarTarjeta.classList.add("ocultar");
                desplegarTarjeta(contentNameLista, anidarTarjeta);
        });
    }

    function agregarContenedorHijo(){
        var newSubContenedor = document.createElement("div");
        contenedorTrello.appendChild(newSubContenedor);
        newSubContenedor.classList.add("newSubContenedor");

        newSubContenedor.appendChild(anidarLista);
        newSubContenedor.appendChild(formulario);

        anidarLista.classList.remove("ocultar");
        formulario.classList.add("ocultar");
    }

    function desplegarTarjeta(contentNameLista, anidarTarjeta){
        var formTarjeta = document.createElement("div");
        formTarjeta.classList.add("formTarjeta");

        var textareaForm = document.createElement("textarea");
        formTarjeta.insertBefore(textareaForm, formTarjeta.childNodes[0]);
        textareaForm.classList.add("textareaF");
        textareaForm.focus();

        var btnTarjeta = document.createElement("button");
        formTarjeta.insertBefore(btnTarjeta, formTarjeta.childNodes[1]);
        btnTarjeta.classList.add("botonFormTar");
        btnTarjeta.setAttribute("type", "button")
        btnTarjeta.innerText = "Añadir";
        contentNameLista.parentElement.appendChild(formTarjeta);
        textareaForm.focus();

        btnTarjeta.addEventListener("click", function(e){
            e.preventDefault();
            agregarTarjeta(textareaForm, contentNameLista);
            anidarTarjeta.classList.remove("ocultar");
            formTarjeta.classList.add("ocultar");
        });
    }

    function agregarTarjeta(textareaForm, contentNameLista){
        var nameTarjeta = document.createElement("div");
        nameTarjeta.classList.add("nombreTar");
        nameTarjeta.innerText = textareaForm.value;

        var fondoTarjeta = document.createElement("div");
        fondoTarjeta.classList.add("fondoT");

        contentNameLista.parentElement.insertBefore(fondoTarjeta, contentNameLista.parentElement.childNodes[1]);
        fondoTarjeta.insertBefore(nameTarjeta, fondoTarjeta.childNodes[0]);
    }
    
});