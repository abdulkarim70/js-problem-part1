function oddAverage (numbers){
    const odds =[]; ///blank array for odd number
for( const number of numbers){
  if(number%2===1){
    odds.push(number)
  }
}
// console.log(odds)
let sum=0;
for(const number of odds){
sum=sum+number;
}
const len =odds.length
const average=sum/len;

return average
}
const numbers=[42,13,58,65,81,7, 96];
const average = oddAverage(numbers);
console.log('average of odd number is', average)

