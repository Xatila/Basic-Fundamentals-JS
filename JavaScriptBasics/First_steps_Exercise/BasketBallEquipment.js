function calculate(input){
    let priceShoes = Number(input[0])*0.60;
    let priceOutfit = priceShoes*0.80;
    let priceBall = priceOutfit/4;
    let priceAccessoaries = priceBall/5;
    let totalSum = input[0]+priceAccessoaries+priceBall+priceOutfit+priceShoes;
    console.log(totalSum);
}
calculate([365]);