'use strict'
/** ***************************************************************************** */
// fourth year electives to choose from
/** ***************************************************************************** */
const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}
/** ***************************************************************************** */
// the student object
/** ***************************************************************************** */
const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]
/** ***************************************************************************** */
// function to filter none fourth years and those who aren doing software
/** ***************************************************************************** */

const FourthYears = arr => {
  return arr.filter(elem => elem.yearOfStudy === 4)
}

const NoSoftware = arr => {
  return arr.filter(elem => {
    let results = false
    elem.electives.forEach(elec => {
      if (elec.courseCode === 'ELEN4010') results = true
    })
    return results
  })
}
/** ***************************************************************************** */
// Output
/** ***************************************************************************** */
let solution = FourthYears(students)

solution = NoSoftware(solution)

console.log(solution)
