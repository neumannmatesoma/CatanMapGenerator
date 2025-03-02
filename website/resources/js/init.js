setTimeout(init, 0)

function init() {
    const pics = ["brick", "desert", "ore", "sheep", "sheep", "wood"]
    
    DivWalkthrough();

    /*for (let i = 1; i< 20; i++){
        let rand_pic = Math.floor(getRandomArbitrary(1, 6));

        // alert(`div: ${i} | pic: ${pics[rand_pic]}`);
        
        picChange(`${pics[rand_pic]}`, i);

    }*/

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function picChange(pic, num) {
    document.getElementById(mapDivChange(num)).style.backgroundImage = "url(/resources/img/original/" + pic + ".png)";
}

function mapDivChange (div_num) {
    return "map_div_" + div_num;
}