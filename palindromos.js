function palindrome(str) {
  //convertir minuscula
  str = str.toLowerCase();
  // eliminar caracteres no alfanumericos
  str =  str.replace(/[^a-zA-Z0-9]/g,'')
  // compara cadena original con invertida
  return str === str.split("").reverse().join("");

}

palindrome("eye");