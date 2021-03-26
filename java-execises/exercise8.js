'use strict'

const SqaureArraElem = function (elem) {
  return elem * elem
}

const map = function (functionToApply, array) {
  const newArr = []
  array.forEach(element => {
    newArr.push(functionToApply(element))
  }
  )
  return newArr
}

const arr = [1, 3, 5, 7, 2]

console.log(map(SqaureArraElem, arr))
