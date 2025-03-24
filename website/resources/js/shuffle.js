var possibility = [".", "..", "...", "....", ".....", "......"]

function Shuffle() {
    console.clear();
    for (let i = 1; i < 20; i++){
        let rand_pic = Math.floor(getRandom(0, 6));
        var desert_a = picChange(`${ore_types[rand_pic]}`, i);
        console.log(`${i}) ${rand_pic} - ${ore_types[rand_pic]}`);

        if (!desert_a){ LoadNumber(i); }
    }
}

function LoadNumber(i) {
    var rand = Math.floor(getRandom(2, 12))
    document.getElementById(`map_div_${i}_back`).style.backgroundImage = `url(/resources/img/back1.png)`;
    document.getElementById(`map_div_${i}_num`).innerHTML = rand;
    document.getElementById(`map_div_${i}_dot`).innerHTML = possibility[RollCalculator(rand)-1];

    console.log(`   value: ${rand} - roll: ${RollCalculator(rand)-1} - dots: ${possibility[RollCalculator(rand)-1]}`)
}

function RollCalculator(num) {
    switch (num) {
        case 2: return 1;
        case 3: return 2;
        case 4: return 3;
        case 5: return 4;
        case 6: return 5;
        case 7: return 6;
        case 8: return 5;
        case 9: return 4;
        case 10: return 3;
        case 11: return 2;
        case 12: return 1;
    }
}