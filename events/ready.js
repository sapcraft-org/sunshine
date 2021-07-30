module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. ready sapphire ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(client.config.discord.activity);
};