// variables
var theme = null; // theme
var rule1 = null; // 6 & 8 can touch
var rule2 = null; // 2 & 12 can touch
var rule3 = null; // same numbers can touch
var rule4 = null; // same resources can touch
var rule5 = null; // no triple same resource
var rule6 = null; // atleast one different neighbor
var pic_path = null; // tile picture path
var ore_types = ["desert", "brick", "ore", "sheep", "wheat", "wood"] // the types of ores

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
    pic_path = `/resources/img/${theme}/`;

    RandomShuffle();
}

// random number generator
function getRandom(min, max) { return Math.random() * (max - min) + min; }

// changes the picture on the selected div
function picChange(pic, num) {
    document.getElementById(`map_div_${num}`).style.backgroundImage = `url(${pic_path + pic}.png)`;
    if (pic == 'desert') {
        return true;
    }
}

// OnChange methods
{
    function SelectOnChange() {
        theme = document.getElementById("theme_selector").value;
        pic_path = `/resources/img/${theme}/`;
    }

    function CheckBoxOnChange1() { rule1 = document.getElementById("cb1").checked; }

    function CheckBoxOnChange2() { rule2 = document.getElementById("cb2").checked; }

    function CheckBoxOnChange3() { rule3 = document.getElementById("cb3").checked; }

    function CheckBoxOnChange4() { rule4 = document.getElementById("cb4").checked; }

    function CheckBoxOnChange5() { rule5 = document.getElementById("cb5").checked; }

    function CheckBoxOnChange6() { rule6 = document.getElementById("cb6").checked; }
}
