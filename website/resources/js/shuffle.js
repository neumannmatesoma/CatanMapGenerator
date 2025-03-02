function RandomShuffle() {
    console.clear();
    for (let i = 1; i< 20; i++){
        let rand_pic = Math.floor(getRandom(1, 6));
        picChange(`${ore_types[rand_pic]}`, i);

        console.log(`${i}: ${rand_pic} - ${ore_types[rand_pic]}`);
    }
}