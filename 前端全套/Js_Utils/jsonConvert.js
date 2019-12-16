function toUpperCase(jsonObj) {
  if (typeof jsonObj == "object") {
    for (var i in jsonObj) {
      jsonObj[i.substring(0, 1).toUpperCase() + i.substring(1)] = jsonObj[i];
      delete jsonObj[i];
    }
  }
  return jsonObj;
}
var data = {
  a: 321,
  b: 213
};
var _data = { aaa: 123 };
var res = toUpperCase(_data);
console.log(res);
