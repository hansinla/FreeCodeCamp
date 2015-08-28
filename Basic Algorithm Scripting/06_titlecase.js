function titleCase(str) {
  return str.replace(/(^([a-z]))|\s([a-z])/g, function(arg) {
    return arg.toUpperCase();
  });
}

debug(titleCase("I'm a little tea pot")); 