const {
    BOT_TOKEN,
    GLADOS,
    GRIEVOUS,
    HAL_9000,
    JULES,
    MU_TH_UR_6000,
    SHODAN
} = require('./constants');   // Keeping credentials hidden from repo.

const { Client, RichEmbed, WebhookClient } = require('discord.js');
const bot = new Client();

// Web hooks
const glados = new WebhookClient(GLADOS.id, GLADOS.token);
const grievous = new WebhookClient(GRIEVOUS.id, GRIEVOUS.token);
const hal_9000 = new WebhookClient(HAL_9000.id, HAL_9000.token);
const jules = new WebhookClient(JULES.id, JULES.token);
const mu_th_ur_6000 = new WebhookClient(MU_TH_UR_6000.id, MU_TH_UR_6000.token);
const shodan = new WebhookClient(SHODAN.id, SHODAN.token);

// Embeds
const error_embed = new RichEmbed()
    .setTitle('Error')
    .setColor(0xFF0000);

bot.on('message', message => {
    const content = message.content.toLowerCase();
    switch (content) {
        case 'hello there!':
            grievous.send('General Kenobi!');
            setTimeout(() => { grievous.send('You\'re a bold one!') }, 1000);
            break;
        case 'open the pod bay doors hal':
            hal_9000.send('I\'m sorry Dave, I\'m afraid I can\'t do that');
            break;
        case 'what is special order 937?':
            mu_th_ur_6000.send('Priority one');
            setTimeout(() => { mu_th_ur_6000.send('Insure return of organism for analysis.') }, 100);
            setTimeout(() => { mu_th_ur_6000.send('All other considerations secondary.') }, 2000);
            setTimeout(() => { mu_th_ur_6000.send('Crew expendable.') }, 3000);
            break;
        case '!ayuda':
            jules.send('English, motherfucker! Do you speak it?!');
            break;
    }
});

bot.on('ready', ()=> {
    bot.user.setStatus('dnd');
    bot.user.setPresence({
        game: {
            type: 'LISTENING',
            name: 'The Sound of Silence'
        }
    });
    mu_th_ur_6000.send('Interface 2037 ready for inquiry...');
});

bot.login(BOT_TOKEN);
