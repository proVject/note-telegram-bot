const TelegramApi = require("node-telegram-bot-api");
const { againtOptions, gameOptions } = require("./options");

const token = "1017300068:AAF1uMlYTI_9OHw2JmM7e6aDQ1OOn1n6rl8";

const bot = new TelegramApi(token, { polling: true });

const chats = {};

bot.setMyCommands([
  { command: "/start", description: "to start your chat" },
  { command: "/info", description: "to get info about you" },
  { command: "/game", description: 'to play a game. "Guess the number"' },
]);

const startGame = async (chatId) => {
  await bot.sendMessage(
    chatId,
    "let's play a game. Guess the number from 0 to 9"
  );
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  await bot.sendMessage(chatId, "Type your guess!", gameOptions);
};

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://cdn.tlgrm.ru/stickers/ff6/4b6/ff64b611-aa7c-3603-b73c-7cd86d4b71dc/192/6.webp"
      );
      return bot.sendMessage(chatId, "Hello friend!");
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `your name is ${msg.from.first_name} ${msg.from.last_name}`
      );
    }
    if (text === "/game") {
      return startGame(chatId);
    }
    return bot.sendMessage(chatId, "sorry, bro. I didn't understand you!");
  });
  bot.on("callback_query", async (msg) => {
    const chatId = msg.message.chat.id;
    const data = msg.data;
    if (data === "/again") {
      return startGame(chatId);
    }
    if (+data === chats[chatId]) {
      return bot.sendMessage(chatId, "success!", againtOptions);
    } else {
      return bot.sendMessage(
        chatId,
        `wrong! it was ${chats[chatId]}`,
        againtOptions
      );
    }
  });
};

start();
