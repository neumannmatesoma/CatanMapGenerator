// changes the picture on the selected div
function PicChange(pic, num) {
    document.getElementById(`map_div_${num}`).style.backgroundImage = `url(${pic_path + pic}.png)`;
}


// unloads numbers from desert
function UnloadNumberForDesert(i) {
    document.getElementById(`map_div_${i}_back`).style.backgroundImage = 'none';
    document.getElementById(`map_div_${i}_num`).innerHTML = ' ';
    document.getElementById(`map_div_${i}_dot`).innerHTML = ' ';
}

// random number generator
function getRandom(min, max) { return Math.floor(Math.random() * (max - min) + min); }

// information display
function InformationDisplay() {
    showModal('Information', 
        `<b>About the rules</b><br>˛` + 
            `<span style="font-weight: bold; color: #333;">➤</span> <b>6 & 8 can touch:</b> 6 and 8 number tiles can be placed next to each other.<br>`+
            `<span style="font-weight: bold; color: #333;">➤</span> <b>2 & 12 can touch:</b> 2 and 12 number tiles can be placed next to each other.<br>`+
            `<span style="font-weight: bold; color: #333;">➤</span> <b>Same numbers can touch:</b> Identical numbers can be placed on adjacent tiles.<br>`+
            `<span style="font-weight: bold; color: #333;">➤</span> <b>Same resources can touch:</b> Same resource tiles (e.g., wheat, wood) can be placed next to each other.<br>`+
            `<span style="font-weight: bold; color: #333;">➤</span> <b>Randomize ports:</b> Ports are placed randomly on the board.<br>`+
            `<span style="font-weight: bold; color: #333;">➤</span> <b>Varied resource numbers:</b> Different numbers are assigned to tiles of the same resource for balance.`
        );
}

// getter for rule checkboxes
function getRule1() { return document.getElementById("cb1_id").checked; }
function getRule2() { return document.getElementById("cb2_id").checked; }
function getRule3() { return document.getElementById("cb3_id").checked; }
function getRule4() { return document.getElementById("cb4_id").checked; }
function getRule5() { return document.getElementById("cb5_id").checked; }
function getRule6() { return document.getElementById("cb6_id").checked; }

// Selector onChange
function SelectOnChange() {
    console.clear();
    theme = document.getElementById("theme_selector_id").value;
    pic_path = `/resources/img/${theme}/`;
    console.log(`theme changed - ${theme.value} ${pic_path}`);
}

// CheckBox onChanges
function CheckBoxOnChange1() {
    console.clear();
    rule1 = document.getElementById("cb1_id").checked;
    console.log(`rule1 changed - ${Boolean(rule1.checked)}`);
}

function CheckBoxOnChange2() {
    console.clear();
    rule2 = document.getElementById("cb2_id").checked;
    console.log(`rule2 changed - ${Boolean(rule2.checked)}`);

}

function CheckBoxOnChange3() {
    console.clear();
    rule3 = document.getElementById("cb3_id").checked;
    console.log(`rule3 changed - ${Boolean(rule3.checked)}`);
}

function CheckBoxOnChange4() {
    console.clear();
    rule4 = document.getElementById("cb4_id").checked;
    console.log(`rule4 changed - ${Boolean(rule4.checked)}`);
}

function CheckBoxOnChange5() {
    console.clear();
    rule5 = document.getElementById("cb5_id").checked;
    console.log(`rule5 changed - ${Boolean(rule5.checked)}`);
}

function CheckBoxOnChange6() {
    console.clear();
    rule6 = document.getElementById("cb6_id").checked;
    console.log(`rule6 changed - ${Boolean(rule6.checked)}`);
}