const { Command } = require('discord.js-commando');

module.exports = class SkipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      aliases: ['skip-song', 'advance-song'],
      memberName: 'skip',
      group: 'music',
      description: 'skip the current song',
      guildOnly: true
    });
  }

  run(message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a voice channel and try again retard');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('No song playing');
    } else if (message.guild.triviaData.isTriviaRunning) {
      return message.reply(`You can't skip a trivia you dumb fuck, use teh command end-trivia`);
    }
    message.guild.musicData.songDispatcher.end();
  }
};
