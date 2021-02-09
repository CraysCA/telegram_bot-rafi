const express = require('express');


const app = express();
app.listen(4000);

app.get("/", (req, res)=>{
    res.send("Online");
})







const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
 const bot = new Telegraf('1467528500:AAE1qHi8R97qsDfVdUQsyolZrz9QFgORSZ8');

 bot.start( async (ctx)=>{
    return await ctx.reply('¿Donde está david? he venido a cogermelo.');
 });

  bot.hears(['Walter marisco', 'walter marisco', 'Walter marico', 'walter marico', 'WALTER MARICO', 'WALTER MARISCO'], async (ctx)=>{
    return  await ctx.reply(ctx.from.first_name +', dile a tu mamá por qué yo soy marisco...',  Extra.inReplyTo(ctx.message.message_id));
});

bot.hears(['Malditos frikis', 'malditos frikis', 'malditos frikis xd', 'Maldito friki'], async (ctx)=>{
    return   await ctx.reply(ctx.from.first_name +', Mi pana vaya a doblarsela a... Verga loco, David me dijo anoche que te botaron', Extra.inReplyTo(ctx.message.message_id));
});

bot.hears(['Mmlo', 'MMLO', 'mmlo', 'mmlo, anda', 'mmlo anda', 'MMlo', 'Mamenlo', 'mamenlo', 'Mamalo', 'mamalo', 'MAMALO'], async (ctx)=>{
    return  await ctx.reply('PERO PELATE ESA VERGA PUES, PELATELA.',  Extra.inReplyTo(ctx.message.message_id));
});

bot.mention(['Delpretti', 'OnlyCrays', 'PicoTresxd', 'JesusFIR'],  async(ctx)=>{
    return  await  ctx.reply(ctx.from.first_name +', Mmlo.',  Extra.inReplyTo(ctx.message.message_id));
});

bot.hears(['piwi', 'PIWI', 'Piwi'], async (ctx)=>{
    return  await ctx.reply(ctx.from.first_name +', Mmlo.',  Extra.inReplyTo(ctx.message.message_id));
});
bot.hears(['F', 'F, bro', 'f', 'f, bro', 'F, mano', 'f, mano', 'coño, f', 'Coño, F'], async (ctx)=>{
    return  await ctx.reply('Coño mano, F.',  Extra.inReplyTo(ctx.message.message_id));
});
 bot.command('send', async (ctx)=>{
    return await ctx.reply('@Delpretti te envié un correo, revisa el OutLook.');
});
bot.hears(['Verga','VERGA', 'verga', 'VERGA...', 'Verga...', 'verga...', 'VErga' ], async (ctx)=>{
    return  await ctx.reply('Exacto...',  Extra.inReplyTo(ctx.message.message_id));
});

 bot.launch()