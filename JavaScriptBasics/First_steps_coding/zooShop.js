function calculate(input){
    const pricePerDogFood = 2.50;
    const pricePerCatFood = 4;
    let countDogFood = input[0];
    let countCatFood = input[1];
    console.log(countCatFood*pricePerCatFood+countDogFood*pricePerDogFood+" lv.");
}
calculate([13, 9]);