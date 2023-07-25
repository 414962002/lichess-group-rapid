/**
 * Retrieves the value from the specified column in the active sheet, based on the given row number.
 *
 * @param {number} n - The column number.
 * @return {string} The value in the specified column and row.
 */

function index(n) {
  let name = SpreadsheetApp.getActiveSheet().getRange('B2').getDisplayValue();
  let row = findRowByKeyword(name);
  let out = SpreadsheetApp.getActiveSheet().getRange(row, n).getDisplayValue();
  return out;
}


