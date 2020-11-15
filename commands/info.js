const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Defensie')
            .setDescription("Zet de beschrijving")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('')
            .setImage('https://i.ytimg.com/vi/Tir-o3INrOc/maxresdefault.jpg')
            .setTimestamp()
            .setFooter('Hoi', 'https://i.ytimg.com/vi/Tir-o3INrOc/maxresdefault.jpg');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}