/**
 * file: binary_to_decimal.js
 * type: JavaScript
 * author: karbytes
 * date: 14_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function random_nonnegative_real_number() {
	return Math.random();
}

function random_nonnegative_integer() {
	return Math.floor(random_nonnegative_real_number() * 100);
}

function random_binary_digit() {
	return ((random_nonnegative_integer() % 2) === 0) ? 0 : 1;
}

function random_binary_term() {
	let binary_term_array = [], array_index = 0;
	for (array_index = 0; array_index < 7; array_index +=1) binary_term_array.push(random_binary_digit());
	return binary_term_array;
}

function validate_binary_term_array(input) {
	try {
		let index = 0;
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "object") throw "input must be an Object type datum.";
		if (input.length !== 8) throw "input must be an array of exactly eight elements.";
		for (index = 0; index < 7; index++) {
			if (typeof input[index] !== "number") throw "Each element of the input array must be a Number type datum.";
			if ((input[index] !== 0) && (input[index] !== 1)) throw "Each element of the input array must either be 0 or else 1.";
		}
		return true;
	}
	catch(error) {
		console.log("error: " + error);
		return false;
	}
}

function extract_binary_term_array_from_interface() {

}

function update_binary_input_display() {

}

function update_decimal_output_display() {

}

function update_base_conversion_calculations_display() {

}

function binary_to_decimal() {
	let binary_term_array = [], decimal_integer_result = 0, base_conversion_calculations_string = "";
}