/// year will be leapyear if the year is divisible by 4
function isLeapyear (year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
const check =isLeapyear(2028);
// console.log(check);
function isLeapYear2(year){
    if(year% 100!==0 && year%4==0){
        return true;
    }
    if(year%100===0 && year%400){
        return true;
    }
    else{
        return false;
    }
}
const isLeapyear1 =isLeapYear2(2028);
const isLeapyear2 =isLeapYear2(2021);
const isLeapyear3 =isLeapYear2(2040);
const isLeapyear4 =isLeapYear2(2070);
console.log(isLeapyear1, isLeapyear2,isLeapyear3, isLeapyear4);

