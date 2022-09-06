function meet(meetings) {
  let object = {};
  for (let i = 0; i < meetings.length; i++) {
    let info = meetings[i].split(" ");
    let day = info[0];
    let name = info[1];
    if (!object.hasOwnProperty(day)) {
      object[day] = name;
      console.log("Scheduled for", day);
    } else {
      console.log("Conflict on", day.toString());
    }
  }
  for (const key in object) {
    console.log(key, "->", object[key]);
  }
}
meet(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
