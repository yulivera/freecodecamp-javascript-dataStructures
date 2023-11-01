function rot13(str) {
    // array de abecedario
    let abecedario = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    let cifrado = "";
    
    let newArr = str.split("")
    //console.log(newArr);
    for(let i = 0; i < newArr.length;i++){
    let actual = "";
    // indice actual de la letra en abecedario
    actual = abecedario.indexOf(String(newArr[i]));
    // desplazamiento 13 pasos, en el rango
    let nuevo = (actual + 13) % abecedario.length;
    // si no esta en el abecedario
    if(actual < 0){
      // agregar sin cifrar
     cifrado += newArr[i]
    }else{
     cifrado += abecedario[nuevo]
    }
    }
    console.log("cifrado",cifrado);
    return cifrado;
  }
  
  rot13("SERR PBQR PNZC");