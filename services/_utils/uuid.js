const wxuuid = function () {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  var uuid = s.join("").toUpperCase();
  return uuid
}
 
module.exports = {
  wxuuid: wxuuid
}