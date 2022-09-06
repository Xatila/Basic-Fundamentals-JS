function checkParking(input) {
  let parking = new Map();
  let sortedParking = [];
  for (let i = 0; i < input.length; i++) {
    let car = input[i].split(", ");
    let carNumber = car[1];
    if (car[0] == "IN") {
      parking.set(carNumber, i);
    } else {
      parking.delete(carNumber);
    }
  }
  for (const key of parking) {
    sortedParking.push(key[0]);
  }
  sortedParking.sort();
  if (sortedParking.length > 0) {
    for (const car of sortedParking) {
      console.log(car);
    }
  }else{
    console.log("Parking Lot is Empty");
  }
}
checkParking([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
checkParking([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);
