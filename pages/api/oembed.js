export default (req, res) => {
  res.status(200).json({
    version: "1.0",
    type: "rich",
    provider_name: "KevinWong.co",
    provider_url: "https://nowplaying.kevinwong.co",
    title: "Now Playing",
    height: "200",
    width: "500",
    html: '<iframe style="width: 100%; overflow: hidden" src="https://nowplaying.kevinwong.co" width="500" height="200" frameborder="0" scrolling="no"></iframe>',
  });
};
