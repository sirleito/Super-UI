(function(window){
  const document  = window.document,
      navigator = window.navigator,
      location  = window.location;
 //objeto con metodos provados
  let private = {
    //identificar el tipo de dato
    toType : function(obj) {
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
  }
  //funcion para recorrer el array y aplicar los estilos
  let ciclo = function(el, stl, val){
  	const stls = {
  		color:function(el, val){el.style.color=val},
  		bColor:function(el, val){el.style.backgroundColor=val}
  	}
  	const cant = el.length
  	for(var i=0;i<cant;i++){
  		stls[stl](el[i],val)
  	}
  }
  //Declaracion de la funcion principal
  let SUI = function(el){
  //validación del tipo de dato
 	if (!(private.toType(el) == "string")) {
    console.log("tiene que ser un string")
  }else{
   	// let element = document.querySelector(el)
   	let elements=document.querySelectorAll(el)

      let core={
        stl:function(stl,val){ciclo(elements,stl, val)}
      };   
      return core;
    }
  }; 
  window.SUI = SUI;
})(window);
