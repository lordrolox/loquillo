export default function loquillo(str) {

  var translation = str;

  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str) {
    const length = str.length;
    let translation = '';
    let pase = false;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
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
    const firstHalf = translation.slice(0, Math.round(translation.length / 2));
    const secondHalf = translation.slice(Math.round(translation.length / 2));
    translation = `${firstHalf}-${secondHalf}`
  }
  return translation;
}
