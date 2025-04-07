// the id's of the base ports
var base_ports = ['sea-div-2', 'sea-div-4', 'sea-div-5', 'sea-div-8', 'sea-div-9', 'sea-div-12', 'sea-div-13', 'sea-div-16', 'sea-div-18'];

// generates the base ports, without any logic
function GenerateBasePorts() {
    // going through all the base (fixed place) divs
    for (i=0; i<base_ports.length; i++) {
        // generating the div's name with the index of the for loop --> ex.: sea-div-1
        var div = `sea-div-${base_ports[i].split('-')[2]}`;

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

// generates a port to a specific place (div_num's place)
function GeneratePort(div_num) {
    // generating the div's name --> ex.: sea-div-1
    var div = `sea-div-${div_num}`;

    // getting the previous rotation class --> eg.: sea-oneway-120
    // sea/port divs contains 3 classes split by space, the last one is the sea/port class
    var prev_rotation = document.getElementById(div).classList.toString().split(' ')[2];

    // setting the new rotation --> eg.: port-oneway-120
    // port class contains 3 section,the 2nd is the ammount of land edges (oneway/twoway) 
    // the 3rd is the rotation in degree --> port-oneway-120
    var new_rotation = `port-${prev_rotation.toString().split('-')[3]}`;

    //placing the port
    PlacePort(div, new_rotation, prev_rotation);
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