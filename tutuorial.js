const {Telegraf}=require("telegraf");
const token="1895598651:AAGUgoWRivVuCxuilw0sHCLaiNtSWG9Xzno";
const bot=new Telegraf(token);
bot.start(ctx=>{
console.log(ctx.message.from);
return ctx.reply("سلام خوبی برو چطوری برو به جهنم لعنتی")

});
bot.launch();

 