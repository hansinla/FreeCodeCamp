// Implement a way of converting two dates into a more friendly date range
// that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed.
// Secondly, if the starting year is the current year, 
// and the ending year can be inferred by the reader, the year should be omitted.

// Input date is formatted as YYYY-MM-DD

function friendly(arr) {
  var date1 = newDate(arr[0]);
  var date2 = newDate(arr[1]);
  var months = ["", "January", "February", "March", "April", "May",
	"June", "July", "August", "September", "October", "November", "December"];
	var convDate1 = "", convDate2 = "";
	var yearCanBeInferred = ((date1.year == date2.year) || ( date1.year == date2.year -1 && date2.month < date1.month));

  convDate1 += months[date1.month] +  " ";
  convDate1 += addOrdinal(date1.day);

  if (!yearCanBeInferred){
    convDate1 += ", " + date1.year;
  }


  if (date1.month != date2.month || date1.year != date2.year) {
  	convDate2  += months[date2.month] + " ";
  }

  convDate2  += addOrdinal(date2.day);

  if (!yearCanBeInferred || (date1.month != date2.month && date1.year == date2.year)){
    convDate2 += ", " + date2.year;
  }

  if (arr[0] == arr[1]) {
    return [convDate1 + ", " + date1.year];
  } else {
    return [convDate1, convDate2];

  }
}

function newDate(str){
	var dateObj = {};
	var dateArr = str.split('-');
	
	dateObj.year = parseInt(dateArr[0]);
	dateObj.month =  parseInt(dateArr[1]);
	dateObj.day = parseInt(dateArr[2]);

	return dateObj;
}

function addOrdinal(n) {
	var s=["th","st","nd","rd"],
	v = n % 100;
return n+(s[(v-20)%10]||s[v]||s[0]);
}


debug(friendly(['2017-01-01', '2017-01-01']));
/*
assert.deepEqual(friendly(['2015-07-01', '2015-07-04']), ['July 1st','4th'], 'ending month should be omitted since it is already mentioned');ending month should be omitted since it is already mentioned: expected 'July 1 , 4' to deeply equal [ 'July 1st', '4th' ]
assert.deepEqual(friendly(['2015-12-01', '2016-02-03']), ['December 1st','February 3rd'], 'one month apart can be inferred it is the next year');one month apart can be inferred it is the next year: expected 'December 1 2015, 2 3 2016' to deeply equal [ 'December 1st', 'February 3rd' ]
assert.deepEqual(friendly(['2015-12-01', '2017-02-03']), ['December 1st, 2015','February 3rd, 2017']);expected 'December 1 2015, 2 3 2017' to deeply equal [ Array(2) ]
assert.deepEqual(friendly(['2016-03-01', '2016-05-05']), ['March 1st','May 5th, 2016']);expected 'March 1 , 5 5' to deeply equal [ 'March 1st', 'May 5th, 2016' ]
assert.deepEqual(friendly(['2017-01-01', '2017-01-01']), ['January 1st, 2017'], 'since we do not duplicate only return once');since we do not duplicate only return once: expected 'January 1 , 1' to deeply equal [ 'January 1st, 2017' ]
assert.deepEqual(friendly(['2022-09-05', '2023-09-04']), ['September 5th, 2022','September 4th, 2023']);expected 'September 5 , 4' to deeply equal [ Array(2) ]
*/