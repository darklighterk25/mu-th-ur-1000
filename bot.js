const DISCORD = require('discord.js');
const CONSTANTS = require('./constants');   // Keeping credentials hidden from repo.
const BOT = new DISCORD.Client();

BOT.on('message', message => {
    if (message.content == 'What is special order 937?') {
        message.reply('Priority one\n' +
            'Insure return of organism for analysis.\n' +
            'All other considerations secondary.\n' +
            'Crew expendable.');
    }
});

BOT.on('ready', ()=> {
    console.log('Interface 2037 ready for inquiry...');
});

BOT.login(CONSTANTS.BOT_TOKEN);
