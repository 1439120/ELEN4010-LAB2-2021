const fs = require('fs')
const dolor = require('dolor')
// fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
// // utf8 is the encoding of the file
//   if (err) throw err // callbacks usually get errors in this format
//   // err will either contain the error or null
//   console.log(data) // if there weren't errors, send the data to the console
// })
const courses = ['ELEN4101', 'ELEN4011', 'ELEN4015', 'ELEN4000']

courses.forEach(elem => {
  fs.appendFile(elem + '.txt', dolor.paragraphs(10), (err) => {
    if (err) throw err
    console.log(elem + ' created')
  })
})
