module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
}