class DisallowedValidator extends Validator {
	constructor(selector, characterArray) {
		super(selector); //call constructor in validator()
		console.log('constructor from DisallowedValidator')
		this.characterArray = characterArray; //take arguments and put them into properties of the class
	}

	validate() {
		super.validate();

		this.characterArray.forEach((character) => {
			if (this.$field.value.includes(character)) {
				this.errors.push("Password cannot contain the following characters: " + this.characterArray);
			};
		});
	}
}