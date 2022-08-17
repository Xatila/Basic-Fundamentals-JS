function isAmazing(number){

    let numAsString = String(number);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum+=Number(numAsString[i]);
    }
    let sumAsString = String(sum);
    sumAsString.includes('9')?console.log(`${number} Amazing? True`):console.log(`${number} Amazing? False`);
    // for (let j = 0; j < sumAsString.length; j++) {
    //     if(sumAsString[j]==='9'){
    //         console.log('true');
    //         return;
    //     }        
    // }
    // console.log('false');
}
 isAmazing([1233]);
 isAmazing([999]);