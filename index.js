//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


function solution(str, ending){
let crab = str.lastIndexOf(ending)
console.log(crab)
    if (crab > 0 ) {
        return console.log(true)
    } else {
        console.log(false)
    }
  }

  solution("Crabby","wrong")