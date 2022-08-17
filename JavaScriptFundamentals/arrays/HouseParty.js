function party(names) {
  let list = [];
  for (let i = 0; i < names.length; i++) {
    let commands = names[i].split(" ");
    let name = commands[0];
    if (commands.length == 3) {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      if (list.indexOf(name) != -1) {
        list.splice(list.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(list.join("\n"));
}
// party([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
