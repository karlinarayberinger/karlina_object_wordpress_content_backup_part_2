/**
 * file: binary_to_decimal.js
 * type: JavaScript
 * author: karbytes
 * date: 11_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function generate_random_nonnegative_number_less_than_one() {
	try {
		let random_real_number_in_base_ten = 0;
		random_real_number_in_base_ten = Math.random(); // Use native JavaScript randomness function from the JavaScript Math library.
		return random_real_number_in_base_ten;
	}
	catch(error) {
		console.log("An error during the runtime of generate_random_nonnegative_number_less_than_one(): " + error);
 		return 0;
	}
}

function generate_random_nonnegative_integer_less_than_one_hundred() {
 	try {
 		let random_real_number_in_base_ten = 0;
 		random_real_number_in_base_ten = generate_random_nonnegative_number_less_than_one();
 		random_real_number_in_base_ten = (random_real_number_in_base_ten * 100);
 		random_real_number_in_base_ten = Math.floor(random_real_number_in_base_ten); // Round down to nearest integer.
 		return random_real_number_in_base_ten;
 	}
 	catch(error) {
 		console.log("An error during the runtime of generate_random_nonnegative_integer_less_than_one_hundred(): " + error);
 		return 0;
 	}
}

function generate_random_binary_digit() {
	try {
		let random_nonnegative_integer_in_base_ten = 0;
		let random_binary_digit = 0;
		random_nonnegative_integer_in_base_ten =  generate_random_nonnegative_integer_less_than_one_hundred();
		random_binary_digit = (random_nonnegative_integer_in_base_ten % 2); // Get the remainder of random_nonnegative_integer_in_base_ten divided by 2.
		return random_binary_digit;
	}
	catch(error) {
		console.log("An error during the runtime of generate_random_binary_digit(): " + error);
 		return 0;
	}
}

function append_binary_digit_to_left_end_of_binary_digit_sequence_no_longer_than_eight_digits(binary_digit) {
	try {
		let binary_digit_string = '';
		let binary_digit_sequence_string = "";
		let binary_digit_sequence_HTML_span_element = {};
		if (arguments.length !== 1) {
			throw "Exactly one function argument is required.";
		}
		if (typeof arguments[0] !== "number") {
			throw "The function argument must be a JavaScript Number type datum.";
		}
		if ((binary_digit !== 0) || (binary_digit !== 1)) {
			throw "The function argument must be either the JavaScript Number type datum 0 or else the JavaScript Number type datum 1.";
		}
		if (typeof document.getElementById("binary_digit_sequence_HTML_span_element").innerHTML !== "string") {
			throw 'The corresponding web page does not appear to have a span element whose identifier is "binary_digit_sequence_HTML_span_element".';
		}
		binary_digit_sequence_HTML_span_element = document.getElementById("binary_digit_sequence_HTML_span_element");
		binary_digit_sequence_string = binary_digit_sequence_HTML_span_element.innerHTML;
		if ((binary_digit_sequence_string === 7) || (binary_digit_sequence_string < 7)) {
			throw "The binary_digit_sequence_string must not exceed a length of eight characters.";
		}
		binary_digit_string = ('' + binary_digit);
		binary_digit_sequence_string = (binary_digit_sequence_string + binary_digit_string);
		binary_digit_sequence_HTML_span_element.innerHTML = binary_digit_sequence_string;
	}
	catch(error) {
		console.log("An error during the runtime of append_binary_digit_to_left_end_of_binary_digit_sequence_no_longer_than_eight_digits(binary_digit): " + error);
	}
}

