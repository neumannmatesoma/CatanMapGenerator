function SelectOnChange() {
    console.clear();
    theme = document.getElementById("theme_selector_id").value;
    pic_path = `/resources/img/${theme}/`;
    console.log(`theme changed - ${theme.value} ${pic_path}`);
}

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