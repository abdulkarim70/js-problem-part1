const numbers =[55,44,88,21,8,77,31];
const odd =[]
for( const number of numbers){
    if(number%2===0){
        odd.push(number)
    }
}
let sum=0;
for(const numb of odd){
sum=sum+numb;
}

console.log(sum)