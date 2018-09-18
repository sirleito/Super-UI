# Super-UI
Librería de estilos para javascript

Modo de uso

**SUI("#selector")**

Al llamar a la funcion SUI, y enviarle por parametro un string con la clase, etiqueta o id del elemento HTML en cuestion, se retornará un objeto iterable con los respectivos elementos.

Además, se puede cambiar el estilo de todos esos elementos sin necesidad de ciclos.

Con el método stl(), se puede enviar dos parametros de tipo string, o uno de tipo object y se verán esos cambios en el total de los elementos seleccionados previamente.

**SUI("selector").stl("lineHeight","200px")**

**SUI("selector").stl({
  "color":"red",
  "backgroundColor":"rgb(50,100,255)"
  })**


La biblioteca está recién nacida y necesita de tu colaboración para llegar al siguiente nivel.
