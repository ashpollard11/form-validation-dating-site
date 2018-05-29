class Validator {
	constructor(selector) {
		console.log('constructor from Validator')


		//find the field, show an error if its not available
		this.$field = document.querySelector(selector);
		if (!this.$field) {
			console.warn(`Couldn't find an element with selector`, selector)
			return false;
		}

		let $errorContainer;

		if (this.$errorContainer !== true) {
			// make an element to show errors in
			this.$errorContainer = document.createElement('div');
			this.$errorContainer.classList.add('error-message');
			this.$field.parentElement.appendChild(this.$errorContainer);
		}
		


		//keep track of errors. Use this instead of let so it is available to
		//the entire class, let would only make it local to the constructor
		this.errors = [];


		//event listener will only use a special version of this so it doesn't redefine this
		//add event listener to call this.validate, but overrrule it's this logic,
		//and force its this to be the Validate class instance
		this.$field.addEventListener(`keyup`, this.validate.bind(this))
		this.$field.addEventListener(`blur`, this.validate.bind(this))
	}

	validate() {
		console.log(`validate!!!!`, this.$field.value)

		//empty out current errors
		this.errors = [];
		
		//if this field is empty, give an error
		if (!this.$field.value.length) {
			this.errors.push("You must fill out the field");
		}

		//This is a hack.
		//putting it in a 0ms timeout just moves it to the end of the
		//call stack after any and all parent/child/grandchild/etc
		setTimeout(this.showErrors.bind(this), 0)
	}

	showErrors() {
		console.log('showErrors()')
		this.$errorContainer.innerHTML = "";
		if (this.errors.length) {
			this.$field.style.borderColor = `red`;
			
			//using an arrow function to keep this under the class
			this.errors.forEach((error) => {
				this.$errorContainer.innerHTML += '<p>' + error + '</p>';
			})
			

		} else {
			this.$field.style.borderColor = `green`;
		}
	}
}