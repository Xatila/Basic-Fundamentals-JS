function isPalindrome(numbers){
    for (let i = 0; i < numbers.length; i++) {
        console.log(checkNum(numbers[i]));
    }
    function checkNum(num){
        let startNum = num.toString().split('').reverse();
        let endNum = num.toString().split('');
        return startNum[0]===endNum[0]?'true':'false';
    }
}
//isPalindrome([123,323,421,121]);
isPalindrome([32,2,232,1010]);