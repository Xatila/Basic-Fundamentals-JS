function mergeArrays(firstArray, secondArray){
        let thirdArray=[];
    for (let i = 0; i < firstArray.length; i++) {
        if(i%2==0){
            thirdArray.push(Number(firstArray[i])+Number(secondArray[i]));
        }else{
            thirdArray.push(String(firstArray[i]+String(secondArray[i])));
        }
        
    }
    console.log(thirdArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);