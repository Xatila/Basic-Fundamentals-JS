function sumArray(array){

    let originalArray = 0;
    let newArrayElements=[];
    let newArraySum = 0;
    for (let i = 0; i < array.length; i++) {
        originalArray+=Number(array[i]) ;
        if(array[i]%2==0){
            newArraySum+=Number(array[i]+i);
            newArrayElements.push(array[i]+i);
        }else{
            newArraySum+=Number(array[i]-i);
            newArrayElements.push(array[i]-i);
        }
    }
    console.log(`[ ${newArrayElements.join(', ')} ]`);
    console.log(originalArray);
    console.log(newArraySum);
}
sumArray(["5", "15", "23", 56, "35"]);
sumArray([-5, 11, 3, 0, 2]);