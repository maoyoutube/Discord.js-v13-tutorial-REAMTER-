const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription("play a song"),
    run: async interaction => {
        if (!interaction.member.voice.channelId) return interaction.reply({ content: "You should go into the voice channel", ephemeral: true });

        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channelId,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });

        const player = createAudioPlayer();
        const resource = createAudioResource('./music/test music.mp3');

        connection.subscribe(player);

        player.play(resource);

        interaction.reply({ content: "Okay, I'll play the music", ephemeral: true });
    }
}