const { Telegraf } = require("telegraf");
//const { text, callback } = require("telegraf/typings/button");
const bot = new Telegraf("1920150387:AAGDol7-f4D3-6yATw1H4R0Z3BTUFr7qMCQ");

const getuserrole=(user)=>{
 const role =["درجه ۱","درجه ۲"," درجیه ۳"];
 const index= Math.floor (Math.random()*roles.length);
 return roles [index];
}

// bot.use((ctx,next)=>
// {
//     console.log(ctx.message.chat)
//     ctx.reply("go to bed")
//     const role = getuserrole(ctx.message.from);
//     ctx.state.role=role;
//     next();
// })
bot.command(["pro","Pro"],ctx=>{
const  role =ctx.state.role;
ctx.reply(`شما طرح ${role} را خریداری کردی پس میتوندید این محصولات رو ببنید`)
})



bot.start(ctx => {
    console.log(ctx.message.from);
    ctx.reply(`
    سلام  به ربات سفارش غذا خوش اومدی😊
    ${ctx.message.from.first_name} عزیز برای سفارش شما باید ثبت نام کنید
    `)
   
    let watashiwa = "hi every one i very happy becaus see you";
 bot.telegram.sendMessage(ctx.chat.id, watashiwa, {

        reply_markup: {
            inline_keyboard: [
                [{
                    text: "🍱غذا ها ",
                    callback_data: 'foods'
                }
                ],
                [{
                    text: "🍔ساندویچ ها ",
                    callback_data: 'fastfood'
                },
                {
                    text: "🍚غذا سنتی ",
                    callback_data: 'iranianfoods'
                }
                ],
                [{
                    text: "🌭ساندویچ مغز",
                    callback_data: 'fastfoodmaghz'
                },
                {
                    text: "🍔ساندویچ مرغ ",
                    callback_data: 'iranianfoodmorgh'
                },{
                    text: "🍖چلو کباب",
                    callback_data: 'fastfoodkbab'
                },
                {
                    text: "🐟چلو ماهی",
                    callback_data: 'iranianfoodsmahi'
                }
                ], [{
                    text: " 🍺نوشیدنی ها",
                    callback_data: 'drink'
                }
                ],
                [{
                    text: "🍮نوشیدنی های گرم ",
                    callback_data: 'drinkhot'
                },
                {
                    text: "🍷نوشیدنی های سرد",
                    callback_data: 'drinkcould'
                }
                ],
                [{
                    text: "🍹قهوه",
                    callback_data: 'coffe'
                },
                {
                    text: "🍷چایی",
                    callback_data: 'tea'
                },{
                    text: "🥭اب انبه",
                    callback_data: 'mango'
                },
                {
                    text: "🥛شیر موز",
                    callback_data: 'milkbanana'
                }
                ]
            ]
        }
    }
    )
}
)
bot.on("voice", ctx => { return ctx.reply("ویس نفرست نمیفهمی؟؟؟؟") })
bot.launch();
//node orders.js