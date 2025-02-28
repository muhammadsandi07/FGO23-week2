import { consola } from "consola"
const baseURL = "https://jsonplaceholder.typicode.com/users"
export const getData = async () => {
  try {
    const response = await fetch(baseURL)
    const data = await response.json()
    if (!data) throw new Error("data tidak tersedia")
    const result = []
    data?.forEach((element) => {
      result.push({ name: element.name, address: element.address })
    })
    result.sort((a, b) => {
      if (a.address.street > b.address.city) {
        return 1
      }
      if (a.address.street < b.address.city) {
        return -1
      }

      return 0
    })
    consola.success(result)
  } catch (error) {
    consola.error(error.message)
  }
}
