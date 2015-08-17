// Return true if the passed string is a valid US phone number
// The user may fill out the form field any way they choose as long as it is a valid US number.
// The following are all valid formats for US numbers:
// 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555

function telephoneCheck(str) {
	var pattern = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
	if (pattern.test(str)) {
		// string looks like a good (US) phone number with optional area code, space or dash in the middle
		return true;
	} else {
	  return false;
	}
}



telephoneCheck("555-555-5555");

