function calculate(type){
    let figure = type[0];
    if(figure=="square"){
        let side = Number(type[1]);
        let area = side*side;
        console.log(parseFloat(area.toFixed(3)));
    }else if(figure=="rectangle"){
        let sideA = Number(type[1]);
        let sideB = Number(type[2]);
        let area = sideA*sideB;
        console.log(parseFloat(area.toFixed(3)));
    }else if(figure=="circle"){
        let radius = Number(type[1]);
        let area = Math.PI*(radius*radius);
        console.log(parseFloat(area.toFixed(3)));
    }else{
        let side = Number(type[1]);
        let high = Number(type[2]);
        let area = side*high/2;
        console.log(parseFloat(area.toFixed(3)));
    }
}
calculate(["rectangle",
"7",
"2.5"])


