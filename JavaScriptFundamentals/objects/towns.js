function convertTown(array) {

    let jsonStyle = [];
    let object = {};
    for (const elment of array) {
        let info = elment.split(' | ');
        let townName = info[0];
        let latitude = Number(info[1]).toFixed(2);
        let longtitude = Number(info[2]).toFixed(2);
        object.townName=townName;
        object.latitude=latitude;
        object.longtitude=longtitude;
        console.log(object);
        jsonStyle.push(info);
    }
    console.log(JSON.stringify(jsonStyle));
    
    
}
convertTown([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
