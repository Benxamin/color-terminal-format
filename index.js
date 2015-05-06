module.exports = function() {
  return function(hex, str) {
    if (!str) return;
    hex = hex || 37; // default FgWhite.
    return "\x1b["+ hex +"m"+ str +"\x1b[0m";
  };
};
