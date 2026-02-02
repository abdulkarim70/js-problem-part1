const today = new Date();
console.log(today); // for find today date
const date = new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());
const speceficDate =new Date(2091, 0, 26)
console.log(speceficDate);
speceficDate.setMonth(11)
console.log(speceficDate.toLocaleString('en-GB'))
/// unix epoc