let randomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let nums = [];
let target = randomInt(10);
for (x = 0; x < 8; x++) {
    nums.push(randomInt(10));
}
for (i = 0; i < nums.length; i++) {
    for (y = 0; y < nums.length; y++) {
        if (nums[i] + nums[y] == target) {
            let arr = [];
            arr.push(nums[i], nums[y]);
            console.log(arr);
        }
    }
}
