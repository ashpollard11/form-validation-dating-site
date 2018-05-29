class LengthValidator extends Validator {
	constructor(selector, min, max) {
		super(selector); //call constructor in validator()
		console.log('constructor from LengthValidator')
		//we dont need this constructor. It doesnt do anything different from the 
		//parent class constructor. It s's here for illustrative purposes.
	}

	validate() {
		super.validate();
		
		if (this.$field.value.length < min) {
			this.errors.push("You must enter more than " + min + " characters");
		}
		if (this.$field.value.length > max) {
			this.errors.push("You must enter more than " + max + " characters");
		}

	}

}