function movies(array){

    let finalObject = {};
    let addMovie = "addMovie";
    let directedBy = "directedBy";
    let onDate = "onDate";

    for (let i = 0; i < array.length; i++) {
        if(array[i].includes(addMovie)){
            let movieName = array[i].split('addMovie ')[1];
        }
    }
    console.log(finalObject);

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );