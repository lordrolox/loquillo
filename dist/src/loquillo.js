'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loquillo;
function loquillo(str) {

  var translation = str;

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var pase = false;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += pase ? char.toUpperCase() : char.toLowerCase();
      pase = !pase;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  if (translation.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(translation.length / 2));
    var secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = firstHalf + '-' + secondHalf;
  }
  return translation;
}