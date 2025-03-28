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

// div --> map_div_%DIV_NUM%
// pic --> `url(/resources/img/${THEME}/"${PIC}.png)`

function init() {
    // initializing theme and options
    theme = document.getElementById("theme_selector_id").value;
    
    // IMPORTANT: if its opened from root folder (CatanMapGenerator)
    // then "/website/resources/img/${theme}/" is needed
    pic_path = `/resources/img/${theme}/`;


    Shuffle();
}
