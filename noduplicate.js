function noDuplicate(array){
const unique=[];
    for (const item of array){
if(unique.includes(item) ===false){
    unique.push(item)
}
    }
    return unique;
}




const birianiKhore=['karim', 'rahim', 'jabbar', 'karim', 'rahim'];
const uniqueArray=noDuplicate(birianiKhore);
console.log(uniqueArray);


