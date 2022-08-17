function findEqualSum(array){

    let equalSum = false;

    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = i-1; j >= 0; j--) {
            leftSum+=array[j];
        }
        for (let k = i+1; k < array.length; k++) {
            rightSum+=array[k];
        }
        if(leftSum===rightSum){
            equalSum=true;
            console.log(i)
        }
    }if(!equalSum){
        console.log('no');
    }


}
findEqualSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
findEqualSum([1, 2, 3]);