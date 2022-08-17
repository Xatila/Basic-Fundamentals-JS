function trainGoes(input){
    let wagons = input[0].split(' ');
    let capacity = input[1];
    for (let com = 2; com < input.length; com++) {
        let command = input[com].split(' ');
        if(command[0]==="Add"){
            wagons.push(command[1]);
        }else{
         for (let i = 0; i < wagons.length; i++) {
            if(Number(wagons[i])+Number(command[0])<=capacity){
                wagons[i] = Number(wagons[i])+Number(command[0]);
                break;
            }
        }
    }
    }
    console.log(wagons.map(Number).map(w=>w+2).join(' '));
}
trainGoes(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
// trainGoes(['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6']
// )