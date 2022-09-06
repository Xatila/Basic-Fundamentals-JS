function showAddreses(arr) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(":");
    let name = info[0];
    let address = info[1];
    object[name] = address;
  }
  let sorted = [];
  for (const key in object) {
    sorted.push([key, object[key]]);
  }
  sorted.sort((a, b) => {
    const nameA = a[0].toUpperCase();
    const nameB = b[0].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (const element of sorted) {
    console.log(element[0], "->", element[1]);
  }
}
showAddreses([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

showAddreses([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
