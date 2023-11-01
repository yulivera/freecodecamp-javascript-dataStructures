function convertToRoman(num) {
    let roma = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4:"IV",
      1: "I"
    };
    // crear array , ordenado de mayor a menor  
     const valores = Object.keys(roma).sort((a, b) => b - a);
  
    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
      //mientras num sea >= a la clave numérica actual
      while (num >= valores[i]) {
        //Se agrega el equivalente en números romanos
        resultado += roma[valores[i]];
        //resta el valor numérico actual de num
        num -= valores[i];
      }
    }
    //console.log("result",resultado);
  
    return resultado;
  }
  
  convertToRoman(4);