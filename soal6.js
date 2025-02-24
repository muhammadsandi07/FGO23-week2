import { consola } from "consola"
import path, { dirname } from "path"
import fs from "fs"
import { fileURLToPath } from "url"

const formatPath = (filename) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const parentPath = path.join(__dirname, "/file/")
  const ext = path.extname(filename)
  const newNameFile = filename.split(".")
  const formatPath = path.format({
    root: parentPath,
    name: newNameFile[0],
    ext: ext ? ext : ".txt",
  })
  return formatPath
}

export const readingFile = async (filename) => {
  try {
    const pathFile = formatPath(filename)
    const data = fs.readFileSync(pathFile, "utf8")
    consola.success(data)
  } catch (err) {
    consola.error(err.message)
  }
}

export const writeFiles = async (filename, content) => {
  try {
    const pathFile = formatPath(filename)
    const checkFile = fs.existsSync(pathFile)
    if (checkFile) {
      throw new Error("file exists.")
    }
    fs.writeFileSync(pathFile, content)
    consola.success("file created successfully")
  } catch (error) {
    consola.error(error.message)
  }
}

export const removeFiles = async (fileName) => {
  try {
    const pathFile = formatPath(fileName)
    const checkFile = fs.existsSync(pathFile)
    if (!checkFile) {
      return consola.error("file do not exists")
    }
    fs.unlinkSync(pathFile)
    consola.success("file deleted successfully ")
  } catch (error) {
    consola.error(error.message)
  }
}
