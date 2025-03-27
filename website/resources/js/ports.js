var base_ports = ['sea-div-2', 'sea-div-4', 'sea-div-5', 'sea-div-8', 'sea-div-9', 'sea-div-12', 'sea-div-13', 'sea-div-16', 'sea-div-18'];

function GenerateBasePorts() {
    for (i=0; i<base_ports.length; i++) {
        var div = `sea-div-${base_ports[i].split('-')[2]}`;
        var prev_rotation = document.getElementById(div).classList.toString().split(' ')[2];
        var new_rotation = `port-${prev_rotation.toString().split('-')[3]}`;

        PlacePort(div, new_rotation, prev_rotation);
    }
}

function PlacePort(div, div_new_rotation, div_prev_rotation) {
    document.getElementById(div).classList.remove(div_prev_rotation);
    document.getElementById(div).classList.add(div_new_rotation);
}

function PlaceSea(div, div_new_rotation, div_prev_rotation) {
    document.getElementById(div).classList.remove(div_prev_rotation);
    document.getElementById(div).classList.add(div_new_rotation);
}