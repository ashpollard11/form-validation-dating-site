class UpperLowerValidator extends Validator {
	constructor(selector) {
		super(selector); //call constructor in validator()
		console.log('constructor from UpperLowerValidator')
		//we dont need this constructor. It doesnt do anything different from the 
		//parent class constructor. It's here for illustrative purposes.
	}

	validate() {
		super.validate();
		
		if (!this.$field.value.includes("A","B","C","D","E","F","G","H","I","J","K","L","M","N",
			"O","P","Q","R","S","T","U","V","W","X","Y","Z")) {
			this.errors.push("Password must include at least one uppercase letter");
		}
	}

}