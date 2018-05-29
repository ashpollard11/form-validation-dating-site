
console.log(`Flava with a cocoa kinda flow`)

let validatorFirst = new Validator('[name=first-name]')
let validatorLast = new Validator('[name=last-name]')


let validatorEmail = new EmailValidator('[name=email]')




let validatorNumMonth = new NumberRangeValidator('[name=month]', 1, 12)
let validatorNumDay = new NumberRangeValidator('[name=day]', 1, 31)
let validatorNumYear = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear())


// let validatorPassword = new MatchValidator('[name=password]', '[name=password-valid]')

