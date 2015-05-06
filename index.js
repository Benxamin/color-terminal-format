module.exports = function() {
  return function(val, str) {
    if (!str) return;
    val = val || 37; // default FgWhite.
    return "\x1b["+ val +"m"+ str +"\x1b[0m";
  };
};
