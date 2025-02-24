import { consola } from "consola"

export const cekPalindrom = (input) => {
  if (typeof input !== "string")
    return consola.error("inputan harus berupa string")
  if (input.length < 1)
    return consola.error("panjang inputan harus lebih dari 0")
  let temp = ""
  for (let index = input.length - 1; index >= 0; index--) {
    temp += input[index]
  }
  const palindrom = temp === input ? "Palindrom" : "Bukan Palindrom"
  consola.success(palindrom)
}

export const reverseWords = (input) => {
  if (typeof input !== "string")
    return consola.error("inputan harus berupa string")
  if (input.length < 1)
    return consola.error("panjang inputan harus lebih dari 0")
  let temp = ""
  let arr = []
  let j = 0
  for (let i = 0; i <= input.length; i++) {
    if (input[i] === " " || i === input.length) {
      arr[j] = temp
      temp = ""
      j++
    } else {
      temp += input[i]
    }
  }
  temp = ""
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i > 0) {
      temp += arr[i] + " "
    } else {
      temp += arr[i]
    }
  }
  consola.success(temp)
}
