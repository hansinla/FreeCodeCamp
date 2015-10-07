/*
Check if a value is classified as a boolean primitive. Return true or false.
 */

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === 'boolean');
}

debug(boo(null));