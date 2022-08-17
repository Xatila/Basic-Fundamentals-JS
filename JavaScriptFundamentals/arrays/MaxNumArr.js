function findMax(array){

    let finalArray =[];
    
    for (let i = 0; i < array.length; i++) {
        let currentNum=array[i];
        let isBigger=true;
        for (let j = i+1; j < array.length; j++) {
            if(currentNum<=array[j]){
                isBigger=false;
            }  
        }
        if(isBigger){
            finalArray.push(currentNum);
        }
    }
    console.log(finalArray.join(' '));
}

findMax([27, 19, 42, 2, 13, 45, 48]);