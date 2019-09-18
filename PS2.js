/*function StringDecipher (input){
    let funct= input;
    funct = funct.split('');
    return eval(funct[0] + funct[1] + funct[2]);
   /* let operator = funct[1];
    return funct[0] +'operator'+ funct[2];
}
*/
// Fat Arrow notation of above
const StringDecipher2 = input => {input.split('');
    return eval(input[0] + input[1] + input[2]);
};

let String1 = '4+2';
let String2 = '5*7';
let String3 = '6-1';
let String4 = '9/2';

console.log(StringDecipher2(String1));
console.log(StringDecipher2(String2));
console.log(StringDecipher2(String3));
console.log(StringDecipher2(String4));