let randomInt = (max) => { return Math.floor(Math.random() * max) } // random number generator
let nums = [] // empty array to store random integers
let target = randomInt(10) // generate a random number for the target
for (i = 0; i < 8; i++) { nums.push(randomInt(10)) } // push random numbers 0 - 8 into nums array 8 times
let twoSum = () => {
    let hash = {} // hashtable for memoization
    for (i = 0; i < nums.length; i++) { hash[nums[i]] = i } // establish var i as the base for the sum of ints
    for (j = 0; j < nums.length; j++) { 
        let comp = target  - nums[j] 
        if (hash.hasOwnProperty(comp) && hash[comp] !== j) { return [hash[comp], j] }
    } // var j combs through nums array for an int that creates a sum equal to target with var i's int  
} // twoSum function, call in console to see it work
