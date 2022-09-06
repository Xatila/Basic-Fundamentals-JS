function solve(input) {
  class Catalog {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    print() {
      console.log(`${this.name}: ${this.price}`);
    }
  }
  let catalogs = [];
  for (let i = 0; i < input.length; i++) {
    let currentProduct = input[i].split(":");
    let productName = currentProduct[0].trim();
    let productValue = currentProduct[1].trim();
    catalogs.push(new Catalog(productName, productValue));
  }

  catalogs.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < catalogs.length; i++) {
    let currentProp = catalogs[i];
    let currentName = currentProp.name;
    let currentLetter = currentName[0];
    let nextProp = catalogs[i + 1];
    let nextLetter = nextProp.name[0];
    if(currentLetter!==nextLetter){
      console.log(currentLetter);
      currentProp.print();
    }else{
      currentProp.print();
    }
  }
}
  solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ]);
