'use strict'

const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const student1 = {
  name: 'Jade',
  studentNumber: 678343,
  yearOfStudy: 4
}

const DeleteStud = function (stud, arr) {
  const index = arr.findIndex(elem => {
    return elem.name === stud.name &&
    elem.studentNumber === stud.studentNumber &&
    elem.yearOfStudy === stud.yearOfStudy
  })

  arr.splice(index, 1)

  return arr
}

console.log(DeleteStud(student1, students))
