function calcFactorial(n){
    let result = 1;
    while(n!=1){
        result*=n;
        n--;
    }
    console.log(result);
}
calcFactorial(5)