function sumUnique(arr, num){

    let arrayToEdit=[];
    for (let i = 0; i < arr.length; i++) {
        arrayToEdit=[];
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j]==num){
                arrayToEdit.push(arr[i]);
                arrayToEdit.push(arr[j]);
                console.log(arrayToEdit.join(' '));
                break;
            }
        }
        
    }

}
sumUnique([1, 7, 6, 2, 19, 23],8);
sumUnique([14, 20, 60, 13, 7, 19, 8],27)
sumUnique([1, 2, 3, 4, 5, 6],6)