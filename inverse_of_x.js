/**
 * file: inverse_of_x.js
 * type: JavaScript
 * author: karbytes
 * date: 14_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function is_exactly_one_argument(input) {
	return (arguments.length === 1) ? true : false;
}

function is_exactly_one_number_type_argument(input) {
	return (is_exactly_one_argument(input) && (typeof input === "number")) ? true : false;
}

function round_down_to_nearest_integer(input) {
	if (!is_exactly_one_number_type_argument(input)) return 0;
	return Math.floor(input);
}