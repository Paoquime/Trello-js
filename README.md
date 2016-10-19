# Trello-js

**Versión 0.0.1**

Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

**Desarrollo**

* Empezamos creando en el html un section, un subcontenedor y dentro de este un formulario que contenga un input y un boton, que luego sera escondido para las siguientes funciones.

![](http://i65.tinypic.com/2qsuecp.jpg)

**Versión 0.0.2**

Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjeta".

**Desarrollo**

* En el main.js creamos el evento "load" que estara atento a la carga de la pàgina, obtenemos los id de los elementos que seran asignados a las variables. Creo la funciòn mostrarForm que se ejecutara cuando el usuario haga click en el boton "añadir lista..."

![](http://i64.tinypic.com/33w4pwh.png)

**Versión 0.0.3**

Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.

**Desarrollo**

* Creamos la funciòn "agregarContenedorHijo" que contendra un nuevo div subcontenedor en el que se le asignara las funciòn "mostrarNameLista" con lo que se podra mostrar el boton "añadir lista" al lado.

![](http://i65.tinypic.com/2cf2ihk.jpg)


