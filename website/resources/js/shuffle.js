

function DivWalkthrough() {
    const ore_pics = ["brick", "desert", "ore", "sheep", "wheat", "wood"]
    

    for (let i = 1; i< 20; i++){
        let rand_pic = Math.floor(getRandomArbitrary(1, 6));

        //alert(`div: ${i} | pic: ${ore_pics[rand_pic]}`);

        picChange(`${ore_pics[rand_pic]}`, i);
    }
}