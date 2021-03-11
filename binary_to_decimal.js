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

