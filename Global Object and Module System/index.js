const _ = require('lodash')
const people = require('./people')
// console.log(people.people, people.a, people.test)
// people.test()

const peopleLastElement = _.last(people.people)

console.log(peopleLastElement);