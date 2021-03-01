const Discord= require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=>{
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message', msg=>{
    if(msg.content === 'pogchamp'){
        msg.reply('how are you today?');
        msg.reply('1 very pogchamp ,2 kinda pogchamp ,3 pogish ,4 not very pog ,5 unpogchamp ,6 need pat');

    }
});

//reply 2
client.on('message', msg=>{
    if(msg.content === '2'){
        msg.reply('2 kinda pogchamp.. #fine.. this is an acceptable answer, wish u were better tho D:');
        
    }
});
//reply 3
client.on('message', msg=>{
    if(msg.content === '3'){
        msg.reply('3 pogish.. ohno..is something bothering you friend?');
        
    }
});
//reply 4
client.on('message', msg=>{
    if(msg.content === '4'){
        msg.reply('4 not very pog.. not good..whats wrong buddy');
        
    }
});

//reply 5
client.on('message', msg=>{
    if(msg.content === '5'){
        msg.reply('5 unpogchamp im sorry fren :c hope ur okay!');
        
    }
});
//reply 6
client.on('message', msg=>{
    if(msg.content === '6'){
        msg.reply('6 need a pat...');
        
    }
});


//login token
client.login('ODE1OTcxNTA4NzM5NjM3MjU4.YD0Krw.KZBVMuRb1yAnRubNDDhgH6Z0NhM');