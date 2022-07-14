import { TYPES } from "../constanst"

export const handleType = (type) => {
  return type === TYPES.XBTUSD ? TYPES.ETHUSD : TYPES.XBTUSD
}

export const mergeTwoSortedArr = (arr1, arr2) => {
  const arr = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].price > arr2[j].price) {
      arr.push(arr1[i])
      i++
    } else {
      arr.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    arr.push(arr2[j])
    j++
  }
  return arr
}
