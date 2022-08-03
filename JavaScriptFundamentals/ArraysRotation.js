function rotateArray(arrayToRotate, times){
    for (let i = 1; i <= times; i++) {
        let firstElement = arrayToRotate[0];
        arrayToRotate.push(firstElement);
        arrayToRotate.shift();   
    }
    console.log(arrayToRotate.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);