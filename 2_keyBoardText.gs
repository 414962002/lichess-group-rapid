let keyboard_text = {
  "inline_keyboard": [
    [{ text: 'Всего игр', callback_data: 'rapidGames' }, { text: 'Выиграно', callback_data: 'countWinH' }],
    [{ text: 'Проиграно', callback_data: 'lossWinH' }, { text: 'Ничьих', callback_data: 'drawWinH' }],
    [{ text: 'Рейтинг', callback_data: 'rapidRating' }, { text: 'Прогресс', callback_data: 'rapidProgrs' }]
  ],
  parse_mode: "HTML",
}