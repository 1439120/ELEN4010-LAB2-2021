'use strict'

const course = { courseCode: 'ELEN3015' }

const YearOffered = function (CourseObj) {
  CourseObj.yearOffered = CourseObj.courseCode.match(/\d/)[0] // /\d+/ takes all the numbers
}

const summerise = function (CourseObj) {
  return `${CourseObj.courseCode} is offered in year ${CourseObj.yearOffered}.`
}

YearOffered(course)

const setCourseToEmptyObject = function (theCourse) {
  theCourse = {} // assign the reference to an empty object
  // the course object is not affected, bcause the object itself is passed by value
}

console.log(summerise(course))

setCourseToEmptyObject(course)

console.log(summerise(course))
