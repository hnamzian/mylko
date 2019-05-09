module.exports = mobile => {
  if (!mobile.startsWith("0") && !mobile.startsWith("+98")) return false;

  return mobile.startsWith("0") ? mobile.replaceAt(0, "+98") : mobile;
};
