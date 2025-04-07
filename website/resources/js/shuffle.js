const possibility = [".", "..", "...", "....", ".....", "......"];

function Shuffle() {
    console.clear();

    // allocating resources randomly
    const resources = shuffleArray([...standardResources]);

    // allocating numbers
    const numbers = distributeNumbers(resources);

    // displaying the board
    DisplayBoard(resources, numbers);

}

// displays the whole board
function DisplayBoard(resources, numbers) {
    // iterating through all divs
    for (let i = 1; i <= 19; i++) {
        // getting a resource's number
        const resource = resources[i - 1];

        // getting a possibility number
        const number = numbers[i - 1];

        // changing the picture
        PicChange(resource, i);

        if (resource === 'desert') {
            // unloading possibility number if the tile is desert
            UnloadNumberForDesert(i);
        } else {
            // loading possibility
            document.getElementById(`map_div_${i}_num`).innerHTML = number;
            // setting the background of the possibility and dice odd
            document.getElementById(`map_div_${i}_back`).style.backgroundImage = 'url(/resources/img/back.png)';
            // setting dice odds
            document.getElementById(`map_div_${i}_dot`).innerHTML = possibility[RollCalculator(number) - 1];
        }
    }

    // generating ports
    GenerateBasePorts();
}

// placing nunbers with regulations
function distributeNumbers(resources) {
    // 19 element long array which stores a possibility number for every tile
    const numbers = new Array(19).fill(null);
    // shuffleing the possible numbers
    const shuffledNumbers = shuffleArray([...standardNumbers]);
    // searching for desert's position
    const desertIndex = resources.indexOf('desert');

    // the number of the current attempt
    let attempts = 0;
    // the number of the maximum attempts
    const maxAttempts = 100;

    while (attempts < maxAttempts) {
        // increase the current attempt counter
        attempts++;

        // reseting numbers array on every attempt
        // restarting the distribution of numbers
        numbers.fill(null);
        let success = true;
        let numIndex = 0;

        for (let i = 0; i < 19; i++) {
            // skipping desert
            if (i === desertIndex) continue;

            // distributing the next number
            const currentNumber = shuffledNumbers[numIndex++];
            numbers[i] = currentNumber;

            // validating the number via rules
            if (!validateNumberPlacement(i, numbers)) {
                success = false;
                break;
            }
        }

        // if everything ok logging success and how much attempts it took
        if (success) {
            console.log(`Számok elosztva ${attempts} próbálkozás után`);
            return numbers;
        }

        // if something went wrong the numbers are reshuffled
        shuffleArray(shuffledNumbers);
    }

    // fallback to default, random shuffleing if max attempts were exceeded
    console.warn("Nem sikerült tökéletes elosztás, visszaesés alapértelmezettre");
    numbers.fill(null);
    let numIndex = 0;
    for (let i = 0; i < 19; i++) {
        if (resources[i] !== 'desert') {
            numbers[i] = shuffledNumbers[numIndex++];
        }
    }
    return numbers;
}

// checks if the placement of numbers is good
function validateNumberPlacement(index, numbers) {
    // getting the current number and its neighbors
    const currentNumber = numbers[index];
    const tileNeighbors = neighbors[index + 1];

    // checking all neighbors
    for (const neighbor of tileNeighbors) {
        const neighborIndex = neighbor - 1;
        const neighborNumber = numbers[neighborIndex];

        if (neighborNumber === null) continue; // empty field

        // if rule1 is turned off 6&8 can't touch
        if (!rule1 && ((currentNumber === 6 && neighborNumber === 8) ||
            (currentNumber === 8 && neighborNumber === 6))) {
            return false;
        }

        // if rule2 is turned off 2&12 can't touch
        if (!rule2 && ((currentNumber === 2 && neighborNumber === 12) ||
            (currentNumber === 12 && neighborNumber === 2))) {
            return false;
        }

        // if rule3 is turned off the same number can't touch
        if (!rule3 && currentNumber === neighborNumber) {
            return false;
        }
    }

    return true; // everything is good, all rules are met
}

// shuffles an array
function shuffleArray(array) {
    // shuffle algorithm 
    for (let i = array.length - 1; i > 0; i--) {
        // getting a random index
        const j = Math.floor(Math.random() * (i + 1));
        // switching the values of the index
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// returns the dice odd of the given number
function RollCalculator(num) {
    const rollValues = {
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6,
        8: 5,
        9: 4,
        10: 3,
        11: 2,
        12: 1
    };
    return rollValues[num];
}