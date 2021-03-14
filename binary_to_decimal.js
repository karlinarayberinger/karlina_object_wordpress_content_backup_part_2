/**
 * file: binary_to_decimal.js
 * type: JavaScript
 * author: karbytes
 * date: 14_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Use the native JavaScript Math library function, Math.random(), to produce exactly one random number.
 * @return {Number} a real number in base-ten which is no smaller than zero and less than one.
 */
function random_nonnegative_real_number() {
	return Math.random();
}

/**
 * Use the previously defined JavaScript function, random_nonnegative_real_number(), to produce exactly one random number.
 * Use the native JavaScript Math library function, Math.floor(), to round that random number down to the nearest whole number.
 * @return {Number} a real number in base-ten which is no smaller than zero and less than one hundred.
 */
function random_nonnegative_integer() {
	return Math.floor(random_nonnegative_real_number() * 100);
}

/**
 * Use the previously defined JavaScript function, random_nonnegative_integer(), to produce exactly one random nonnegative base-ten integer.
 * Use the modulo operator to get the remainder (either 0 or else 1) of the random nonnegative base-ten integer divided by two.
 * @return {Number} a real number in base-ten which is either zero or else one.
 */
function random_binary_digit() {
	return ((random_nonnegative_integer() % 2) === 0) ? 0 : 1;
}

function random_binary_term_string() {
	let binary_term_string = "", index = 0;
	for (index = 0; index < 7; index +=1) binary_term_string.push(random_binary_digit());
	return binary_term_string;
}

function validate_binary_term_string(input) {
	try {
		let index = 0;
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "string") throw "input must be an String type datum.";
		if (input.length !== 8) throw "input must be a sequence of exactly eight elements.";
		for (index = 0; index < 7; index++) {
			if (typeof input[index] !== "number") throw "Each element of the input string must be a Number type datum.";
			if ((input[index] !== 0) && (input[index] !== 1)) throw "Each element of the input string must either be 0 or else 1.";
		}
		return true;
	}
	catch(error) {
		console.log("An error occurred during the runtime of validate_binary_term_string(input): " + error);
		return false;
	}
}

function extract_binary_term_string_from_interface() {
	try {
		let binary_term_array = [], index = 0, binary_term_string = "", binary_term_display = {};
		binary_term_display = document.getElementById("binary_term_display");
		binary_term_string = binary_term_display.value;
		binary_term_string = validate_binary_term_string(binary_term_string) ? binary_term_string : "00000000"
	}
	catch(error) {
		console.log("An error occurred during the runtime of extract_binary_term_string_from_interface(): " + error);
	}
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