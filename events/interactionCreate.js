module.exports = {
    name: 'interactionCreate',
    once: false,
    run: async interaction => {
        if (!interaction.isCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) return;
    
        try {
            await command.run(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while running this command!', ephemeral: true });
        }
    }
}