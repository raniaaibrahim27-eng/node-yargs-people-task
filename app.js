const yargs = require("yargs")
const data10 = require("./data10")

yargs.command({
  command: "add",
  describe: "add a person",
  builder: {
    id:    { describe: "person id",  demandOption: true, type: "string" },
    fname: { describe: "first name", demandOption: true, type: "string" },
    lname: { describe: "last name",  demandOption: true, type: "string" },
    city:  { describe: "city",       demandOption: true, type: "string" },
    age:   { describe: "age",        demandOption: true, type: "number" },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.city, x.age)
  },
})

yargs.command({
  command: "read",
  describe: "read data of a specific person",
  builder: {
    id: { describe: "person id", demandOption: true, type: "string" },
  },
  handler: (x) => {
    data10.readData(x.id)
  },
})

yargs.command({
  command: "readAll",
  describe: "read data of all people",
  handler: () => {
    data10.readAll()
  },
})

yargs.command({
  command: "delete",
  describe: "delete a specific person",
  builder: {
    id: { describe: "person id", demandOption: true, type: "string" },
  },
  handler: (x) => {
    data10.deleteData(x.id)
  },
})

yargs.command({
  command: "deleteAll",
  describe: "delete all people",
  handler: () => {
    data10.deleteAll()
  },
})

yargs.command({
  command: "list",
  describe: "show full name and city of each person",
  handler: () => {
    data10.listData()
  },
})

yargs.parse()