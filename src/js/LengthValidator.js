class LengthValidator extends Validator {
	constructor(selector, min, max) {
		super(selector); //call constructor in validator()
		console.log('constructor from LengthValidator')
		this.min = min; //take arguments and put them into properties of the class
		this.max = max; //take arguments and put them into properties of the class
	}

	validate() {
		super.validate();
		
		if (this.$field.value.length < this.min) {
			this.errors.push("Password must contain more than " + this.min + " characters");
		}
		if (this.$field.value.length > this.max) {
			this.errors.push("Password cannot contain more than " + this.max + " characters");
		}

	}

}