/**
 * Deletes the webhook by making a request to the Telegram API.
 *
 * @param {string} telegramUrl - The base URL for the Telegram API.
 * @param {string} webAppUrl - The URL of the web app to remove from the webhook.
 * @return {string} The response content as text.
 */

function deleteWebhook() {
  let url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}