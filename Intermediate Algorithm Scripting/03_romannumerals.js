function convert(num) {
	result = '';

	while (num >= 1000){
		result += 'M';
		num -= 1000;
	}
	if (num >= 900) {
		result += 'CM';
		num -= 900;
	}
	if (num >= 500) {
		result += 'D';
		num -= 500;
	}
	while (num >= 100){
		result += 'C';
		num -= 100;
	}
	if (num >= 50) {
		result += 'L';
		num -= 50;
	}
	while (num >= 10){
		result += 'X';
		num -= 10;
	}
	if (num >= 9) {
		result += 'IX';
		num -= 9;
	}
	if (num >= 5) {
		result += 'V';
		num -= 5;
	}
	if (num >= 4) {
		result += 'IV';
		num -= 4;
	}
	while (num > 0){
		result += 'I';
		num -= 1;
	}

 return result;
}

debug(convert(1863));



//