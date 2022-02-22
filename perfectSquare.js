const perfectSquare = (num) => {
    if (Math.sqrt(num) % 1 !== 0) {
      console.log(`-1`)
      return
    }
  
  let firstNum = num
  let firstSquare = Math.sqrt(firstNum)
  let nextNum = num + 1
  
  while (Math.sqrt(nextNum) % 1 !== 0) {
    nextNum++
  }
  
  let nextSquare = Math.sqrt(nextNum)
  
  console.log(`${nextNum} (${firstSquare}x${firstSquare}=${firstNum}, ${nextSquare}x${nextSquare}=${nextNum})`)
  }
  
  
  perfectSquare(9)
  // perfectSquare(289)
  // perfectSquare(3000)
  
  
  