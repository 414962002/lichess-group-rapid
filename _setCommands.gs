function setCommands() {

  var commands = [
  { command: "iorekhov", description: "choose Ivan" },
  { command: "o_barbara", description: "choose Barbara" },
  { command: "egoreh", description: "choose Egor" },
  { command: "galina19", description: "choose Galina" },
  { command: "magdalenka17", description: "choose Anastasia" },
  { command: "martin11100710", description: "choose Martin" },
  { command: "sofia_orekhova69", description: "choose Sofia" },
  { command: "elenafrancevna", description: "choose Lena" }
  ];

  var url = "https://api.telegram.org/bot" + token + "/setMyCommands";
  var payload = {
    commands: JSON.stringify(commands)
  };

  var options = {
    method: "post",
    payload: payload
  };

  UrlFetchApp.fetch(url, options);
}
