let randomInt = (max) => { return Math.floor(Math.random() * max) }
let nums = []
let target = randomInt(10)
for (i = 0; i < 8; i++) { nums.push(randomInt(10)) }
let twoSum = () => {
    let hash = {}
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            hash[nums[i]] = i
        } else { hash[nums[i]] = i }
    }
    for (j = 0; j < nums.length; j++) { 
        let comp = target  - nums[j] 
        if (hash.hasOwnProperty(comp) && hash[comp] !== j) { return [hash[comp], j] }
    }
}
