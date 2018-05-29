class MatchValidator extends NumberRangeValidator {
	constructor(selector, matchingSelector) {
		super(selector); //call constructor in validator()
		console.log('constructor from MatchValidator')
		//we dont need this constructor. It doesnt do anything different from the 
		//parent class constructor. It s's here for illustrative purposes.
	}

	validate() {
		super.validate();
		
		if (matchingSelector.value === true && this.$field.value !== matchingSelector.value) {
			this.errors.push("Passwords must match");
		}
	}
}