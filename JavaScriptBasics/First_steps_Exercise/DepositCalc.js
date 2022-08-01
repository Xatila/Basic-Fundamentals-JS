function calculate(input){
    let depSum = Number(input[0]);
    let months = Number(input[1]);
    let yearPercent = Number(input[2]);
    let interest = (depSum*yearPercent)/100;
    let interestPerMonth = interest/12;
    let totalSum = depSum+months*interestPerMonth;
    console.log(totalSum);
}
calculate([200, 3, 5.7]);