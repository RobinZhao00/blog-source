const tokens = ['2', '8', '3', '7', '3', '6', '3', '5', '4', '4', '5', '3', '6', '2', '7', '3', '8', '4', '7', '5']

const getDots = (tokens = []) => {
  const originDots = Array
    .from({ length: tokens.length / 2 })
    .map((_, idx) => [tokens[2 * idx], tokens[2 * idx + 1]])
  const validateDots = [originDots[0]]
  let prevXielV = null
  for (let i = 1; i < originDots.length; i++) {
    const prevDot = validateDots[validateDots.length - 1]
    const currentDot = originDots[i]
    const currentXielv = (prevDot[1] - currentDot[1]) / (prevDot[0] - currentDot[0])
    if (currentXielv !== prevXielV) {
      prevXielV = currentXielv
      validateDots.push(currentDot)
    } else {
      validateDots[validateDots.length - 1] = currentDot
    }
  }
  return validateDots.flat().join(' ')
}

console.log('getDots', getDots(tokens))



// function sumOfLeft( nums ,  jump ,  left ) {
//   // write code here
// }
// module.exports = {
//   sumOfLeft : sumOfLeft
// };
//   [1,2,3,4,5,6,7,8,9] 0,5 9
//   6[1,2,3,4,5,7,8,9] 5,1,8
//   2[1,3,4,5,7,8,9]1, 5
//   8 [1,3,4,5,7,9]
//   5[1,3,4,7,9]
//  4 [1,3,7,9]
//   7 [1,3,9]

const sumOfLeft = (nums, jump, left) => {
  let start = 1
  while (nums.length > left) {
    const isOverLength = start + jump - nums.length > 0
    const idx = isOverLength ? start + jump - nums.length : start + jump
    nums.splice(idx, 1)
    start = idx
  }
  return nums.reduce((prev, curr) => prev += curr, 0)
}
console.log(sumOfLeft([1,2,3,4,5,6,7,8,9],4,3))

// sumOfLeft([1,2,3,4,5,6,7,8,9],4,3)

const getHours = (nums) => {
}

const getMinutes = (nums) => {

}
const getNearestTime = (str) => {
  const nums = [...new Set([...str.replace(':', '')])].sort()
  console.log('nums', nums)
  const hours = getHours()
  const minutes = getMinutes()
}
getNearestTime('18:52')


