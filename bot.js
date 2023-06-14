const { Bot } = require("grammy");
const { transliteCT } = require("./translate");

const bot = new Bot("5970246807:AAE_mgb4zF1FHcYxXYiiw7kWmkhkafUOi-c");

let translate = 0;

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;
  const username = ctx.chat.username;
  const name = ctx.chat.first_name;
  if (ctx.message.text == "/start") {
    await ctx.api.sendMessage(
      chatId,
      `${name} welcome to my latin-cyrill bot. Now send text click /translate`
    );
  } else if (ctx.message.text == "/translate") {
    await ctx.api.sendMessage(chatId, `${name} send words`);
    translate = 1;
  } else if (translate == 1) {
    const text = ctx.message.text;
    const nimadir = await transliteCT(text);
    console.log(nimadir);
    await ctx.api.sendMessage(chatId, nimadir);
  }
});

bot.start();
