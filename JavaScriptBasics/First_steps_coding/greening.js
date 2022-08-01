function makeGreen(input){
    const pricePerMeter = 7.61;
    let meters = input[0];
    let price = pricePerMeter*meters;
    const discount = 0.18;
    let priceWithDiscount = price*discount;
    let finalPrice = price-priceWithDiscount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${priceWithDiscount} lv.`)
}
makeGreen([150]);   