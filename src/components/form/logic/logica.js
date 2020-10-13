export const validarCedula = (ci) => {
  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  var difCoef = parseInt(arrCoefs.length - ci.length);
  for (var i = ci.length - 1; i > -1; i--) {
    var dig = ci.substring(i, i + 1);
    var digInt = parseInt(dig);
    var coef = arrCoefs[i + difCoef];
    suma = suma + digInt * coef;
  }
  var result = false;
  if (suma % 10 === 0) {
    result = true;
  }
  return result;
};
