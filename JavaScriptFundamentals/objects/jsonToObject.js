function convert(json) {

    let PersonInfo = JSON.parse(json);
    for (const key of Object.keys(PersonInfo)) {
        console.log(`${key}: ${PersonInfo[key]}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
