import { consola } from "consola"

const divideAndSort = (input) => {
  if (typeof input !== "number")
    return consola.error("inputan harus bertipe number")
  // split
  const result = []
  let temp = ""
  const text = input.toString()
  for (let i = 0; i <= text.length; i++) {
    if (text[i] == "0" || i == text.length) {
      result.push(temp)
      temp = ""
    } else {
      temp += text[i]
    }
  }
  temp = []
  let sorted = ""
  //   sorting
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      temp.push(result[i][j])
    }
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] > temp[i + 1]) {
        let t = temp[i]
        temp[i] = temp[i + 1]
        temp[i + 1] = t
        i = -1
      }
    }

    // join
    for (let i = 0; i < temp.length; i++) {
      sorted += temp[i]
    }
    temp = []
  }
  consola.success(Number.parseInt(sorted))
}

