import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"
import { showData } from "./soal1.js"
import { getDataFromServer, processData } from "./soal2.js"
import { getData } from "./soal3.js"
import { consola } from "consola"
import { cekPalindrom, reverseWords } from "./soal4.js"
import { readingFile, removeFiles, writeFiles } from "./soal6.js"
const quest = readline.createInterface({ input, output })

const app = async () => {
  console.log(`MENU APLIKASI
  1. show handle asynchronous
  2. show data getDataFromServer
  3. sorting data user
  4. check palindrom
  5. reverse word
  6. devide and sorted
  7. write file
  8. read file
  9. remove file
  x. exit
  `)
  const answer = await quest.question("pilih menu (x bila batal)? ")
  switch (answer) {
    case "1":
      const n = new quest.question()
      const statusFetch = await n(
        "input kan status fetch data berupa boolean (true atau false): "
      )
      showData(statusFetch)
      quest.close()
      break
    case "2":
      const statusGetData = await quest.question(
        "input kan status get data berupa boolean (true atau false): "
      )
      getDataFromServer(statusGetData, processData)
      quest.close()
      break
    case "3":
      getData()
      break
    case "4":
      const inputForCheckPalindrom = await quest.question(
        "input berupa kata (contoh = malam): "
      )
      cekPalindrom(inputForCheckPalindrom)
      quest.close()
      break
    case "5":
      const inputForReverseWords = await quest.question(
        "input berupa kata (contoh = saya belajar javascript): "
      )
      reverseWords(inputForReverseWords)
      quest.close()
      break
    case "6":
      divideAndSort(5956560159466056)
      quest.close()
      break
    case "7":
      const newFilesName = await quest.question("inputkan nama file baru : ")
      const content = await quest.question(
        "inputkan content untuk file baru : "
      )
      writeFiles(newFilesName, content)
      quest.close()
      break
    case "8":
      const filesName = await quest.question(
        "inputkan nama file yang akan dibaca (tambahkan extensi file, default: .txt) : "
      )
      readingFile(filesName)
      quest.close()
      break
    case "9":
      const fileNameRemoved = await quest.question(
        "inputkan nama file yang akan dihapus (tambahkan extensi file, default: .txt) : "
      )
      removeFiles(fileNameRemoved)
      quest.close()
      break
    case "x":
      consola.log("selamat tinggal ")
      quest.close()
      break
    default:
      consola.error("pilihan tidak diketahui")
  }
  quest.close()
}

app()
