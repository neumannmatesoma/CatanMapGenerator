// variables
var theme = null;
var rule1 = null; // 6 & 8 can touch
var rule2 = null; // 2 & 12 can touch
var rule3 = null; // same numbers can touch
var rule4 = null; // same resources can touch
var rule5 = null; // randomize ports
var rule6 = null; // atleast one different neighbor
var pic_path = null;
var ore_types = ["desert", "brick", "ore", "sheep", "wheat", "wood"];

// adjacency graph
const neighbors = {
    1: [2, 4, 5],
    2: [1, 3, 5, 6],
    3: [2, 6, 7],
    4: [1, 5, 8, 9],
    5: [1, 2, 4, 6, 9, 10],
    6: [2, 3, 5, 7, 10, 11],
    7: [3, 6, 11, 12],
    8: [4, 9, 13],
    9: [4, 5, 8, 10, 13, 14],
    10: [5, 6, 9, 11, 14, 15],
    11: [6, 7, 10, 12, 15, 16],
    12: [7, 11, 16],
    13: [8, 9, 14, 17],
    14: [9, 10, 13, 15, 17, 18],
    15: [10, 11, 14, 16, 18, 19],
    16: [11, 12, 15, 19],
    17: [13, 14, 18],
    18: [14, 15, 17, 19],
    19: [15, 16, 18]
};

// standard number distribution
const standardNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

// standard resource distribution
const standardResources = [
    'brick', 'brick', 'brick',
    'ore', 'ore', 'ore',
    'sheep', 'sheep', 'sheep', 'sheep',
    'wheat', 'wheat', 'wheat', 'wheat',
    'wood', 'wood', 'wood', 'wood',
    'desert'
];

// initialization of the game
function init() {
    // getting the current theme of the game
    theme = document.getElementById("theme_selector_id").value;

    // setting the path to load the tiles from
    pic_path = `/resources/img/${theme}/`;
    
    // getting what rules are currently in effect
    rule1 = getRule1();
    rule2 = getRule2();
    rule3 = getRule3();
    rule4 = getRule4();
    rule5 = getRule5();
    rule6 = getRule6();
    
    // shuffleing the board
    Shuffle();
}