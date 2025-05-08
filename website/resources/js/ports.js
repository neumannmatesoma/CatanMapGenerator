// the id's of the base ports
var base_ports = ['sea-div-2', 'sea-div-4', 'sea-div-5', 'sea-div-8', 'sea-div-9', 'sea-div-12', 'sea-div-13', 'sea-div-16', 'sea-div-18'];
var new_ports = [];

// generates the base ports, without any logic
function GenerateBasePorts() {
    // going through all the base (fixed place) divs
    for (i = 0; i < base_ports.length; i++) {
        // generating the div's name with the index of the for loop --> ex.: sea-div-1
        var div = `sea-div-${base_ports[i].split('-')[2]}`;

        // getting the previous rotation class --> eg.: sea-oneway-120
        // sea/port divs contains 3 classes split by spaces, the last one is the sea/port class
        var prev_rotation = document.getElementById(div).classList.toString().split(' ')[2];

        // setting the new rotation --> eg.: port-oneway-120
        // port class contains 3 section,the 2nd is the ammount of land edges (oneway/twoway) 
        // the 3rd is the rotation in degree --> port-oneway-120
        var new_rotation = `port-${prev_rotation.toString().split('-')[1]}-${prev_rotation.toString().split('-')[2]}`;

        // placing the port
        PlacePort(div, new_rotation, prev_rotation);
    }
}

// generates a port to a specific place (div_num's place)
function GenerateRandomPorts() {
    // Reset all positions to sea before placing new ports
    for (let i = 1; i <= 18; i++) {
        var div = `sea-div-${i}`;
        var prev_rotation = document.getElementById(div).classList.toString().split(' ')[2];
        var sea_rotation = `sea-${prev_rotation.toString().split('-')[1]}-${prev_rotation.toString().split('-')[2]}`;
        PlaceSea(div, sea_rotation, prev_rotation);
    }

    new_ports = [];

    // Generating the places of the new random ports
    var i = 0;
    while (i != 9) {
        var div_num = getRandom(1, 18);

        if (!new_ports.includes(div_num)) {
            new_ports.push(div_num);
            i++;
        }
    }

    for (i = 0; i < new_ports.length; i++) {
        // generating the div's name with the index of the for loop --> ex.: sea-div-1
        var div = `sea-div-${new_ports[i]}`;

        // getting the previous rotation class --> eg.: sea-oneway-120
        // sea/port divs contains 3 classes split by space, the last one is the sea/port class
        var prev_rotation = document.getElementById(div).classList.toString().split(' ')[2];

        // setting the new rotation --> eg.: port-oneway-120
        // port class contains 3 section,the 2nd is the ammount of land edges (oneway/twoway) 
        // the 3rd is the rotation in degree --> port-oneway-120
        var new_rotation = `port-${prev_rotation.toString().split('-')[1]}-${prev_rotation.toString().split('-')[2]}`;

        // placing the port
        PlacePort(div, new_rotation, prev_rotation);
    }
}

// places a port tile onto the given div
function PlacePort(div, div_new_rotation, div_prev_rotation) {
    // removes the given div's rotation class
    document.getElementById(div).classList.remove(div_prev_rotation);

    // adds the new port class onto the given div
    document.getElementById(div).classList.add(div_new_rotation);
}

// places a sea tile onto the given div
function PlaceSea(div, div_new_rotation, div_prev_rotation) {
    // removes the given div's port class
    document.getElementById(div).classList.remove(div_prev_rotation);

    // adds the new sea class onto the given div
    document.getElementById(div).classList.add(div_new_rotation);
}

// utility function to generate random number between min and max (inclusive)
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}