/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

      var arregloDeArreglos = [];

      for (var clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
          var arreglo = [clave, objeto[clave]];
          arregloDeArreglos.push(arreglo);
        }
      }
    
      return arregloDeArreglos;
    
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
     var objeto = {};

     for (let i = 0 ; i < string.length ; i++ ){
      var letra = string[i];
      if(objeto[letra]){
         objeto[letra]++;
      }else{
         objeto[letra] = 1 ;
      }
     }

     var palametrosOrganziados = Object.keys(objeto).sort();
     var objetoAlfabetico = {};

     for (var key of palametrosOrganziados){
       objetoAlfabetico[key] = objeto[key]; 
     }

     return objetoAlfabetico;


}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var newString = '';
   var mayusculas = '';
   var minusculas = '';

   for (var i = 0 ; i < string.length ; i++){
      var caracter = string[i];
      if (caracter >= 'A' && caracter <= 'Z'){
         mayusculas += caracter;
      }else{
         minusculas += caracter;
      }
   }

   newString = mayusculas + minusculas;

   return newString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
  var nuevaFrase = [];

  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    var palabraAlReves = '';

    for (var j = palabra.length - 1; j >= 0; j--) {
      palabraAlReves += palabra[j];
    }

    nuevaFrase.push(palabraAlReves);
  }

  return nuevaFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var num = numeroString.split('').reverse().join('');

   if (num === numeroString){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   return string.replace(/[abc]/gi, '');

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
  
   var newArray = array1.filter(elemento => array2.includes(elemento));
   
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
