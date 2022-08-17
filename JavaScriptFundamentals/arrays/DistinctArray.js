function makeArrayDistinct(array) {

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    for (let j = i+1; j < array.length; j++) {
        let currentNum2 = array[j];
      if (currentNum == currentNum2) {
        array.splice(j,1);
        j--;
      }
    }
  }
  console.log(array.join(' '));
}
makeArrayDistinct([20, 8, 12, 13, 4, 4, 8, 5]);

// function simpleWay(array){
//     let arrayToPrint = [];
//     for (let num of array) {
//         if(!arrayToPrint.includes(num)){
//             arrayToPrint.push(num);
//         }
//     }
//     console.log(arrayToPrint.join(' '));
// }
// simpleWay([20, 8, 12, 13, 4, 4, 8, 5]);