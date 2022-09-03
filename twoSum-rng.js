let randomInt = (max) => {
    return Math.floor(Math.random() * max)
}
let arr = []
let nums = []
let target = randomInt(10)
for (x = 0; x < 8; x++) {
    nums.push(randomInt(10))
}
console.log(`target - ${target}`)
console.log(nums)
for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
        arr.push(nums.indexOf(i))
        console.log(arr)
        break;
    } else {
        for (y = 0; y < nums.length; y++) {
            if (nums[i] + nums[y] == target) {
                arr.push(nums.indexOf(i), nums.indexOf(y))
                console.log(arr)
            }
        }
    }
}
if (arr.length === 0) { console.log('err - arr is empty') }
