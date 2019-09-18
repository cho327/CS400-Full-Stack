/*
function passFunction (stringInput,funct){
    return funct(stringInput);
}
*/

const passFunction = (inputString,funct) => funct(inputString);

/*
function splitString (strinput){
    return strinput.split(/(?=c)/g);
}
*/

const splitString = strinput => strinput.split(/(?=c)/g);

const replaceString = leINPUT => {
    let OG = leINPUT;
    let Mutant = leINPUT.replace(/a/g,'A');
    let number_replaced = leINPUT.match(/a/g).length;
    let Mutant_len = Mutant.length;
    console.log('original String:   ' + OG);
    console.log('modified String:   ' + Mutant);
    console.log('number replaced:   ' + number_replaced);
    console.log('length o String:   ' + Mutant_len);
};

console.log(passFunction('supercalifragilisticexpialidocious',splitString));
console.log(passFunction('supercalifragilisticexpialidocious',replaceString));