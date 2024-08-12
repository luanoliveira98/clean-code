
const numberInString = "123456";

// Wrong
const number = +numberInString;
const number = parseInt(numberInString)

// Right
const number = Number(numberInString)

// Wrong
const isNumberNotNull = !!number

// Right
const isNumberNotNull = Boolean(number)

// Wrong
const numberAsString = `${number}`

// Right
const numberAsString = String(number)