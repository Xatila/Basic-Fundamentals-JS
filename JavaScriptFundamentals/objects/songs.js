function playSong(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    print() {
      console.log(`${this.name}`);
    }
  }
  let songs = [];

  let numberOfSongs = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    let tokens = array[i].split("_");
    let listName = tokens[0];
    let musicName = tokens[1];
    let time = tokens[2];
    songs.push(new Song(listName, musicName, time));
  }
  for (const song of songs) {
    if (array[array.length] !== "all") {
        
    } else {
      song.print();
    }
  }
}
playSong([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
