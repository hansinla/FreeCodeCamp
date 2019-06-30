function getFinalOpenedDoors(numDoors) {
    // Good luck!
    let len = 100;
    let doors = Array(len).fill(false);
    let step = 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0 + step - 1; j < len; j += step) {
            doors[j] = !doors[j];
        }
        step += 1;
    }

    let arr = [];
    for (let i = 0; i < len; i++) {
        if (doors[i] === true) {
            arr.push(i + 1);
            //console.log("Door " + (i + 1) + " : " + doors[i]);
        }
    }
    return arr;
}