function sortIt(arr){
    let bigToSmall = arr.sort((a,b)=>a-b);
    let arrToPrint = [];
    while(bigToSmall.length>0){
        let first = bigToSmall.shift();
        let last = bigToSmall.pop();
        arrToPrint.push(last);
        arrToPrint.push(first);
    }
    console.log(arrToPrint);
    
}
sortIt([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);