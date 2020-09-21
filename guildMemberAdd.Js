bot.on("guildMemberAdd", async member => {
  let Config = db.get(`${member.guild.id}.Config.Welcome.ED`);
  if (Config === "YA") {
    let Channel = db.get(`${member.guild.id}.Config.Welcome.Channel`);
    if (!Channel) {
      return;
    } else {
      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "URL_Background.png";
        
      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "WELCOME (Default Message)";
        
      var imageUrlRegex = /\?size=2048$/g;
      var { body: avatar } = await get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size512"));
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 450)
            .addImage(background, 0, 0, 1024, 450)
            .setColor("#ffffff")
            .addCircle(512, 155, 120)
            .addCircularImage(avatar, 512, 155, 115)
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText("WELCOME", 512, 355)
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${member.user.tag}`, 512, 395)
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 430)
            .toBuffer();
      };
      let Channelz = bot.channels.get(`${Channel}`);
      Channelz.send({files: [{ attachment: await createCanvas(), name: "welcome.png" }]});
    };
  } else {
    return;
  };
});
