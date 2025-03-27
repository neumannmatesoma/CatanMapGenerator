// variables
var theme = null; // theme
var rule1 = null; // 6 & 8 can touch
var rule2 = null; // 2 & 12 can touch
var rule3 = null; // same numbers can touch
var rule4 = null; // same resources can touch
var rule5 = null; // randomize ports
var rule6 = null; // atleast one different neighbor
var pic_path = null; // tile picture path
var ore_types = ["desert", "brick", "ore", "sheep", "wheat", "wood"] // the types of ores

/*
var map = [
    [ 'sea-div-1', 'sea-div-2', 'sea-div-3', 'sea-div-4' ],
    [ 'sea-div-5', 'map-div-1', 'map-div-2', 'map-div-3', 'sea-div-6' ],
    [ 'sea-div-7', 'map-div-4', 'map-div-5', 'map-div-6', 'map-div-7', 'sea-div-8' ],
    [ 'sea-div-9', 'map-div-8', 'map-div-9', 'map-div-10', 'map-div-11', 'map-div-12', 'sea-div-10' ],
    [ 'sea-div-11', 'map-div-13', 'map-div-14', 'map-div-15', 'map-div-16', 'sea-div-12' ],
    [ 'sea-div-13', 'map-div-17', 'map-div-18', 'map-div-19', 'sea-div-14' ],
    [ 'sea-div-15', 'sea-div-16', 'sea-div-17', 'sea-div-18' ]
]
*/

// div --> map_div_%DIV_NUM%
// pic --> `url(/resources/img/${THEME}/"${PIC}.png)`

function init() {
    // initializing theme and options
    theme = document.getElementById("theme_selector_id").value;
    rule1 = document.getElementById("cb1_id").checked;
    rule2 = document.getElementById("cb2_id").checked;
    rule3 = document.getElementById("cb3_id").checked;
    rule4 = document.getElementById("cb4_id").checked;
    rule5 = document.getElementById("cb5_id").checked;
    rule6 = document.getElementById("cb6_id").checked;
    
    // IMPORTANT: if its opened from root folder (CatanMapGenerator)
    // then "/website/resources/img/${theme}/" is needed
    pic_path = `/resources/img/${theme}/`;


    Shuffle();
}
