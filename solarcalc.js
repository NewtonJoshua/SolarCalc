// Equations based on NOAA’s Solar Calculator; all angles in radians.
// http://www.esrl.noaa.gov/gmd/grad/solcalc/

(function () {

  var test = function () {
    return 'test';
  }

  // Expose SolarCalc as a global object
  SolarCalc = {
    test: test
  };

  // Export the SolarCalc object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = SolarCalc;
    }
    exports.SolarCalc = SolarCalc;
  } else {
    root.SolarCalc = SolarCalc;
  }

})();

