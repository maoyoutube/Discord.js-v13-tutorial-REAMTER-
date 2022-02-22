const { Client } = require("discord.js");
const { token, intent } = require("./config.js");

const client = new Client({ intents: intent });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName == 'ping') {
        interaction.reply('pong!');
    }
})

client.login(token);