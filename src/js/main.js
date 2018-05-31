
console.log(`Flava with a cocoa kinda flow`)

let disallowedCharacters = [
	"{}",
	"[]",
	"|",
	"/",
	":",
	";",
	"<>",
	"=",
	"+"
];

let validatorFirst = new Validator('[name=first-name]')
let validatorLast = new Validator('[name=last-name]')


let validatorEmail = new EmailValidator('[name=email]')


let validatorNumMonth = new NumberRangeValidator('[name=month]', 1, 12)
let validatorNumDay = new NumberRangeValidator('[name=day]', 1, 31)
let validatorNumYear = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear())


let validatorPw = new Validator('[name=password]')
let validatorPwMatch = new MatchValidator('[name=password-valid]', '[name=password]')
let validatorPwLength = new LengthValidator('[name=password]', 3, 20)
let validatorPwDisallowed = new DisallowedValidator('[name=password]', disallowedCharacters)
let validatorSpecialCharacter = new SpecialCharacterValidator('[name=password]')
let validatorUpperLower = new UpperLowerValidator('[name=password]')

