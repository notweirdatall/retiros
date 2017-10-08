function validateForm() {

  var formulario = document.getElementById('forma');
  var Nombre = document.forms['retiro']['Nombre'].value;
  var Apellido = document.forms['retiro']['Apellido'].value;
  var Cedula = document.forms['retiro']['Cedula'].value;
  var Carrera = document.forms['retiro']['Carrera'].value;
  var Semestre = document.forms['retiro']['Semestre'].value;
  var NombreAsignatura = document.forms['retiro']['Nombre de Asignatura'].value;
  var Codigo = document.forms['retiro']['Codigo'].value;
  var UC = document.forms['retiro']['UC'].value;
  var Motivo = document.forms['retiro']['Motivo'].value;



  /*
  * Validacion de que el nombre no este vacio 
  */
  if (Nombre == '' || ( Nombre.search(/ /ig)==0 && Nombre.length==1) ) {
  
    alert('Campo \'Nombre\' debe ser llenado');
    return false;
  
  }else{

    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( Nombre.search(/[^a-z-à-ü- ]/ig) != -1 ){
    
      alert("caracter no soportado en el nombre");
      return false;
    
    }
  }
  
  /*
  * Validacion de que no este vacio 
  */
  if (Apellido == '' || (Apellido.search(/ /ig)==0 && Apellido.length==1) ) {
  
    alert('Campo \'Apellido\' debe ser llenado');
    return false;
  
  }else{
  
    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( Apellido.search(/[^a-z-à-ü- ]/ig) != -1 ){
  
      alert("caracter no soportado en el apellido");
      return false;
  
    }
  }
  
  /*
  * validacion de ue sea un numero
  */
  if (isNaN(Cedula) || Cedula < 1) {
 
    alert('Campo \'Cedula\' debe ser llenado correctamente');
    return false;
  
  }
  
  /*
  * Validacion de que no este vacio 
  */
  if (Carrera == ''|| ( Carrera.search(/ /ig)==0 && Carrera.length==1) ) {
  
    alert('Campo \'Carrera\' debe ser llenado');
    return false;
  
  }else{
   
    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( Carrera.search(/[^a-z-à-ü- ]/ig) != -1 ){
   
      alert("caracter no soportado en la carrera");
      return false;
   
    }
  }

  /*
  * validacion de ue sea un numero
  */
  if (isNaN(Semestre) || Semestre < 1) {
   
    alert('Campo \'Semestre\' debe ser llenado correctamente');
    return false;
  
  }
  
  /*
  * Validacion de que no este vacio 
  */
  if (NombreAsignatura == ''|| ( NombreAsignatura.search(/ /ig)==0 && NombreAsignatura.length==1) ) {
  
    alert('Campo \'Nombre de Asignatura\' debe ser llenado');
    return false;
  
  }else{
  
    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( NombreAsignatura.search(/[^a-z-à-ü- ]/ig) != -1 ){
  
      alert("caracter no soportado en el nombre de la asignatura");
      return false;
  
    }
  }
  
  /*
  * Validacion de que no este vacio 
  */
  if (Codigo == ''|| ( Codigo.search(/ /ig)==0 && Codigo.length==1) ) {
   
    alert('Campo \'Codigo\' debe ser llenado');
    return false;
  
  }else{
    
    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( Codigo.search(/[^a-z-0-9- ]/ig) != -1 ){
    
      alert("caracter no soportado en el codigo");
      return false;
    
    }
  }
  
  /*
  * validacion de ue sea un numero
  */
  if (isNaN(UC) || UC < 1) {
  
    alert('Campo \'UC\' debe ser llenado correctamente');
    return false;
  
  }
  
  /*
  * Validacion de que no este vacio 
  */
  if (Motivo == ''|| ( Motivo.search(/ /ig)==0 && Motivo.length==1) ) {
  
    alert('Campo \'Motivo\' debe ser llenado');
    return false;
  
  }else{
    /*
    * validacion de que tenga los caracteres adecuados
    */
    if( Motivo.search(/[^a-z-à-ü-0-9-!-;-?-@- ]/ig) != -1 ){
  
      alert("caracter no soportado en el motivo");
      return false;
  
    }
  }  

}


function Retirar() {

  var formulario = document.getElementById('forma');
  var titulo = document.getElementById('titulo');
  formulario.style.display = 'block';
  titulo.style.display = 'none';

}
