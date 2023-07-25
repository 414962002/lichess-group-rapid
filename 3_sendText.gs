/**
 * Sends a text message to a specified chat ID using the Telegram API.
 *
 * @param {any} chat_id - The ID of the chat to send the message to.
 * @param {string} text - The text message to send.
 * @param {object} keyboard_text - The keyboard text to be displayed along with the message.
 * @return {void}
 */

function sendText(chat_id, text, keyboard_text) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboard_text)
    }
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
}