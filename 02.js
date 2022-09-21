/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

//  let  string = (['hi', 'hello', 'ni hao', 'guten tag']);
//   let  datos = (['JavaScript', 'HTML', 'CSS']);

function stringMasLarga(strings) {

  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
     
    str = strings.reduce(
      (acc,actual) => 
          actual.length > acc.length
            ?  actual : acc
    )

    return str;

}

// console.log(stringMasLarga(string));
// console.log(stringMasLarga(datos));


// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga