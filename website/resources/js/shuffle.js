function RandomShuffle() {    
    for (let i = 1; i< 20; i++){
        let rand_pic = Math.floor(getRandomArbitrary(1, 3));

        picChange(`${ore_types[rand_pic]}`, i);
    }
}