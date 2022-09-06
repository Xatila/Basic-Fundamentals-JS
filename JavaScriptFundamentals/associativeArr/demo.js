// let maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[0] - b[0];
// });
// console.log(...sortable);
function hello(input){
    for (const element of input) {
        //ДЕСТРУКТОРИРАНЕ!
        let [phrase, personName]=element.split(', ');
        console.log(personName);
    }

}
hello(['hi, Kevin','hi, John']);