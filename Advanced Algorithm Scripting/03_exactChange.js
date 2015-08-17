function drawer(price, cash, cid) {
  var change = [],
    value = [];
  var totalInDrawer = 0,
    amount,
    counter = 0;

  var changeAmount = cash - price;
  if (changeAmount === 0) return change; // No change, return empty array

  // Calculate total in drawer
  for (var row = 0; row < cid.length; row++) {
    totalInDrawer += cid[row][1] * 100;
  }

  totalInDrawer = totalInDrawer / 100;
  if (totalInDrawer < changeAmount) return "Insufficient Funds";
  if (totalInDrawer == changeAmount) return "Closed";

  while (changeAmount >= 100 && cid[8][1] >= 100) {
    changeAmount -= 100;
    cid[8][1] -= 100;
    counter++;
  }
  if (counter > 0) {
    change.push(['ONE HUNDRED', counter * 100.00]);
    counter = 0;
  }

  while (changeAmount >= 20 && cid[7][1] >= 20) {
    changeAmount -= 20;
    cid[7][1] -= 20;
    counter++;
  }
  if (counter > 0) {
    change.push(['TWENTY', counter * 20.00]);
    counter = 0;
  }

  while (changeAmount >= 10 && cid[6][1] >= 10) {
    changeAmount -= 10;
    cid[6][1] -= 10;
    counter++;
  }
  if (counter > 0) {
    change.push(['TEN', counter * 10.00]);
    counter = 0;
  }

  while (changeAmount >= 5 && cid[5][1] >= 5) {
    changeAmount -= 5;
    cid[5][1] -= 5;
    counter++;
  }
  if (counter > 0) {
    change.push(['FIVE', counter * 5.00]);
    counter = 0;
  }

  while (changeAmount >= 1 && cid[4][1] >= 1) {
    changeAmount -= 1;
    cid[4][1] -= 1;
    counter++;
  }
  if (counter > 0) {
    change.push(['ONE', counter * 1.00]);
    counter = 0;
  }

  while (changeAmount >= 0.25 && cid[3][1] >= 0.25) {
    changeAmount -= 0.25;
    cid[3][1] -= 0.25;
    counter++;
  }
  if (counter > 0.25) {
    change.push(['QUARTER', counter * 0.25]);
    counter = 0;
  }

  while (changeAmount >= 0.1 && cid[2][1] >= 0.1) {
    changeAmount -= 0.1;
    cid[2][1] -= 0.1;
    counter++;
  }
  if (counter > 0.1) {
    change.push(['DIME', counter * 0.1]);
    counter = 0;
  }

  while (changeAmount >= 0.05 && cid[1][1] >= 0.05) {
    changeAmount -= 0.05;
    cid[1][1] -= 0.05;
    counter++;
  }
  if (counter > 0.05) {
    change.push(['NICKEL', counter * 0.05]);
    counter = 0;
  }

  while (changeAmount > 0 && cid[0][1] >= 0.01) {
    changeAmount -= 0.01;
    cid[0][1] -= 0.01;
    counter++;
  }
  if (counter > 0 ) {
    change.push(['PENNY', counter * 0.01]);
  }

  // Here is your change, ma'am.
  return change;
}



drawer(19.50, 20.00, [['PENNY', 1.01], 
	['NICKEL', 2.05], ['DIME', 3.10], 
	['QUARTER', 4.25], ['ONE', 90.00], 
	['FIVE', 55.00], ['TEN', 20.00], 
	['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);

