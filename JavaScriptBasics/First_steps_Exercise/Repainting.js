function repaint(input){
    let sumPerPlastic = Number((input[0]+2))*1.5;
    let sumPerPaint = Number(((input[1]*0.10))+Number(input[1]))*14.50;
    let sumPerMixer = Number(input[2])*5;
    let materialsSum = sumPerMixer+sumPerPaint+sumPerPlastic+0.40;
    let sumPerWorkers = (materialsSum*0.30)*input[3];
    console.log(sumPerWorkers+materialsSum);
}
repaint([5,10,10,1]);