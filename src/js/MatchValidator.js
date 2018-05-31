class MatchValidator extends Validator {
	constructor(selector, matchingSelector) {
		super(selector); //call constructor in validator()
		console.log('constructor from MatchValidator')
		this.matchingField = document.querySelector(matchingSelector);
	}

	validate() {
		super.validate();


		
		if (this.matchingField.value.length && this.$field.value !== this.matchingField.value) {
			this.errors.push("Passwords must match");
		}
	}
}