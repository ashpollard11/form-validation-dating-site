
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

let specialCharacters = [
			"!","@","#","$","%","^","&","*"
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
let validatorSpecialCharacter = new SpecialCharacterValidator('[name=password]', specialCharacters)
let validatorUpperLower = new UpperLowerValidator('[name=password]')


//animations

const continueBtn = document.querySelector(".continue");
const form1 = document.querySelector(".form-1");
const form2 = document.querySelector(".form-2");


continueBtn.onclick = function() {
	form1.classList.add("hidden");
	form2.classList.add("active");
}


