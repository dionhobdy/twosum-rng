let randomInt = (max) => { return Math.floor(Math.random() * max) }
let arr = []
let nums = []
let target = randomInt(10)
for (i = 0; i < 8; i++) { nums.push(randomInt(10)) }
console.log(`target - ${target}`)
console.log(nums)
let twoSum = () => {
    let hash = {}
    let caught = false
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            hash[nums.indexOf(i)] = i
            let caught = true
            break
        } else { hash[nums.indexOf(i)] = i }
    }
    if (caught !== true) {
        for (j = 0; j < nums.length; j++) { 
            let comp = target  - nums[j] 
            if (hash.hasOwnProperty(comp) && hash[comp] !== j) { return [hash[comp], j] }
        }
    }
    return null
}
