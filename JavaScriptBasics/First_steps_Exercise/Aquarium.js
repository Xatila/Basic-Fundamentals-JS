function calculate(input){
    let tankVolume = input[0]*input[1]*input[2];
    let volumeInL = tankVolume/1000;
    let busySpace = input[3]/100;
    let output = volumeInL*(1-busySpace);
    console.log(output);
}
calculate([105, 77, 89, 18.5]);