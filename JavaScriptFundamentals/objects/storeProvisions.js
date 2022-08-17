function calculate(localStore, delivery) {

  let printObj = {};
  for (let i = 0; i < localStore.length; i+=2) {
    let currentProduct = localStore[i];
    let currentQuantity = Number(localStore[i+1]);
    printObj[currentProduct] = currentQuantity;
  }
  for (let j = 0; j < delivery.length; j+=2) {
    let currentProduct = delivery[j];
    let currentQuantity = Number(delivery[j+1]);
    if(!printObj.hasOwnProperty(currentProduct)){
        printObj[currentProduct]=0;
    }
    printObj[currentProduct]+=currentQuantity;
  }
  console.log(printObj);
  for (const key in printObj) {
    console.log(`${key} -> ${printObj[key]}`);
  }
}
calculate(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
