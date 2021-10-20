const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING"
    ]
});
client.on("guildMemberAdd", async member => {
    let time = Date.now() - member.user.createdTimestamp
    if (time < 120000) {
        client.guilds.cache.get(member.guild.id).members.kick(member.id)
        console.log(`Kick ${member.user.username} | เวลา ${time}`)
        }
})

client.on('ready', async (client) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    console.log(`Login as ${client.user.username}`)
    setInterval(function() {
        let texta = [`${numberWithCommas(client.guilds.cache.reduce((a, b) => a + b.memberCount, 0))} User`, `${numberWithCommas(client.guilds.cache.size)} Server`];
        let randomType = texta[Math.floor((Math.random() * texta.length))];
        client.user.setActivity(`${randomType}`,{ type: 'WATCHING' })
    }, 9000);
})


client.login("ODM2MDMyNjI0NjE4NzY2Mzc2.YIYGDg.ckLcmhMwleXCNtF0Ur7ohVKwF5c")