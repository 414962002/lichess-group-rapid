let keyboard_text_rapid = {
  "inline_keyboard": [
    [{ text: 'Всего игр', callback_data: 'rapidGames' }, { text: 'Выиграно', callback_data: 'rapidWin' }],
    [{ text: 'Проиграно', callback_data: 'rapidLoss' }, { text: 'Ничьих', callback_data: 'rapidDraw' }],
    [{ text: 'Рейтинг', callback_data: 'rapidRating' }, { text: 'Прогресс', callback_data: 'rapidProgrs' }]
  ],
  parse_mode: "HTML",
}