/**
 * Sends an answer to the callback query.
 *
 * @param {any} chat_id - The ID of the chat where the callback query originated.
 * @param {string} callback_query_id - The ID of the callback query.
 * @param {string} text - The text of the answer.
 * @return {void} 
 */

function sendAnswerCallbackQuery(chat_id, callback_query_id, text) {
  const url = `https://api.telegram.org/bot${token}/`;
  const data = {
    method: "post",
    payload: {
      method: "answerCallbackQuery",
      chat_id: String(chat_id),
      callback_query_id,
      text,
      show_alert: false,
      parse_mode: "HTML"
    }
  };

  UrlFetchApp.fetch(url, data);
}



