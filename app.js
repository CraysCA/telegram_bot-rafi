const express = require('express');


const app = express();
app.listen(4000);

app.get("/", (req, res)=>{
    res.send("Online");
})









const Telegraf = require('telegraf');

 const bot = new Telegraf('1467528500:AAE1qHi8R97qsDfVdUQsyolZrz9QFgORSZ8');

 bot.start((ctx)=>{
     ctx.reply('¿Donde está david? he venido a cogermelo')
 });

bot.hears(['Walter marisco', 'walter marisco', 'Walter marico', 'walter marico', 'WALTER MARICO', 'WALTER MARISCO'], (ctx)=>{
    ctx.reply(ctx.from.first_name +', dile a tu mamá por qué yo soy marisco');
});

bot.hears(['Malditos frikis', 'malditos frikis', 'malditos frikis xd', 'Maldito friki'], (ctx)=>{
    ctx.reply(ctx.from.first_name +', Mi pana vaya a doblarsela al jefe');
});

bot.hears(['Mmlo', 'MMLO', 'mmlo', 'mmlo, anda', 'mmlo anda', 'MMlo', 'Mamenlo', 'mamenlo'], (ctx)=>{
    ctx.reply('PERO PELATE ESA VERGA PUES PELATELO');
});

bot.mention(['Delpretti', 'OnlyCrays', 'PicoTresxd', 'JesusFIR'], (ctx)=>{
    ctx.reply(ctx.from.first_name +', Mmlo');
});

bot.hears(['piwi', 'PIWI', 'Piwi'],(ctx)=>{
    ctx.reply(ctx.from.first_name +', Mmlo');
})

 bot.launch()