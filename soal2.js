export function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status) {
      callback(["product 1", "product 2", "product 3"])
    } else {
      const err = new Error("Failed to fetch data")
      err.name = "Error"
      callback(null, err)
    }
  }, 3000)
}

export const processData = (data, error) => {
  if (data) {
    data.forEach((element) => {
      console.log(element)
    })
  } else {
    console.log(`${error.name}: ${error.message}`)
  }
}
