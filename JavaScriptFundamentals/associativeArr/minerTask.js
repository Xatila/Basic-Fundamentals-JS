function minior(input) {
  let object = {};
  for (let i = 0; i < input.length; i += 2) {
    let material = input[i];
    if (!object.hasOwnProperty(material)) {
      object[material] = 0;
    }
    for (let j = i; j < input.length; j++) {
      let quantity = Number(input[j + 1]);
      if (material == input[j]) {
        object[material] += quantity;
        break;
      }
    }
  }
  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
minior(["Gold", "155", "Silver", "10", "Copper", "17"]);
//minior(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
