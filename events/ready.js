module.exports = {
  name: "ready",
  async execute(client) {
      console.log('Abone Bot Aktif');
      client.user.setPresence({
          activity: {
              name: `${client.config.prefix}yardım`,
              type: "COMPETING"
          },
          status: "idle"
      });
  }
}