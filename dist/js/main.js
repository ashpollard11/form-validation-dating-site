'use strict';

console.log('Flava with a cocoa kinda flow');

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');

var validatorEmail = new EmailValidator('[name=email]');

var validatorNumMonth = new NumberRangeValidator('[name=month]', 1, 12);
var validatorNumDay = new NumberRangeValidator('[name=day]', 1, 31);
var validatorNumYear = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear());

// let validatorPassword = new MatchValidator('[name=password]', '[name=password-valid]')
//# sourceMappingURL=main.js.map
