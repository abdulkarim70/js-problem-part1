function incToFeet (inch){
const feet=inch/12;
return feet;
}
const shuvo =incToFeet(70)
// console.log('shuvo er height', shuvo);

function incToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch%12;
    const result = feetNumber +' ft, ' + inchRemaining+' inch. ';
    return result;
}
const shuvoheight= incToFeet2(75);
// console.log(shuvoheight);

function mileToKillometer(mile){
const killo= mile *1.609344;
return killo;
}