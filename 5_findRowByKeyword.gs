/**
 * Finds the row index that contains a given keyword in a spreadsheet.
 *
 * @param {string} keyword - The keyword to search for.
 * @return {number} The index of the row containing the keyword, or -1 if the keyword is not found.
 */

function findRowByKeyword(keyword) {
  let values = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange().getValues();

  for (i = 0; i < values.length; i++) {
    let row = values[i];
    for (j = 0; j < row.length; j++) {
      if (row[j].toString().toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {

        Logger.log('Keyword found in row ' + (i + 1));
        return i + 1;
      }
    }
  }
  Logger.log('Keyword not found');
  return -1;
}
