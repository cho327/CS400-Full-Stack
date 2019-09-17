function StringDecipher (input){
    let funct= input;
    funct = funct.split('');
    return eval(funct[0] + funct[1] + funct[2]);
   /* let operator = funct[1];
    return funct[0] +'operator'+ funct[2]; */
}

let Strang = '4+2';
console.log(Strang);
console.log(StringDecipher(Strang));