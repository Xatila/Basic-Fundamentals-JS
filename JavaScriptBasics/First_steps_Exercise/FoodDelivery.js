function deliver(food){
    let pricePerChickenMenu = food[0]*10.35;
    let pricePerFishMenu = food[1]*12.40;
    let pricePerVeganMenu = food[2]*8.15;
    let priceOfMenues = pricePerChickenMenu+pricePerFishMenu+pricePerVeganMenu;
    let priceDessert = priceOfMenues*0.20;
    let price = priceOfMenues+priceDessert+2.50;
    console.log(price);
}
deliver([9, 2, 6]);