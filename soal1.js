import consola from "consola"

/**
 * promise merupakan handle untuk asynchronous
 * 
   promise perwakilan dari sebuah nilai yang belum diketahui nilainya saat promise dibuat
   then() catch() digunakan untuk menangani hasil ketika nilai terpenuhi atau tidak 
   then()  untuk menangani hasil ketika  nilai  terpenuhi
   catch()  untuk menangani hasil ketika  nilai tidak terpenuhi
   
   async() untuk menandai function asyncronous untuk berjalan seolah-olah synchrounous, dan sebagai penanda agar await bisa digunakan 
   await() digunakan untuk menunda eksekusi hingga proses asynchronous selesai


   kekurangan dari async await sendiri tidak adanya error handling

   try catch digunakan untuk error handling di async await

   blok try digunakan untuk tempat mengeksekusi kode yang memiliki kemungkinan error
   catch digunakan untuk menangkap hasil error dari blok try, apabila ada error
 */
export const fetchData = (status) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (status === true) {
        resolve("Data berhasil diambil")
      } else {
        reject("Gagal mengambil data")
      }
    }, 3000)
  })
}

export const getData = async (status) => {
  try {
    if (typeof status !== "boolean")
      throw new Error("inputan harus berupa boolean")
    const res = await fetchData(status)
    if (res) consola.success(res)
  } catch (error) {
    consola.error(error)
  }
}

export const showData = (answer) => {
  if (answer === "true" || answer === "false") {
    const status = Boolean(answer)
    fetchData(status)
      .then((result) => consola.success(result))
      .catch((err) => consola.error(err))
    getData(status)
    return
  }
  consola.error('inputan bukan harus "true" atau "false"')
}
