/*function StringSorter (inputString){
    let tobeSorted = inputString;
    tobeSorted = tobeSorted.split('').sort().join('');
    return tobeSorted;
} ?
*/

const StringSorter = inputstrang => inputstrang.split('').sort().join('');

let Strang = 'supercalifragilisticexpialidocious';

console.log(StringSorter(Strang));