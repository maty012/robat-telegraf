const { Telegraf } = require("telegraf");
const bot = new Telegraf("1920150387:AAGDol7-f4D3-6yATw1H4R0Z3BTUFr7qMCQ");
bot.start(ctx => {
    console.log(ctx.message.from);
    return ctx.reply(`
   سلام خیلی خوش اومدی به ربات هیراگاناها
امید وارم بتونم کمکت کنم 
   اگه میخوای هیراگانا یاد بگیری روی این دکمه بزن
/hiragana
اگه میخوای کانچی یاد بگیری روی این یکی بزن😊
   /kangi
   @maty_exchange_bot   `);
});
bot.help(ctx => {
    ctx.reply("راهنما برای شما فعال است");
});
bot.settings(ctx => {
    ctx.reply("تنضیمات خفنی در راه است");
})
bot.command(["hiragana", "Hiragana"], ctx => {
    ctx.reply(`شما  میتوانید انتخاب کنید
/part one          
/parttow

بهتره که از قسمت اول شروع کنی
`)

})
bot.hears([/.hiro./, /^hiro/, "hiro"], ctx => {
    ctx.reply("اگر به لیست هیراگانا ها نیاز دارید میتوانید به /hiragana را فشار دهید")
})

bot.on("voice", ctx => ctx.reply("ویس فرستادی متاسفانه ویست رو نمیتونم بخونم پس متن بفرست ممنون"))
//  bot.on("باشه", ctx => ctx.reply("پس الان میام درش بیارم"))
bot.hears("باشه", ctx => ctx.reply("پس الان میام درش بیارم"));
bot.on("edited_message", ctx => {
    console.log(ctx)
    ctx.reply("اوکی مشکلی نیست متنت رو تغییر دادی زیر نظر دارمت")

})
bot.mention("Maty_012" , ctx=>ctx.reply("شما یک نفر را اد کردید"))
bot.hashtag("ss", async ctx=>{
console.log(ctx.message.from);
await ctx.deleteMessage(ctx.message.message_id);
 const thashtag = await ctx.reply(`لطفا هشتگ نگزارید ممنون
 اگه یک بار دیگه تکرا بشه
 ${ctx.message.from.first_name}   شلوار از پات دریمارم
 فهمیدی ؟؟؟؟؟؟؟
 نادرس علمم اگه شلوارت نکنم
 باشه
 `);
setTimeout(() => {
    deleteMessage(thashtag.message_id);
}, 2500);

})

bot.launch();