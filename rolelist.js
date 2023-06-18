const { EmbedBuilder } = require('discord.js');

const roles = interaction.guild.roles.cache;
const sortedRoles = roles.sort((a, b) => b.position - a.position);
const roleList = sortedRoles.map(r => `${r}`).join("\n");

const rolesE = new EmbedBuilder()
  .setDescription(`>>> ${roleList}`)

interaction.reply({ embeds: [rolesE] });
