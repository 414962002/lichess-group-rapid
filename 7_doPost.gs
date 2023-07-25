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
      // let lichessLink = "https://lichess.org/api/user" + data;
      let lichessRapidLink = 'https://lichess.org/api/user' + data + '/perf/rapid';
      let response = UrlFetchApp.fetch(lichessRapidLink);

      // main let for get ndjson info
      let dataJSON = response.getContentText();
      let parseJSON = JSON.parse(dataJSON);

      // date and time actual
      let dateTime = [[new Date().toLocaleString('ru')]];

      // parseNDJSON
      let userName = [parseJSON.user.name];
      let rapidGames = [parseJSON.stat.count.all];
      let rapidWin = [parseJSON.stat.count.win];
      let rapidLoss = [parseJSON.stat.count.loss];
      let rapidDraw = [parseJSON.stat.count.draw];
      let rapidRating = [parseJSON.perf.glicko.rating];
      let rapidProgrs = [parseJSON.perf.progress];

      // the retrieved data is written to 
      // a specific range in the active sheet 
      // of the spreadsheet.
      const values = [dateTime, userName, rapidGames, rapidWin, rapidLoss, rapidDraw, rapidRating, rapidProgrs];
      const range = sheet.getRange('A2:H2');

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
        sendText(chatId, data + ` :`, keyboard_text_rapid);
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
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `🧐`);
        sendText(chatIdCb, 'Всего игр - ' + index(3));
        break;
      case 'rapidWin':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `🤓`);
        sendText(chatIdCb, 'Выиграно - ' + index(4));
        break;
      case 'rapidLoss':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `😜`);
        sendText(chatIdCb, 'Проиграно - ' + index(5));
        break;
      case 'rapidDraw':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `🤗`);
        sendText(chatIdCb, 'Ничьих - ' + index(6));
        break;
      case 'rapidRating':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `🤔`);
        sendText(chatIdCb, 'Рейтинг - ' + index(7));
        break;
      case 'rapidProgrs':
        sendAnswerCallbackQuery(chatIdCb, callback_query_id, `😯`);
        sendText(chatIdCb, 'Прогресс - ' + index(8));
        break; I
      default:
        sendText(chatIdCb, `🐒`);
    }
  }
}


