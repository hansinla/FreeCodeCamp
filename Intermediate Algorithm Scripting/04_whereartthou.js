// Make a function that looks through a list (first argument)
// and returns an array of all objects that have equivalent property 
// values (second argument).

function where(collection, source) {
  return collection.filter(function(obj)
    {
      for (var key in source){
        if (obj[key] != source[key]) {return false;}
      }
      return true;
    });
}

debug(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) 
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
