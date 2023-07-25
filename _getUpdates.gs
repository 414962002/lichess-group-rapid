/**
 * Retrieves updates from the Telegram API.
 *
 * @param {string} token - The API token.
 * @return {Object} The data retrieved from the API.
 */

function getUpdates(token) {
  var url = "https://api.telegram.org/bot" + token + "/getUpdates";
  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();
  var data = JSON.parse(content);
  return data;
}

// for GoogleAppsScrit's Logger
function processUpdates() {
  var updates = getUpdates(token);
  Logger.log(updates);
}


