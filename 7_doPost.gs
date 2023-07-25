/**
 * Handles the HTTP POST request.
 *
 * @param {Object} e - The event object representing the HTTP request.
 * @return {void}
 */


function doPost(e) {
  // it parses the JSON contents of the postData property 
  // of the request object
  const contents = JSON.parse(e.postData.contents);

  // If the parsed JSON has a property called 'message', 
  // it retrieves the 'text' and 'from.id' properties 
  // of the 'message' object
  if (contents.hasOwnProperty('message')) {
    const data = contents.message.text;
    const chatId = contents.message.from.id;


    /**
     * Retrieves data from the Lichess API and stores it in a spreadsheet.
     *
     * @return {void} No return value
     */

    function getLichessToSpreadsheet() {
      let sheet = SpreadsheetApp.getActiveSheet();
      let lichessLink = "https://lichess.org/api/user" + data;
      let response = UrlFetchApp.fetch(lichessLink);

      // main let for get ndjson info
      let ndjson = response.getContentText();
      let parseNDJSON = JSON.parse(ndjson);

      // date and time actual
      let dateTime = [[new Date().toLocaleString('ru')]];

      // parseNDJSON
      let userName = [parseNDJSON.username];
      let rapidGames = [parseNDJSON.perfs.rapid.games];
      let countWinH = [parseNDJSON.count.winH];
      let lossWinH = [parseNDJSON.count.lossH];
      let drawWinH = [parseNDJSON.count.drawH];
      let rapidRating = [parseNDJSON.perfs.rapid.rating];
      let rapidProgrs = [parseNDJSON.perfs.rapid.prog];

      // part of createdAt
      let createdAt = [parseNDJSON.createdAt];
      let humanReadableDate = new Date(parseInt(createdAt));
      let dateStr = humanReadableDate.getFullYear() + "/" + (humanReadableDate.getMonth() + 1) + "/" + humanReadableDate.getDate()

      // the retrieved data is written to 
      // a specific range in the active sheet 
      // of the spreadsheet.
      const values = [dateTime, userName, rapidGames, countWinH, lossWinH, drawWinH, rapidRating, rapidProgrs, dateStr];
      const range = sheet.getRange('a2:i2');

      for (let i = 0; i < values.length; i++) {
        range.offset(0, i).setValue(values[i]);
      }
    }

    // If the value matches the 'data' variable, 
    // the getLichessToSpreadsheet function is called, 
    // a text is sent to the chat identified by 'from.id', 
    // and a value is set in the 'B2' cell of the active sheet
    switch (data) {
      case data:
        getLichessToSpreadsheet();
        sendText(chatId, data + ` :`, keyboard_text);
        SpreadsheetApp.getActiveSheet().getRange('B2').setValue(data);
        break;

      default:
        sendText(chatId, `🥹`);
    }

  } else {
    const cbData = contents.callback_query.data;
    const chatIdCb = contents.callback_query.from.id;
    const callback_query_id = contents.callback_query.id;

    // If the 'message' object doesn't exist and instead there is a 
    // 'callback_query' object in the parsed JSON, another switch statement 
    // is used to execute different actions based on the value of the 'data' property. 
    // The corresponding index function is called to retrieve a value, 
    // an answer is sent to the callback query, and a text is sent to the chat
    switch (cbData) {
      case 'rapidGames':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(3)}`);
        sendText(chatIdCb, 'Всего игр - ' + index(3));
        break;
      case 'countWinH':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(4)}`);
        sendText(chatIdCb, 'Выиграно - ' + index(4));
        break;
      case 'lossWinH':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(5)}`);
        sendText(chatIdCb, 'Проиграно - ' + index(5));
        break;
      case 'drawWinH':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(6)}`);
        sendText(chatIdCb, 'Ничьих - ' + index(6));
        break;
      case 'rapidRating':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(7)}`);
        sendText(chatIdCb, 'Рейтинг - ' + index(7));
        break;
      case 'rapidProgrs':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `${index(8)}`);
        sendText(chatIdCb, 'Прогресс - ' + index(8));
        break; I
      default:
        sendText(chatIdCb, `🥹🥹`);
    }
  }
}


