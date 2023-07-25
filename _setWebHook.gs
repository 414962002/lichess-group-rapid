/**
 * Sets the webhook for the Telegram bot to the specified URL.
 *
 * @param {string} telegramUrl - The base URL for the Telegram bot API.
 * @param {string} webAppUrl - The URL of the web application to receive updates from the Telegram bot.
 * @return {string} The response from the server after setting the webhook.
 */

function setWebhook() {
  let url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}

