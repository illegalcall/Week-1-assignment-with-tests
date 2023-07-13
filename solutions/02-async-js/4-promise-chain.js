/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond () {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

function waitTwoSecond () {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

function waitThreeSecond () {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

function calculateTime () {
  const start = new Date()

  // Start with executing the first function
  waitOneSecond()
    .then(() => {
      // After first promise resolves, execute this second function
      return waitTwoSecond()
    })
    .then(() => {
      // After second promise resolves, execute this third function
      return waitThreeSecond()
    })
    .then(() => {
      // At this point, all the promises have been resolved in sequence
      const end = new Date()

      const timeTaken = end.getTime() - start.getTime()
      console.log('Time taken in seconds: ', timeTaken / 1000)
    })
}

calculateTime()