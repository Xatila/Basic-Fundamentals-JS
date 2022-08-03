function findLongest(array){

    let arrayToEdit=[];
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        let arrayToEdit=[];
        for (let j = i; j < array.length; j++) {
            array[i]===array[j]?arrayToEdit.push(array[j]):j=array.length;
            
        }
     if(arrayToEdit.length>finalArray.length){
        finalArray=arrayToEdit;
     }   
    }
    console.log(finalArray.join(' '));
}
findLongest([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findLongest([0, 1, 1, 5, 2, 2, 6, 3, 3]);