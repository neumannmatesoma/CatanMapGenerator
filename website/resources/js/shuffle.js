const possibility = [".", "..", "...", "....", ".....", "......"];

function Shuffle() {
    console.clear();

    // allocating resources randomly
    const resources = allocateResources();

    // allocating numbers
    const numbers = distributeNumbers(resources);

    // displaying the board
    DisplayBoard(resources, numbers);
}

// allocates resources following the rules
function allocateResources() {
    // the number of the current attempt
    let attempts = 0;
    // the number of the maximum attempts
    const maxAttempts = 10000;

    while (attempts < maxAttempts) {
        // increase the current attempt counter
        attempts++;

        // shuffling the resources
        const resources = shuffleArray([...standardResources]);
        
        // validating resources
        if (validateResourcePlacement(resources)) {
            console.log(`The resources were evenly distributed after ${attempts} attempts`);
            return resources;
        }
    }
    
    // fallback to default random shuffling if max attempts were exceeded
    showModal(`Failed to distribute resources evenly, reverted to random generized resources.\nPlease shuffle again if your are not satisfied with the board.`);
    return shuffleArray([...standardResources]);
}

// validates resource placement according to the rules
function validateResourcePlacement(resources) {
    // if rule4 is turned on, same resources can touch
    if (rule4) {
        return true; // no need to check
    }

    // checking if same resources are not touching
    for (let i = 0; i < 19; i++) {
        const currentResource = resources[i];
        const tileNeighbors = neighbors[i + 1];

        // checking all neighbors
        for (const neighbor of tileNeighbors) {
            const neighborIndex = neighbor - 1;
            const neighborResource = resources[neighborIndex];

            // skip if the neighbor doesn't have a resource yet
            if (neighborResource === undefined) continue;

            // if rule4 is turned off, same resources can't touch
            if (currentResource === neighborResource && currentResource !== 'desert') {
                return false;
            }
        }
    }

    return true; // all resources are placed correctly
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

    // Generate ports based on Rule 5
    if (getRule5()) { GenerateRandomPorts(); }
    else { GenerateBasePorts(); }
}

// placing numbers with regulations
function distributeNumbers(resources) {
    // 19 element long array which stores a possibility number for every tile
    const numbers = new Array(19).fill(null);
    // shuffling the possible numbers
    const shuffledNumbers = shuffleArray([...standardNumbers]);
    // searching for desert's position
    const desertIndex = resources.indexOf('desert');

    // the number of the current attempt
    let attempts = 0;
    // the number of the maximum attempts
    const maxAttempts = 10000;

    while (attempts < maxAttempts) {
        // increase the current attempt counter
        attempts++;

        // resetting numbers array on every attempt
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

        // if everything ok, check the new rule6 (Resource Diversity Rule)
        if (success) {
            if (rule6 && !checkResourceWidth(resources, numbers)) {
                success = false; // if rule6 fails, retry
            }
        }

        if (success) {
            console.log(`The numbers were evenly distributed after ${attempts} attempts`);
            return numbers;
        }

        // if something went wrong the numbers are reshuffled
        shuffleArray(shuffledNumbers);
    }

    // fallback to default, random shuffling if max attempts were exceeded
    showModal(`Failed to distribute evenly, reverted to random generized numbers.\nPlease shuffle again if your are not satisfied with the board.`);
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

// checks if each resource has at least two different numbers associated with it
function checkResourceWidth(resources, numbers) {
    const resourceNumbers = {
        'wood': new Set(),
        'brick': new Set(),
        'wheat': new Set(),
        'sheep': new Set(),
        'ore': new Set()
    };

    // iterate through the board to collect numbers for each resource
    for (let i = 0; i < 19; i++) {
        if (resources[i] === 'desert' || numbers[i] === null) continue; // skip desert and unassigned numbers
        if (!resourceNumbers.hasOwnProperty(resources[i])) {
            console.warn(`Unknown resource encountered: ${resources[i]} at index ${i}`);
            continue; // skip unknown resources to avoid error
        }
        resourceNumbers[resources[i]].add(numbers[i]);
    }

    // check if each resource has at least two different numbers
    for (let resource in resourceNumbers) {
        const uniqueNumbers = resourceNumbers[resource].size;
        console.log(`Resource ${resource} has ${uniqueNumbers} unique numbers: ${[...resourceNumbers[resource]].join(', ')}`);
        if (uniqueNumbers < 2) {
            console.log(`Rule 6 (Resource Diversity Rule) failed for ${resource}`);
            return false; // fails if any resource has fewer than 2 different numbers
        }
    }

    console.log("Rule 6 (Resource Diversity Rule) passed for all resources");
    return true; // passes if all resources have at least 2 different numbers
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

function showModal(message) {
    // Előző backdrop eltávolítása, ha van
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());

    // Biztosítsuk, hogy a modal ne legyen nyitva újra, ha már az
    const alertModalElement = document.getElementById('alertModal');
    const existingModal = bootstrap.Modal.getInstance(alertModalElement);
    if (existingModal) {
        existingModal.hide();
    }

    // Szöveg beállítása
    const modalBody = document.getElementById('alertModalBody');
    modalBody.textContent = message;

    // Új modal példány
    const modal = new bootstrap.Modal(alertModalElement);
    modal.show();

    // ✨ Modal zárásakor eltávolítjuk az esetlegesen ottmaradt háttér és tiltásokat
    alertModalElement.addEventListener('hidden.bs.modal', () => {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = 'auto';
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    }, { once: true }); // csak egyszer fusson le
}