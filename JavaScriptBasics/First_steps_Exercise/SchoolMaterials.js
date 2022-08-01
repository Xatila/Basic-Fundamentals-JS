//	Пакет химикали - 5.80 лв. 
//	Пакет маркери - 7.20 лв. 
//	Препарат - 1.20 лв (за литър)
function calculate(input){
    const penPack = 5.80;
    const markerPack = 7.20;
    const cleaner1L = 1.20;

    let countPens = input[0];
    let countMarkers = input[1];
    let countLiters = input[2];
    let discount = input[3];
    let pricePerPens = countPens*penPack;
    let pricePerMarkers = countMarkers*markerPack;
    let pricePerCleaner = cleaner1L*countLiters;
    let totalPrice = pricePerCleaner+pricePerMarkers+pricePerPens;
    let pirceWithDiscount = totalPrice-(totalPrice*discount/100);
    console.log(pirceWithDiscount);
}
calculate([2, 3, 4, 25]);
