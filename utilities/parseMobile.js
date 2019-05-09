module.exports = mobile => {
  if (!mobile.startsWith("0") && !mobile.startsWith("+98")) return false;

  return mobile.startsWith("0") ? replaceAt(mobile, 0, "+98") : mobile;
};

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}