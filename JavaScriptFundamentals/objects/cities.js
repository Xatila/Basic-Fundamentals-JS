function pretyCity(object) {

  for (const param of Object.keys(object)) {
    console.log(`${param} -> ${object[param]}`);
  }
}
pretyCity({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
