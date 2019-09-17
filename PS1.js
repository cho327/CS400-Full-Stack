function StringSorter (inputString){
    let tobeSorted = inputString;
    tobeSorted = tobeSorted.split('').sort().join('');
    return tobeSorted;
}

let Strang = 'supercalifragilisticexpialidocious';

console.log(StringSorter(Strang));