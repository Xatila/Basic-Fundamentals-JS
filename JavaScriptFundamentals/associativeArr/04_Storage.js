function storage(arr) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(" ");
    let product = info[0];
    let quantity = Number(info[1]);
    object.hasOwnProperty(product)
      ? (object[product] += quantity)
      : (object[product] = quantity);
  }
  for (const key in object) {
    console.log(key, "->", object[key]);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
