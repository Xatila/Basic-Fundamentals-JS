const timePerProject = 3;
function calculateTime(input){
    let name = input[0];
    let count = input[1];
    let time = count*timePerProject;
    console.log(`The architect ${name} will need ${time} hours to complete ${count} project/s.`);
}
calculateTime(["Kevin", 2])