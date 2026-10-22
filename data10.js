const fs = require("fs")

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }
}

const saveAllData = (allData) => {
  fs.writeFileSync("data10.json", JSON.stringify(allData))
}

const addPerson = (id, fname, lname, city, age) => {
  const allData = loadInfo()

  const duplicated = allData.filter((obj) => {
    return String(obj.id) === String(id)
  })

  if (duplicated.length === 0) {
    allData.push({ id, fname, lname, city, age })
    saveAllData(allData)
    console.log("person added successfully")
  } else {
    console.log("ERROR: DUPLICATED ID")
  }
}

const readAll = () => {
  const allData = loadInfo()

  if (allData.length === 0) {
    console.log("NO DATA")
    return
  }
  console.table(allData)
}

const readData = (id) => {
  const allData = loadInfo()

  const person = allData.find((obj) => {
    return String(obj.id) === String(id)
  })

  if (person) {
    console.log(person)
  } else {
    console.log("ID NOT FOUND")
  }
}
const deleteData = (id) => {
  const allData = loadInfo()

  const dataToKeep = allData.filter((obj) => {
    return String(obj.id) !== String(id)
  })

  if (dataToKeep.length === allData.length) {
    console.log("ID NOT FOUND")
    return
  }

  saveAllData(dataToKeep)
  console.log("person deleted successfully")
}

const deleteAll = () => {
  saveAllData([])
  console.log("all data deleted successfully")
}

const listData = () => {
  const allData = loadInfo()

  if (allData.length === 0) {
    console.log("NO DATA")
    return
  }

  allData.forEach((obj) => {
    console.log(obj.fname + " " + obj.lname + " - " + obj.city)
  })
}

module.exports = {
  addPerson,
  readAll,
  readData,
  deleteData,
  deleteAll,
  listData,
}