class SpecialCharacterValidator extends Validator {
	constructor(selector, specialCharacters) {
		super(selector); //call constructor in validator()
		console.log('constructor from SpecialCharacterValidator')
		
		this.specialCharacters = specialCharacters;
	}



	validate() {
		super.validate();

		let foundASpecialCharacter = false;

		this.specialCharacters.forEach((char) => {
			console.log('look for character', char)
			if (this.$field.value.includes(char)) {
				foundASpecialCharacter = true;
			}
		});

		if (!foundASpecialCharacter) {
			this.errors.push("Password must include one of the following characters: !@#$%^&*")
		}


		// this.specialCharacters.forEach((character) => {
		// 	if (this.$field.value.includes(character)) {
		// 		return true;
		// 	} else {
		// 	this.errors.push("Password must include one of the following characters: !@#$%^&*");
		// 	};
		// });
	}
}